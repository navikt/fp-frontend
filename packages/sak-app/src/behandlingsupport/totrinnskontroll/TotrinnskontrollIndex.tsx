import React, {
  FunctionComponent, useState, useCallback,
} from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import BehandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { Fagsak, BehandlingAppKontekst } from '@fpsak-frontend/types';
import TotrinnskontrollSakIndex from '@fpsak-frontend/sak-totrinnskontroll';
import { FatterVedtakAp } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { createLocationForSkjermlenke } from '../../app/paths';
import { useKodeverk } from '../../data/useKodeverk';
import {
  FpsakApiKeys, requestApi, restApiHooks,
} from '../../data/fpsakApi';
import BeslutterModalIndex from './BeslutterModalIndex';

type Values = {
  fatterVedtakAksjonspunktDto: {
    '@type': string;
  } & FatterVedtakAp;
  erAlleAksjonspunktGodkjent: boolean;
};

const getLagreFunksjon = (
  saksnummer: string,
  behandlingUuid: string,
  behandlingVersjon: number,
  setAlleAksjonspunktTilGodkjent: (erGodkjent: boolean) => void,
  setVisBeslutterModal: (visModal: boolean) => void,
  godkjennTotrinnsaksjonspunkter: (params: any) => Promise<any>,
) => (
  totrinnskontrollData: Values,
) => {
  const params = {
    saksnummer,
    behandlingUuid,
    behandlingVersjon,
    bekreftedeAksjonspunktDtoer: [totrinnskontrollData.fatterVedtakAksjonspunktDto],
  };
  setAlleAksjonspunktTilGodkjent(totrinnskontrollData.erAlleAksjonspunktGodkjent);
  setVisBeslutterModal(true);
  return godkjennTotrinnsaksjonspunkter(params);
};

interface OwnProps {
  fagsak: Fagsak;
  valgtBehandling: BehandlingAppKontekst;
  beslutterFormData?: any;
  setBeslutterForData: (data?: any) => void;
}

/**
 * TotrinnskontrollIndex
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
const TotrinnskontrollIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  valgtBehandling,
  beslutterFormData,
  setBeslutterForData,
}) => {
  const [visBeslutterModal, setVisBeslutterModal] = useState(false);
  const [erAlleAksjonspunktGodkjent, setAlleAksjonspunktTilGodkjent] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const { brukernavn, kanVeilede } = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);

  const alleKodeverk = useKodeverk(valgtBehandling.type);

  const {
    uuid, versjon, type, status,
  } = valgtBehandling;

  const erInnsynBehandling = type.kode === BehandlingType.DOKUMENTINNSYN;

  const { data: totrinnArsaker } = restApiHooks.useRestApi(
    FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER, undefined, {
      updateTriggers: [uuid, status.kode],
      suspendRequest: !!erInnsynBehandling || status.kode !== BehandlingStatus.FATTER_VEDTAK,
    },
  );
  const { data: totrinnArsakerReadOnly } = restApiHooks.useRestApi(
    FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY, undefined, {
      updateTriggers: [uuid, status.kode],
      suspendRequest: !!erInnsynBehandling || status.kode !== BehandlingStatus.BEHANDLING_UTREDES,
    },
  );

  const { data: totrinnsKlageVurdering } = restApiHooks.useRestApi(
    FpsakApiKeys.TOTRINNS_KLAGE_VURDERING, undefined, {
      keepData: true,
      updateTriggers: [uuid, versjon],
      suspendRequest: !requestApi.hasPath(FpsakApiKeys.TOTRINNS_KLAGE_VURDERING.name),
    },
  );

  const { startRequest: godkjennTotrinnsaksjonspunkter } = restApiHooks.useRestApiRunner(FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT);

  const forhandsvisMelding = useVisForhandsvisningAvMelding(type);

  const forhandsvisVedtaksbrev = useCallback(() => {
    forhandsvisMelding(false, {
      behandlingUuid: uuid,
      ytelseType: fagsak.fagsakYtelseType,
      gjelderVedtak: true,
    });
  }, []);
  const onSubmit = useCallback(getLagreFunksjon(fagsak.saksnummer, uuid, versjon,
    setAlleAksjonspunktTilGodkjent, setVisBeslutterModal, godkjennTotrinnsaksjonspunkter),
  [uuid, versjon]);

  const totrinnskontrollSkjermlenkeContext = totrinnArsaker || totrinnArsakerReadOnly;
  if (!totrinnskontrollSkjermlenkeContext) {
    return null;
  }

  return (
    <>
      <TotrinnskontrollSakIndex
        behandling={valgtBehandling}
        totrinnskontrollSkjermlenkeContext={totrinnskontrollSkjermlenkeContext}
        location={location}
        readOnly={brukernavn === valgtBehandling.ansvarligSaksbehandler || kanVeilede}
        onSubmit={onSubmit}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        fagsakYtelseType={fagsak.fagsakYtelseType}
        alleKodeverk={alleKodeverk}
        behandlingKlageVurdering={totrinnsKlageVurdering}
        createLocationForSkjermlenke={createLocationForSkjermlenke}
        beslutterFormData={beslutterFormData}
        setBeslutterForData={setBeslutterForData}
      />
      {visBeslutterModal && (
        <BeslutterModalIndex
          behandling={valgtBehandling}
          pushLocation={navigate}
          allAksjonspunktApproved={erAlleAksjonspunktGodkjent}
          erKlageWithKA={totrinnsKlageVurdering ? !!totrinnsKlageVurdering.klageVurderingResultatNK : undefined}
        />
      )}
    </>
  );
};

export default TotrinnskontrollIndex;
