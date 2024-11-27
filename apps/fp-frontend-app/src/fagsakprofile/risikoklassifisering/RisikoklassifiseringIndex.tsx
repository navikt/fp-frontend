import React, { useCallback, useEffect, useMemo } from 'react';
import { useLocation,useNavigate } from 'react-router-dom';

import { AksjonspunktStatus, KodeverkType } from '@navikt/fp-kodeverk';
import { AvklartRisikoklassifiseringAp,RisikoklassifiseringSakIndex } from '@navikt/fp-sak-risikoklassifisering';
import { AksessRettigheter, Behandling,NavAnsatt } from '@navikt/fp-types';

import { getRiskPanelLocationCreator } from '../../app/paths';
import { useTrackRouteParam } from '../../app/useTrackRouteParam';
import { getAccessRights } from '../../app/util/access';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';
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

  const alleKodeverk = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const navAnsatt = initFetchData.innloggetBruker;
  const rettigheter = useMemo(
    () => getAccessRights(navAnsatt, fagsak.status, behandlingStatus, behandlingType),
    [fagsak.status, behandlingStatus, behandlingType],
  );
  const readOnly = useMemo(() => getReadOnly(navAnsatt, rettigheter, erPaaVent), [rettigheter, erPaaVent]);

  const toggleRiskPanel = useCallback(() => {
    navigate(getRiskPanelLocationCreator(location)(!isRiskPanelOpen));
  }, [location, isRiskPanelOpen]);

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

  const submitAksjonspunkt = useCallback(
    (aksjonspunkt: AvklartRisikoklassifiseringAp) => {
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
    },
    [behandlingUuid, behandlingVersjon],
  );

  return (
    <RisikoklassifiseringSakIndex
      aksjonspunkt={risikoAksjonspunkt}
      risikoklassifisering={kontrollResultat}
      isPanelOpen={isRiskPanelOpen}
      readOnly={readOnly}
      submitAksjonspunkt={submitAksjonspunkt}
      toggleRiskPanel={toggleRiskPanel}
      faresignalVurderinger={alleKodeverk[KodeverkType.FARESIGNAL_VURDERING]}
    />
  );
};
