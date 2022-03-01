import React, { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import MeldingerSakIndex, { MessagesModalSakIndex, FormValues } from '@fpsak-frontend/sak-meldinger';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import { BehandlingAppKontekst, Fagsak, KodeverkMedNavn } from '@fpsak-frontend/types';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';

import behandlingEventHandler from '../../behandling/BehandlingEventHandler';
import { useFpSakKodeverk } from '../../data/useKodeverk';
import useVisForhandsvisningAvMelding, { ForhandsvisFunksjon } from '../../data/useVisForhandsvisningAvMelding';
import {
  FpsakApiKeys, restApiHooks, requestApi,
} from '../../data/fpsakApi';

const getSubmitCallback = (
  setShowMessageModal: (showModal: boolean) => void,
  behandlingTypeKode: string,
  behandlingUuid: string,
  submitMessage: (params?: { behandlingUuid?: string, mottaker?: string; brevmalkode: string; fritekst: string; arsakskode?: string; },
    keepData?: boolean) => Promise<void>,
  resetMessage: () => void,
  setShowSettPaVentModal: (erInnhentetEllerForlenget: boolean) => void,
  setSubmitCounter: (fn: (prevValue: number) => number) => void,
  setMeldingForData: (data?: any) => void,
) => (values: FormValues) => {
  const isInnhentEllerForlenget = values.brevmalkode === dokumentMalType.INNHENT_DOK
    || values.brevmalkode === dokumentMalType.INNOPP
    || values.brevmalkode === dokumentMalType.FORLENGET_DOK
    || values.brevmalkode === dokumentMalType.FORLENGET_SAKSBEHANDLINGSTID
    || values.brevmalkode === dokumentMalType.FORLENGET_MEDL_DOK
    || values.brevmalkode === dokumentMalType.FORLENGET_SAKSBEHANDLINGSTID_MEDL;
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingTypeKode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;

  setShowMessageModal(!isInnhentEllerForlenget);

  const data = erTilbakekreving ? {
    behandlingUuid,
    fritekst: values.fritekst,
    brevmalkode: values.brevmalkode,
  } : {
    behandlingUuid,
    mottaker: values.mottaker,
    brevmalkode: values.brevmalkode,
    fritekst: values.fritekst,
    arsakskode: values.arsakskode,
  };
  return submitMessage(data)
    .then(() => resetMessage())
    .then(() => {
      setMeldingForData();
      setShowSettPaVentModal(isInnhentEllerForlenget);
      setSubmitCounter((prevValue) => prevValue + 1);
    });
};

const getPreviewCallback = (
  behandlingTypeKode: string,
  behandlingUuid: string,
  fagsakYtelseType: string,
  fetchPreview: ForhandsvisFunksjon,
) => (
  mottaker?: string,
  dokumentMal?: string,
  fritekst?: string,
  aarsakskode?: string,
) => {
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingTypeKode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;
  const data = erTilbakekreving ? {
    behandlingUuid,
    fritekst: fritekst || ' ',
    brevmalkode: dokumentMal,
  } : {
    behandlingUuid,
    fagsakYtelseType,
    fritekst: fritekst || ' ',
    arsakskode: aarsakskode || null,
    mottaker,
    dokumentMal,
  };
  fetchPreview(false, data);
};

interface OwnProps {
  fagsak: Fagsak;
  valgtBehandling: BehandlingAppKontekst;
  meldingFormData?: any,
  setMeldingForData: (data?: any) => void,
}

const EMPTY_ARRAY = [] as KodeverkMedNavn[];
const RECIPIENTS = ['Søker'];

/**
 * MeldingIndex
 *
 * Container komponent. Har ansvar for å hente mottakere og brevmaler fra serveren.
 */
const MeldingIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  valgtBehandling,
  meldingFormData,
  setMeldingForData,
}) => {
  const [showSettPaVentModal, setShowSettPaVentModal] = useState(false);
  const [showMessagesModal, setShowMessageModal] = useState(false);
  const [submitCounter, setSubmitCounter] = useState(0);

  const navigate = useNavigate();

  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);

  const ventearsaker = useFpSakKodeverk(kodeverkTyper.VENT_AARSAK) || EMPTY_ARRAY;
  const revurderingVarslingArsak = useFpSakKodeverk(kodeverkTyper.REVURDERING_VARSLING_ÅRSAK);

  const { startRequest: submitMessage, state: submitState } = restApiHooks.useRestApiRunner(FpsakApiKeys.SUBMIT_MESSAGE);

  const { uuid, versjon, type } = valgtBehandling;

  const resetMessage = () => {
    // FIXME temp fiks for å unngå prod-feil (her skjer det ein oppdatering av behandling, så må oppdatera)
    window.location.reload();
  };

  const submitCallback = useCallback(getSubmitCallback(setShowMessageModal, type, valgtBehandling.uuid, submitMessage,
    resetMessage, setShowSettPaVentModal, setSubmitCounter, setMeldingForData),
  [uuid, versjon]);

  const hideSettPaVentModal = useCallback(() => {
    setShowSettPaVentModal(false);
  }, []);

  const handleSubmitFromModal = useCallback((formValues) => {
    const values = {
      frist: formValues.frist,
      ventearsak: formValues.ventearsak,
    };
    behandlingEventHandler.settBehandlingPaVent(values);
    hideSettPaVentModal();
    navigate('/');
  }, []);

  const fetchPreview = useVisForhandsvisningAvMelding(type);

  const previewCallback = useCallback(getPreviewCallback(type, valgtBehandling.uuid, fagsak.fagsakYtelseType, fetchPreview),
    [uuid, versjon]);

  const afterSubmit = useCallback(() => {
    setShowMessageModal(false);
    return resetMessage();
  }, []);

  const skalHenteRevAp = requestApi.hasPath(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP.name);
  const { data: harApentKontrollerRevAp } = restApiHooks.useRestApi(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP, undefined, {
    updateTriggers: [uuid, versjon, submitCounter],
    suspendRequest: !skalHenteRevAp,
    keepData: true,
  });

  const { data: brevmaler } = restApiHooks.useRestApi(FpsakApiKeys.BREVMALER, undefined, {
    updateTriggers: [uuid, versjon, submitCounter],
    keepData: true,
  });

  const submitFinished = submitState === RestApiState.SUCCESS;
  return (
    <>
      {showMessagesModal && (
        <MessagesModalSakIndex showModal={submitFinished && showMessagesModal} closeEvent={afterSubmit} />
      )}

      <MeldingerSakIndex
        submitCallback={submitCallback}
        recipients={RECIPIENTS}
        sprakKode={valgtBehandling.sprakkode}
        previewCallback={previewCallback}
        revurderingVarslingArsak={revurderingVarslingArsak}
        templates={brevmaler}
        isKontrollerRevurderingApOpen={harApentKontrollerRevAp}
        fagsakYtelseType={fagsak.fagsakYtelseType}
        kanVeilede={navAnsatt.kanVeilede}
        meldingFormData={meldingFormData}
        setMeldingForData={setMeldingForData}
      />

      {submitFinished && showSettPaVentModal && (
        <SettPaVentModalIndex
          showModal={submitFinished && showSettPaVentModal}
          cancelEvent={hideSettPaVentModal}
          submitCallback={handleSubmitFromModal}
          ventearsak={venteArsakType.AVV_DOK}
          ventearsaker={ventearsaker}
          hasManualPaVent={false}
          erTilbakekreving={type === BehandlingType.TILBAKEKREVING || type === BehandlingType.TILBAKEKREVING_REVURDERING}
        />
      )}
    </>
  );
};

export default MeldingIndex;
