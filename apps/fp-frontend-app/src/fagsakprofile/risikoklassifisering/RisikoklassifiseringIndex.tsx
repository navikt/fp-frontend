import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktStatus, KodeverkType } from '@navikt/fp-kodeverk';
import { AvklartRisikoklassifiseringAp, RisikoklassifiseringSakIndex } from '@navikt/fp-sak-risikoklassifisering';
import { AksessRettigheter, Behandling, NavAnsatt } from '@navikt/fp-types';

import { getRiskPanelLocationCreator } from '../../app/paths';
import { useTrackRouteParam } from '../../app/useTrackRouteParam';
import { getAccessRights } from '../../app/util/access';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { initFetchOptions, useFagsakApi } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { FagsakData } from '../../fagsak/FagsakData';

const getReadOnly = (navAnsatt: NavAnsatt, rettigheter: AksessRettigheter, erPaaVent: boolean) => {
  if (erPaaVent) {
    return true;
  }
  const { kanSaksbehandle } = navAnsatt;
  return !kanSaksbehandle || !rettigheter.writeAccess.isEnabled;
};

interface Props {
  fagsakData: FagsakData;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  setBehandling: (behandling: Behandling) => void;
}

/**
 * RisikoklassifiseringIndex
 *
 * Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
export const RisikoklassifiseringIndex = ({ fagsakData, behandlingVersjon, behandlingUuid, setBehandling }: Props) => {
  const fagsak = fagsakData.getFagsak();
  const behandling = fagsakData.getBehandling(behandlingUuid);
  const erPaaVent = behandling ? behandling.behandlingPaaVent : false;
  const behandlingStatus = behandling?.status;
  const behandlingType = behandling?.type;
  const risikoAksjonspunkt = behandling?.risikoAksjonspunkt;
  const kontrollresultatBehandling = behandling?.kontrollResultat;

  // Hvis behandlingen ikke har kontrollresultat viser vi gjeldende kontrollresultat på
  // fagsaken (siste vedtatte førstegangssøknad) slik at vi kan vi se resultat også i revurderinger
  const kontrollResultat = kontrollresultatBehandling || fagsak.kontrollResultat;

  const { selected: isRiskPanelOpen = false } = useTrackRouteParam<boolean>({
    paramName: 'risiko',
    parse: isOpen => isOpen === 'true',
    isQueryParam: true,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const { kodeverkOptions } = useFagsakApi();
  const { data: initFetchData } = useQuery(initFetchOptions());
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  const navAnsatt = notEmpty(initFetchData).innloggetBruker;
  const rettigheter = getAccessRights(navAnsatt, fagsak.status, behandlingStatus, behandlingType);
  const readOnly = getReadOnly(navAnsatt, rettigheter, erPaaVent);

  const toggleRiskPanel = () => {
    navigate(getRiskPanelLocationCreator(location)(!isRiskPanelOpen));
  };

  useEffect(() => {
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status === AksjonspunktStatus.OPPRETTET && !isRiskPanelOpen) {
      navigate(getRiskPanelLocationCreator(location)(true));
    }
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status === AksjonspunktStatus.UTFORT) {
      navigate(getRiskPanelLocationCreator(location)(false));
    }
  }, [!!risikoAksjonspunkt, behandlingUuid, behandlingVersjon]);

  const { startRequest: lagreRisikoklassifiseringAksjonspunkt } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.SAVE_AKSJONSPUNKT,
  );

  const submitAksjonspunkt = (aksjonspunkt: AvklartRisikoklassifiseringAp) => {
    if (!behandlingUuid || !behandlingVersjon) {
      return Promise.reject();
    }
    const params = {
      behandlingUuid,
      saksnummer: fagsak.saksnummer,
      behandlingVersjon,
      bekreftedeAksjonspunktDtoer: [
        {
          '@type': aksjonspunkt.kode,
          ...aksjonspunkt,
        },
      ],
    };

    return lagreRisikoklassifiseringAksjonspunkt(params).then(oppdatertBehandling => {
      if (oppdatertBehandling) {
        setBehandling(oppdatertBehandling);
      }
    });
  };

  return (
    <RisikoklassifiseringSakIndex
      aksjonspunkt={risikoAksjonspunkt}
      risikoklassifisering={kontrollResultat}
      isPanelOpen={isRiskPanelOpen}
      readOnly={readOnly}
      submitAksjonspunkt={submitAksjonspunkt}
      toggleRiskPanel={toggleRiskPanel}
      faresignalVurderinger={notEmpty(alleKodeverk)[KodeverkType.FARESIGNAL_VURDERING]}
    />
  );
};
