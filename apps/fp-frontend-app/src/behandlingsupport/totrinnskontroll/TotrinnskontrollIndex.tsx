import React, { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

import { TotrinnskontrollSakIndex } from '@navikt/fp-sak-totrinnskontroll';
import { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

import FagsakData from '../../fagsak/FagsakData';
import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { createLocationForSkjermlenke } from '../../app/paths';
import { useKodeverk } from '../../data/useKodeverk';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import BeslutterModalIndex from './BeslutterModalIndex';

type Values = {
  fatterVedtakAksjonspunktDto: {
    '@type': string;
  } & FatterVedtakAp;
  erAlleAksjonspunktGodkjent: boolean;
};

const getLagreFunksjon =
  (
    saksnummer: string,
    behandlingUuid: string,
    behandlingVersjon: number,
    setAlleAksjonspunktTilGodkjent: (erGodkjent: boolean) => void,
    setVisBeslutterModal: (visModal: boolean) => void,
    godkjennTotrinnsaksjonspunkter: (params: any) => Promise<any>,
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

  const initFetchData = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.INIT_FETCH);
  const { brukernavn, kanVeilede } = initFetchData.innloggetBruker;

  const alleKodeverk = useKodeverk(valgtBehandling.type);

  const { uuid, versjon, type, totrinnskontrollÅrsaker } = valgtBehandling;

  const { startRequest: godkjennTotrinnsaksjonspunkter } = restApiHooks.useRestApiRunner(
    FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT,
  );

  const forhandsvisMelding = useVisForhandsvisningAvMelding(type);

  const forhandsvisVedtaksbrev = useCallback(() => {
    forhandsvisMelding(false, {
      behandlingUuid: uuid,
      fagsakYtelseType: fagsak.fagsakYtelseType,
      gjelderVedtak: true,
    });
  }, []);
  const onSubmit = useCallback(
    getLagreFunksjon(
      fagsak.saksnummer,
      uuid,
      versjon,
      setAlleAksjonspunktTilGodkjent,
      setVisBeslutterModal,
      godkjennTotrinnsaksjonspunkter,
    ),
    [uuid, versjon],
  );

  if (!totrinnskontrollÅrsaker) {
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
