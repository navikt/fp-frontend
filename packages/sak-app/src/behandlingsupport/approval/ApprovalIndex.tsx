import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import { withRouter } from 'react-router-dom';
import { push } from 'connected-react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import { Location } from 'history';

import fagsakYtelseType from '@fpsak-frontend/kodeverk/src/fagsakYtelseType';
import { useGlobalStateRestApiData, RestApiState } from '@fpsak-frontend/rest-api-hooks';
import vurderPaNyttArsakType from '@fpsak-frontend/kodeverk/src/vurderPaNyttArsakType';
import aksjonspunktCodes from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { featureToggle } from '@fpsak-frontend/konstanter';
import {
  NavAnsatt, Kodeverk, KodeverkMedNavn, Fagsak,
} from '@fpsak-frontend/types';
import { requireProps, LoadingPanel } from '@fpsak-frontend/shared-components';
import TotrinnskontrollSakIndex from '@fpsak-frontend/sak-totrinnskontroll';
import klageBehandlingArsakType from '@fpsak-frontend/kodeverk/src/behandlingArsakType';

import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { createLocationForSkjermlenke } from '../../app/paths';
import { getBehandlingerUuidsMappedById } from '../../behandling/selectors/behandlingerSelectors';
import {
  getBehandlingAnsvarligSaksbehandler,
  getBehandlingToTrinnsBehandling,
  getBehandlingVersjon,
  getBehandlingStatus,
  getBehandlingType,
  getBehandlingArsaker,
  getSelectedBehandlingId,
  getBehandlingsresultat,
} from '../../behandling/duck';
import {
  FpsakApiKeys, useRestApi, requestApi, useRestApiRunner,
} from '../../data/fpsakApiNyUtenRedux';
import { useFpSakKodeverk, useFpTilbakeKodeverk } from '../../data/useKodeverk';
import BeslutterModalIndex from './BeslutterModalIndex';

const getArsaker = (approval) => ([{
  code: vurderPaNyttArsakType.FEIL_FAKTA,
  isSet: approval.feilFakta,
}, {
  code: vurderPaNyttArsakType.FEIL_LOV,
  isSet: approval.feilLov,
}, {
  code: vurderPaNyttArsakType.FEIL_REGEL,
  isSet: approval.feilRegel,
}, {
  code: vurderPaNyttArsakType.ANNET,
  isSet: approval.annet,
}].filter((arsak) => arsak.isSet)
  .map((arsak) => arsak.code)
);

const getOnSubmit = (erTilbakekreving, behandlingId, saksnummer, selectedBehandlingVersjon, setAllAksjonspunktApproved,
  setShowBeslutterModal, approveAp) => (values) => {
  const aksjonspunkter = values.approvals
    .map((context) => context.aksjonspunkter)
    .reduce((a, b) => a.concat(b));

  const aksjonspunktGodkjenningDtos = aksjonspunkter
    .map((toTrinnsAksjonspunkt) => ({
      aksjonspunktKode: toTrinnsAksjonspunkt.aksjonspunktKode,
      godkjent: toTrinnsAksjonspunkt.totrinnskontrollGodkjent,
      begrunnelse: toTrinnsAksjonspunkt.besluttersBegrunnelse,
      arsaker: getArsaker(toTrinnsAksjonspunkt),
    }));

  // TODO (TOR) Fjern hardkodinga av 5005
  const fatterVedtakAksjonspunktDto = {
    '@type': erTilbakekreving ? '5005' : aksjonspunktCodes.FATTER_VEDTAK,
    begrunnelse: null,
    aksjonspunktGodkjenningDtos,
  };
  const params = {
    behandlingId,
    saksnummer,
    behandlingVersjon: selectedBehandlingVersjon,
    bekreftedeAksjonspunktDtoer: [fatterVedtakAksjonspunktDto],
  };
  setAllAksjonspunktApproved(aksjonspunkter.every((ap) => ap.totrinnskontrollGodkjent && ap.totrinnskontrollGodkjent === true));
  setShowBeslutterModal(true);
  return approveAp(params);
};

const NO_PARAM = {};

interface TotrinnsKlageVurdering {
  klageVurdering?: string;
  klageVurderingOmgjoer?: string;
  klageVurderingResultatNFP?: any;
  klageVurderingResultatNK?: any;
}

interface OwnProps {
  fagsak: Fagsak;
  totrinnskontrollSkjermlenkeContext?: any[];
  totrinnskontrollReadOnlySkjermlenkeContext?: any[];
  selectedBehandlingVersjon?: number;
  ansvarligSaksbehandler?: string;
  behandlingStatus: Kodeverk;
  toTrinnsBehandling?: boolean;
  push: (location: string) => void;
  resetApproval: () => void;
  location: Location;
  erTilbakekreving: boolean;
  behandlingUuid: string;
  erBehandlingEtterKlage?: boolean;
  behandlingsresultat?: any;
  behandlingId?: number;
  behandlingTypeKode?: string;
}

interface StateProps {
  showBeslutterModal: boolean;
  allAksjonspunktApproved?: boolean;
}

/**
 * ApprovalIndex
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
const ApprovalIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  toTrinnsBehandling = false,
  erBehandlingEtterKlage = false,
  resetApproval,
  selectedBehandlingVersjon,
  erTilbakekreving,
  behandlingUuid,
  push: pushLocation,
  totrinnskontrollSkjermlenkeContext,
  totrinnskontrollReadOnlySkjermlenkeContext,
  behandlingStatus,
  location,
  ansvarligSaksbehandler,
  behandlingsresultat,
  behandlingId,
  behandlingTypeKode,
}) => {
  const [showBeslutterModal, setShowBeslutterModal] = useState(false);
  const [allAksjonspunktApproved, setAllAksjonspunktApproved] = useState(false);

  const skjermlenkeTyperFpsak = useFpSakKodeverk(kodeverkTyper.SKJERMLENKE_TYPE);
  const skjermlenkeTyperFptilbake = useFpTilbakeKodeverk(kodeverkTyper.SKJERMLENKE_TYPE);
  const skjemalenkeTyper = erTilbakekreving ? skjermlenkeTyperFptilbake : skjermlenkeTyperFpsak;

  const navAnsatt = useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);
  const { brukernavn, kanVeilede } = navAnsatt;

  const alleFpSakKodeverk = useGlobalStateRestApiData<{[key: string]: KodeverkMedNavn[]}>(FpsakApiKeys.KODEVERK);
  const alleFpTilbakeKodeverk = useGlobalStateRestApiData<{[key: string]: KodeverkMedNavn[]}>(FpsakApiKeys.KODEVERK_FPTILBAKE);

  const featureToggles = useGlobalStateRestApiData<{[key: string]: boolean}>(FpsakApiKeys.FEATURE_TOGGLE);
  const disableGodkjennKnapp = erTilbakekreving ? !featureToggles[featureToggle.BESLUTT_TILBAKEKREVING] : false;

  const { data: totrinnsKlageVurdering, state: totrinnsKlageVurderingState } = useRestApi<TotrinnsKlageVurdering>(
    FpsakApiKeys.TOTRINNS_KLAGE_VURDERING, NO_PARAM, {
      keepData: true,
      updateTriggers: [behandlingId, selectedBehandlingVersjon],
      suspendRequest: !requestApi.hasPath(FpsakApiKeys.TOTRINNS_KLAGE_VURDERING),
    },
  );

  const { startRequest: godkjennBehandling, state } = useRestApiRunner(FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT);
  const erGodkjenningFerdig = state === RestApiState.SUCCESS;

  useEffect(() => () => {
    resetApproval();
  }, []);

  const fetchPreview = useVisForhandsvisningAvMelding();

  const forhandsvisVedtaksbrev = useCallback(() => {
    fetchPreview(erTilbakekreving, false, {
      behandlingUuid,
      ytelseType: fagsak.sakstype,
      gjelderVedtak: true,
    });
  }, []);
  const onSubmit = useCallback(getOnSubmit(erTilbakekreving, behandlingId, fagsak.saksnummer, selectedBehandlingVersjon,
    setAllAksjonspunktApproved, setShowBeslutterModal, godkjennBehandling),
  [behandlingId, selectedBehandlingVersjon]);

  const readOnly = brukernavn === ansvarligSaksbehandler || kanVeilede;

  if (!totrinnskontrollSkjermlenkeContext && !totrinnskontrollReadOnlySkjermlenkeContext) {
    return null;
  }

  if (totrinnsKlageVurderingState === RestApiState.LOADING) {
    return <LoadingPanel />;
  }

  return (
    <>
      <TotrinnskontrollSakIndex
        behandlingId={behandlingId}
        behandlingVersjon={selectedBehandlingVersjon}
        behandlingsresultat={behandlingsresultat}
        behandlingStatus={behandlingStatus}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        totrinnskontrollReadOnlySkjermlenkeContext={totrinnskontrollReadOnlySkjermlenkeContext}
        location={location}
        readOnly={readOnly}
        onSubmit={onSubmit}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        toTrinnsBehandling={toTrinnsBehandling}
        skjemalenkeTyper={skjemalenkeTyper}
        isForeldrepengerFagsak={fagsak.sakstype.kode === fagsakYtelseType.FORELDREPENGER}
        alleKodeverk={erTilbakekreving ? alleFpSakKodeverk : alleFpTilbakeKodeverk}
        behandlingKlageVurdering={totrinnsKlageVurdering}
        erBehandlingEtterKlage={erBehandlingEtterKlage}
        disableGodkjennKnapp={disableGodkjennKnapp}
        erTilbakekreving={erTilbakekreving}
        createLocationForSkjermlenke={createLocationForSkjermlenke}
      />
      {showBeslutterModal && (
        <BeslutterModalIndex
          erGodkjenningFerdig={erGodkjenningFerdig}
          selectedBehandlingVersjon={selectedBehandlingVersjon}
          fagsakYtelseType={fagsak.sakstype}
          behandlingsresultat={behandlingsresultat}
          behandlingId={behandlingId}
          behandlingTypeKode={behandlingTypeKode}
          pushLocation={pushLocation}
          allAksjonspunktApproved={allAksjonspunktApproved}
          behandlingStatus={behandlingStatus}
          totrinnsKlageVurdering={totrinnsKlageVurdering}
        />
      )}
    </>
  );
};

const erArsakTypeBehandlingEtterKlage = createSelector([getBehandlingArsaker], (behandlingArsaker: { behandlingArsakType: Kodeverk}[] = []) => behandlingArsaker
  .map(({ behandlingArsakType }) => behandlingArsakType)
  .some((bt: Kodeverk) => bt.kode === klageBehandlingArsakType.ETTER_KLAGE || bt.kode === klageBehandlingArsakType.KLAGE_U_INNTK
    || bt.kode === klageBehandlingArsakType.KLAGE_M_INNTK));

const mapStateToPropsFactory = () => (state) => {
  const behandlingType = getBehandlingType(state);
  const behandlingTypeKode = behandlingType ? behandlingType.kode : undefined;
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingTypeKode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;
  const behandlingId = getSelectedBehandlingId(state);
  return {
    selectedBehandlingVersjon: getBehandlingVersjon(state),
    ansvarligSaksbehandler: getBehandlingAnsvarligSaksbehandler(state),
    behandlingStatus: getBehandlingStatus(state),
    toTrinnsBehandling: getBehandlingToTrinnsBehandling(state),
    location: state.router.location,
    behandlingUuid: getBehandlingerUuidsMappedById(state)[behandlingId],
    erBehandlingEtterKlage: erArsakTypeBehandlingEtterKlage(state),
    behandlingsresultat: getBehandlingsresultat(state),
    behandlingId: getSelectedBehandlingId(state),
    erTilbakekreving,
    behandlingTypeKode,
  };
};

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({
    push,
  }, dispatch),
});

const comp = requireProps(['behandlingId', 'selectedBehandlingVersjon'])(ApprovalIndex);
export default withRouter(connect(mapStateToPropsFactory, mapDispatchToProps)(comp));
