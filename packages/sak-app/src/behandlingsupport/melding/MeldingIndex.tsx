import React, { FunctionComponent, useState, useCallback } from 'react';
import { useHistory } from 'react-router-dom';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import dokumentMalType from '@fpsak-frontend/kodeverk/src/dokumentMalType';
import venteArsakType from '@fpsak-frontend/kodeverk/src/venteArsakType';
import kodeverkTyper from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import MeldingerSakIndex, { MessagesModalSakIndex, FormValues } from '@fpsak-frontend/sak-meldinger';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';
import {
  BehandlingAppKontekst, Fagsak, Kodeverk, NavAnsatt,
} from '@fpsak-frontend/types';
import SettPaVentModalIndex from '@fpsak-frontend/modal-sett-pa-vent';

import { useFpSakKodeverk } from '../../data/useKodeverk';
import useVisForhandsvisningAvMelding from '../../data/useVisForhandsvisningAvMelding';
import { setBehandlingOnHold } from '../../behandlingmenu/behandlingMenuOperations';
import {
  FpsakApiKeys, restApiHooks, requestApi,
} from '../../data/fpsakApi';

const getSubmitCallback = (
  setShowMessageModal: (showModal: boolean) => void,
  behandlingTypeKode: string,
  behandlingId: number,
  behandlingUuid: string,
  submitMessage: (data: any) => Promise<any>,
  resetMessage: () => void,
  setShowSettPaVentModal: (erInnhentetEllerForlenget: boolean) => void,
  setSubmitCounter: (fn: (prevValue: number) => number) => void,
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
    behandlingId,
    mottaker: values.mottaker,
    brevmalkode: values.brevmalkode,
    fritekst: values.fritekst,
    arsakskode: values.arsakskode,
  };
  return submitMessage(data)
    .then(() => resetMessage())
    .then(() => {
      setShowSettPaVentModal(isInnhentEllerForlenget);
      setSubmitCounter((prevValue) => prevValue + 1);
    });
};

const getPreviewCallback = (
  behandlingTypeKode: string,
  behandlingUuid: string,
  fagsakYtelseType: Kodeverk,
  fetchPreview: (erHenleggelse: boolean, data: any) => void,
) => (
  mottaker: string,
  dokumentMal: string,
  fritekst: string,
  aarsakskode: string,
) => {
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingTypeKode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;
  const data = erTilbakekreving ? {
    behandlingUuid,
    fritekst: fritekst || ' ',
    brevmalkode: dokumentMal,
  } : {
    behandlingUuid,
    ytelseType: fagsakYtelseType,
    fritekst: fritekst || ' ',
    arsakskode: aarsakskode || null,
    mottaker,
    dokumentMal,
  };
  fetchPreview(false, data);
};

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  behandlingId: number;
  behandlingVersjon?: number;
}

interface Brevmal {
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}

const EMPTY_ARRAY = [];
const RECIPIENTS = ['Søker'];

/**
 * MeldingIndex
 *
 * Container komponent. Har ansvar for å hente mottakere og brevmaler fra serveren.
 */
const MeldingIndex: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  behandlingId,
  behandlingVersjon,
}) => {
  const [showSettPaVentModal, setShowSettPaVentModal] = useState(false);
  const [showMessagesModal, setShowMessageModal] = useState(false);
  const [submitCounter, setSubmitCounter] = useState(0);

  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);

  const history = useHistory();

  const navAnsatt = restApiHooks.useGlobalStateRestApiData<NavAnsatt>(FpsakApiKeys.NAV_ANSATT);

  const ventearsaker = useFpSakKodeverk(kodeverkTyper.VENT_AARSAK) || EMPTY_ARRAY;
  const revurderingVarslingArsak = useFpSakKodeverk(kodeverkTyper.REVURDERING_VARSLING_ÅRSAK);

  const { startRequest: submitMessage, state: submitState } = restApiHooks.useRestApiRunner(FpsakApiKeys.SUBMIT_MESSAGE);

  const resetMessage = () => {
    // FIXME temp fiks for å unngå prod-feil (her skjer det ein oppdatering av behandling, så må oppdatera)
    window.location.reload();
  };

  const submitCallback = useCallback(getSubmitCallback(setShowMessageModal, behandling.type.kode, behandlingId, behandling.uuid, submitMessage,
    resetMessage, setShowSettPaVentModal, setSubmitCounter),
  [behandlingId, behandlingVersjon]);

  const hideSettPaVentModal = useCallback(() => {
    setShowSettPaVentModal(false);
  }, []);

  const handleSubmitFromModal = useCallback((formValues) => {
    const values = {
      behandlingId,
      behandlingVersjon,
      frist: formValues.frist,
      ventearsak: formValues.ventearsak,
    };
    setBehandlingOnHold(values);
    hideSettPaVentModal();
    history.push('/');
  }, [behandlingId, behandlingVersjon]);

  const fetchPreview = useVisForhandsvisningAvMelding(behandling.type);

  const previewCallback = useCallback(getPreviewCallback(behandling.type.kode, behandling.uuid, fagsak.fagsakYtelseType, fetchPreview),
    [behandlingId, behandlingVersjon]);

  const afterSubmit = useCallback(() => {
    setShowMessageModal(false);
    return resetMessage();
  }, []);

  const skalHenteRevAp = requestApi.hasPath(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP);
  const { data: harApentKontrollerRevAp } = restApiHooks.useRestApi<boolean>(FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP, undefined, {
    updateTriggers: [behandlingId, behandlingVersjon, submitCounter],
    suspendRequest: !skalHenteRevAp,
    keepData: true,
  });

  const { data: brevmaler } = restApiHooks.useRestApi<Brevmal[]>(FpsakApiKeys.BREVMALER, undefined, {
    updateTriggers: [behandlingId, behandlingVersjon, submitCounter],
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
        sprakKode={behandling?.sprakkode}
        previewCallback={previewCallback}
        behandlingId={behandlingId}
        behandlingVersjon={behandlingVersjon}
        revurderingVarslingArsak={revurderingVarslingArsak}
        templates={brevmaler}
        isKontrollerRevurderingApOpen={harApentKontrollerRevAp}
        fagsakYtelseType={fagsak.fagsakYtelseType}
        kanVeilede={navAnsatt.kanVeilede}
      />

      {submitFinished && showSettPaVentModal && (
        <SettPaVentModalIndex
          showModal={submitFinished && showSettPaVentModal}
          cancelEvent={hideSettPaVentModal}
          submitCallback={handleSubmitFromModal}
          ventearsak={venteArsakType.AVV_DOK}
          ventearsaker={ventearsaker}
          hasManualPaVent={false}
          erTilbakekreving={behandling.type.kode === BehandlingType.TILBAKEKREVING || behandling.type.kode === BehandlingType.TILBAKEKREVING_REVURDERING}
        />
      )}
    </>
  );
};

export default MeldingIndex;
