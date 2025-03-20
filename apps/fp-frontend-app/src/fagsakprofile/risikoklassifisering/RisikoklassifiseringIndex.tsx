import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

import { AksjonspunktStatus, KodeverkType } from '@navikt/fp-kodeverk';
import { type AvklartRisikoklassifiseringAp, RisikoklassifiseringSakIndex } from '@navikt/fp-sak-risikoklassifisering';
import type { AksessRettigheter, Behandling, BehandlingAppKontekst, Fagsak, NavAnsatt } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { getRiskPanelLocationCreator } from '../../app/paths';
import { useTrackRouteParam } from '../../app/useTrackRouteParam';
import { getAccessRights } from '../../app/util/access';
import { initFetchOptions, useFagsakApi } from '../../data/fagsakApi';
import { useBehandlingPollingOperasjoner } from '../../data/polling/useBehandlingPollingOperasjoner';
import { FagsakData } from '../../fagsak/FagsakData';

interface Props {
  fagsakData: FagsakData;
  behandling?: Behandling;
  setBehandling: (behandling: Behandling) => void;
}

/**
 * RisikoklassifiseringIndex
 *
 * Har ansvar for å vise risikoklassifisering for valgt behandling
 * Viser en av tre komponenter avhengig av: Om ingen klassifisering er utført,
 * om klassifisering er utført og ingen faresignaler er funnet og om klassifisering er utført og faresignaler er funnet
 */
export const RisikoklassifiseringIndex = ({ fagsakData, behandling, setBehandling }: Props) => {
  const fagsak = fagsakData.getFagsak();

  const { selected: isRiskPanelOpen = false } = useTrackRouteParam<boolean>({
    paramName: 'risiko',
    parse: isOpen => isOpen === 'true',
    isQueryParam: true,
  });

  const navigate = useNavigate();
  const location = useLocation();

  const toggleRiskPanel = () => {
    navigate(getRiskPanelLocationCreator(location)(!isRiskPanelOpen));
  };

  const { kodeverkOptions } = useFagsakApi();
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  const behandlingAppKontekst = fagsakData.getBehandling(behandling?.uuid);

  // Hvis behandlingen ikke har kontrollresultat viser vi gjeldende kontrollresultat på
  // fagsaken (siste vedtatte førstegangssøknad) slik at vi kan vi se resultat også i revurderinger
  return behandling && behandlingAppKontekst ? (
    <RisikoklassifiseringBehandling
      isRiskPanelOpen={isRiskPanelOpen}
      fagsak={fagsak}
      toggleRiskPanel={toggleRiskPanel}
      behandlingAppKontekst={behandlingAppKontekst}
      behandling={behandling}
      setBehandling={setBehandling}
    />
  ) : (
    <RisikoklassifiseringSakIndex
      risikoklassifisering={fagsak.kontrollResultat}
      isPanelOpen={isRiskPanelOpen}
      readOnly
      toggleRiskPanel={toggleRiskPanel}
      faresignalVurderinger={notEmpty(alleKodeverk)[KodeverkType.FARESIGNAL_VURDERING]}
    />
  );
};

interface RisikoBehandlingProps {
  fagsak: Fagsak;
  behandling: Behandling;
  behandlingAppKontekst: BehandlingAppKontekst;
  isRiskPanelOpen: boolean;
  toggleRiskPanel: () => void;
  setBehandling: (behandling: Behandling) => void;
}

const RisikoklassifiseringBehandling = ({
  fagsak,
  behandling,
  behandlingAppKontekst,
  setBehandling,
  toggleRiskPanel,
  isRiskPanelOpen,
}: RisikoBehandlingProps) => {
  const { behandlingPåVent, status, type, risikoAksjonspunkt, kontrollResultat } = behandlingAppKontekst;

  const { kodeverkOptions } = useFagsakApi();
  const initFetchQuery = useQuery(initFetchOptions());
  const { data: alleKodeverk } = useQuery(kodeverkOptions());

  const navAnsatt = notEmpty(initFetchQuery.data).innloggetBruker;
  const rettigheter = getAccessRights(navAnsatt, fagsak.status, status, type);
  const readOnly = getReadOnly(navAnsatt, rettigheter, behandlingPåVent);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status === AksjonspunktStatus.OPPRETTET && !isRiskPanelOpen) {
      navigate(getRiskPanelLocationCreator(location)(true));
    }
    if (!!risikoAksjonspunkt && risikoAksjonspunkt.status === AksjonspunktStatus.UTFORT) {
      navigate(getRiskPanelLocationCreator(location)(false));
    }
  }, [!!risikoAksjonspunkt, behandling.uuid, behandling.versjon]);

  const { lagreAksjonspunkter } = useBehandlingPollingOperasjoner(behandling, setBehandling);

  const lagreRisikoklassifiseringAksjonspunkt = (values: AvklartRisikoklassifiseringAp) => {
    lagreAksjonspunkter({
      behandlingUuid: behandling.uuid,
      behandlingVersjon: behandling.versjon,
      saksnummer: fagsak.saksnummer,
      bekreftedeAksjonspunktDtoer: [
        {
          '@type': values.kode,
          ...values,
        },
      ],
    });
  };

  return (
    <RisikoklassifiseringSakIndex
      aksjonspunkt={risikoAksjonspunkt ?? undefined}
      risikoklassifisering={kontrollResultat}
      isPanelOpen={isRiskPanelOpen}
      readOnly={readOnly}
      submitAksjonspunkt={lagreRisikoklassifiseringAksjonspunkt}
      toggleRiskPanel={toggleRiskPanel}
      faresignalVurderinger={notEmpty(alleKodeverk)[KodeverkType.FARESIGNAL_VURDERING]}
    />
  );
};

const getReadOnly = (navAnsatt: NavAnsatt, rettigheter: AksessRettigheter, erPaaVent: boolean) => {
  if (erPaaVent) {
    return true;
  }
  const { kanSaksbehandle } = navAnsatt;
  return !kanSaksbehandle || !rettigheter.writeAccess.isEnabled;
};
