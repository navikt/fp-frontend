import React, {
  FunctionComponent, useState, useCallback,
} from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  NavAnsatt, Fagsak, TotrinnsKlageVurdering, TotrinnskontrollSkjermlenkeContext, BehandlingAppKontekst,
} from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import TotrinnskontrollSakIndex from '@fpsak-frontend/sak-totrinnskontroll';

import useHistory from '../../app/useHistory';
import useLocation from '../../app/useLocation';
import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { createLocationForSkjermlenke } from '../../app/paths';
import { useKodeverk } from '../../data/useKodeverk';
import {
  FpsakApiKeys, requestApi, restApiHooks,
} from '../../data/fpsakApi';
import BeslutterModalIndex from './BeslutterModalIndex';

type Values = {
  fatterVedtakAksjonspunktDto: any;
  erAlleAksjonspunktGodkjent: boolean
};

const getLagreFunksjon = (
  behandlingId: number,
  saksnummer: number,
  selectedBehandlingVersjon: number,
  setAllAksjonspunktApproved: (erGodkjent: boolean) => void,
  setShowBeslutterModal: (visModal: boolean) => void,
  approveAp: (params: any) => Promise<any>,
) => (
  totrinnskontrollData: Values,
) => {
  const params = {
    behandlingId,
    saksnummer,
    behandlingVersjon: selectedBehandlingVersjon,
    bekreftedeAksjonspunktDtoer: [totrinnskontrollData.fatterVedtakAksjonspunktDto],
  };
  setAllAksjonspunktApproved(totrinnskontrollData.erAlleAksjonspunktGodkjent);
  setShowBeslutterModal(true);
  return approveAp(params);
};

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId?: number;
  behandlingVersjon?: number;
  totrinnskontrollSkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
  totrinnskontrollReadOnlySkjermlenkeContext?: TotrinnskontrollSkjermlenkeContext[];
}

/**
 * TotrinnskontrollIndex
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
const TotrinnskontrollIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  behandlingId,
  behandlingVersjon,
  totrinnskontrollSkjermlenkeContext,
  totrinnskontrollReadOnlySkjermlenkeContext,
}) => {
  const [visBeslutterModal, setVisBeslutterModal] = useState(false);
  const [erAlleAksjonspunktGodkjent, setErAlleAksjonspunktGodkjent] = useState(false);

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  const location = useLocation();
  const history = useHistory();

  const { brukernavn, kanVeilede } = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);

  const alleKodeverk = useKodeverk(behandling?.type);

  const { data: totrinnsKlageVurdering, state: totrinnsKlageVurderingState } = restApiHooks.useRestApi<TotrinnsKlageVurdering>(
    FpsakApiKeys.TOTRINNS_KLAGE_VURDERING, undefined, {
      keepData: true,
      updateTriggers: [behandlingId, behandlingVersjon],
      suspendRequest: !requestApi.hasPath(FpsakApiKeys.TOTRINNS_KLAGE_VURDERING),
    },
  );

  const { startRequest: godkjennBehandling } = restApiHooks.useRestApiRunner(FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT);

  const fetchPreview = useVisForhandsvisningAvMelding(behandling?.type);

  const forhandsvisVedtaksbrev = useCallback(() => {
    fetchPreview(false, {
      behandlingUuid: behandling.uuid,
      ytelseType: fagsak.sakstype,
      gjelderVedtak: true,
    });
  }, []);
  const onSubmit = useCallback(getLagreFunksjon(behandlingId, fagsak.saksnummer, behandlingVersjon,
    setErAlleAksjonspunktGodkjent, setVisBeslutterModal, godkjennBehandling),
  [behandlingId, behandlingVersjon]);

  if (!totrinnskontrollSkjermlenkeContext && !totrinnskontrollReadOnlySkjermlenkeContext) {
    return null;
  }

  if (totrinnsKlageVurderingState === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <>
      <TotrinnskontrollSakIndex
        behandling={behandling}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext || totrinnskontrollReadOnlySkjermlenkeContext}
        location={location}
        readOnly={brukernavn === behandling.ansvarligSaksbehandler || kanVeilede}
        onSubmit={onSubmit}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        fagsakYtelseType={fagsak.sakstype}
        alleKodeverk={alleKodeverk}
        behandlingKlageVurdering={totrinnsKlageVurdering}
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {visBeslutterModal && (
        <BeslutterModalIndex
          behandling={behandling}
          fagsakYtelseType={fagsak.sakstype}
          pushLocation={history.push}
          allAksjonspunktApproved={erAlleAksjonspunktGodkjent}
          totrinnsKlageVurdering={totrinnsKlageVurdering}
        />
      )}
    </>
  );
};

export default TotrinnskontrollIndex;
