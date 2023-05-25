import React, { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { TotrinnskontrollSakIndex } from '@navikt/fp-sak-totrinnskontroll';
import { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import FagsakData from '../../fagsak/FagsakData';
import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { createLocationForSkjermlenke } from '../../app/paths';
import { useKodeverk } from '../../data/useKodeverk';
import BeslutterModalIndex from './BeslutterModalIndex';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

type Values = {
  fatterVedtakAksjonspunktDto: {
    '@type': string;
  } & FatterVedtakAp;
  erAlleAksjonspunktGodkjent: boolean;
};

const getLagreFunksjon =
  (
    saksnummer: string,
    setAlleAksjonspunktTilGodkjent: (erGodkjent: boolean) => void,
    setVisBeslutterModal: (visModal: boolean) => void,
    godkjennTotrinnsaksjonspunkter: (params: any) => Promise<any>,
    behandlingUuid?: string,
    behandlingVersjon?: number,
  ) =>
  (totrinnskontrollData: Values) => {
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
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  beslutterFormData?: any;
  setBeslutterForData: (data?: any) => void;
}

/**
 * TotrinnskontrollIndex
 *
 * Containerklass ansvarlig for att rita opp vilkår og aksjonspunkter med toTrinnskontroll
 */
const TotrinnskontrollIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  valgtBehandlingUuid,
  beslutterFormData,
  setBeslutterForData,
}) => {
  const [visBeslutterModal, setVisBeslutterModal] = useState(false);
  const [erAlleAksjonspunktGodkjent, setAlleAksjonspunktTilGodkjent] = useState(false);

  const fagsak = fagsakData.getFagsak();
  const valgtBehandling = fagsakData.getBehandling(valgtBehandlingUuid);

  const location = useLocation();
  const navigate = useNavigate();

  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { brukernavn, kanVeilede } = initFetchData.innloggetBruker;

  const alleKodeverk = useKodeverk(valgtBehandling?.type);

  const { startRequest: godkjennTotrinnsaksjonspunkter } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT,
  );

  const forhandsvisMelding = useVisForhandsvisningAvMelding(valgtBehandling?.type);

  const forhandsvisVedtaksbrev = useCallback(() => {
    if (valgtBehandling) {
      forhandsvisMelding(false, {
        behandlingUuid: valgtBehandling.uuid,
        fagsakYtelseType: fagsak.fagsakYtelseType,
        gjelderVedtak: true,
      });
    }
  }, [valgtBehandling, fagsak]);
  const onSubmit = useCallback(
    getLagreFunksjon(
      fagsak.saksnummer,
      setAlleAksjonspunktTilGodkjent,
      setVisBeslutterModal,
      godkjennTotrinnsaksjonspunkter,
      valgtBehandling?.uuid,
      valgtBehandling?.versjon,
    ),
    [valgtBehandling?.uuid, valgtBehandling?.versjon],
  );

  if (!valgtBehandling?.totrinnskontrollÅrsaker) {
    return null;
  }

  return (
    <>
      <TotrinnskontrollSakIndex
        behandling={valgtBehandling}
        location={location}
        readOnly={brukernavn === valgtBehandling.ansvarligSaksbehandler || kanVeilede}
        onSubmit={onSubmit}
        forhandsvisVedtaksbrev={forhandsvisVedtaksbrev}
        fagsakYtelseType={fagsak.fagsakYtelseType}
        alleKodeverk={alleKodeverk}
        createLocationForSkjermlenke={createLocationForSkjermlenke}
        beslutterFormData={beslutterFormData}
        setBeslutterForData={setBeslutterForData}
      />
      {visBeslutterModal && (
        <BeslutterModalIndex
          behandling={valgtBehandling}
          pushLocation={navigate}
          allAksjonspunktApproved={erAlleAksjonspunktGodkjent}
        />
      )}
    </>
  );
};

export default TotrinnskontrollIndex;
