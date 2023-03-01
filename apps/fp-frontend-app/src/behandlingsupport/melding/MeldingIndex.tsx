import React, { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { BehandlingType, KodeverkType } from '@navikt/ft-kodeverk';

import { KodeverkMedNavn } from '@navikt/fp-types';
import { venteArsakType, dokumentMalType } from '@navikt/fp-kodeverk';
import { MeldingerSakIndex, MessagesModalSakIndex, FormValues } from '@navikt/fp-sak-meldinger';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { SettPaVentModalIndex } from '@navikt/fp-modal-sett-pa-vent';

import behandlingEventHandler from '../../behandling/BehandlingEventHandler';
import { useFpSakKodeverk } from '../../data/useKodeverk';
import useVisForhandsvisningAvMelding, { ForhandsvisFunksjon } from '../../data/useVisForhandsvisningAvMelding';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';
import FagsakData from '../../fagsak/FagsakData';

const getSubmitCallback = (
  setShowMessageModal: (showModal: boolean) => void,
  behandlingTypeKode: string,
  behandlingUuid: string,
  submitMessage: (params?: { behandlingUuid?: string, brevmalkode: string; fritekst: string; arsakskode?: string; },
    keepData?: boolean) => Promise<void>,
  resetMessage: () => void,
  setShowSettPaVentModal: (erInnhentetEllerForlenget: boolean) => void,
  setMeldingForData: (data?: any) => void,
) => (values: FormValues) => {
  const isInnhentEllerForlenget = values.brevmalkode === dokumentMalType.INNHENTE_OPPLYSNINGER
    || values.brevmalkode === dokumentMalType.FORLENGET_SAKSBEHANDLINGSTID
    || values.brevmalkode === dokumentMalType.FORLENGET_SAKSBEHANDLINGSTID_MEDL;
  const erTilbakekreving = BehandlingType.TILBAKEKREVING === behandlingTypeKode || BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;

  setShowMessageModal(!isInnhentEllerForlenget);

  const data = erTilbakekreving ? {
    behandlingUuid,
    fritekst: values.fritekst,
    brevmalkode: values.brevmalkode,
  } : {
    behandlingUuid,
    brevmalkode: values.brevmalkode,
    fritekst: values.fritekst,
    arsakskode: values.arsakskode,
  };
  return submitMessage(data)
    .then(() => resetMessage())
    .then(() => {
      setMeldingForData();
      setShowSettPaVentModal(isInnhentEllerForlenget);
    });
};

const getPreviewCallback = (
  behandlingTypeKode: string,
  behandlingUuid: string,
  fagsakYtelseType: string,
  fetchPreview: ForhandsvisFunksjon,
) => (
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
    dokumentMal,
  };
  fetchPreview(false, data);
};

interface OwnProps {
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  meldingFormData?: any,
  setMeldingForData: (data?: any) => void,
}

const EMPTY_ARRAY = [] as KodeverkMedNavn[];

/**
 * MeldingIndex
 *
 * Container komponent. Har ansvar for å hente mottakere og brevmaler fra serveren.
 */
const MeldingIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  valgtBehandlingUuid,
  meldingFormData,
  setMeldingForData,
}) => {
  const [showSettPaVentModal, setShowSettPaVentModal] = useState(false);
  const [showMessagesModal, setShowMessageModal] = useState(false);

  const navigate = useNavigate();

  const fagsak = fagsakData.getFagsak();
  const valgtBehandling = fagsakData.getBehandling(valgtBehandlingUuid);

  const initFetchData = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.INIT_FETCH);

  const ventearsaker = useFpSakKodeverk(KodeverkType.VENT_AARSAK) || EMPTY_ARRAY;
  const revurderingVarslingArsak = useFpSakKodeverk(KodeverkType.REVURDERING_VARSLING_ÅRSAK);

  const { startRequest: submitMessage, state: submitState } = restApiHooks.useRestApiRunner(FpsakApiKeys.SUBMIT_MESSAGE);

  const { uuid, versjon, type } = valgtBehandling;

  const resetMessage = () => {
    // FIXME temp fiks for å unngå prod-feil (her skjer det ein oppdatering av behandling, så må oppdatera)
    window.location.reload();
  };

  const submitCallback = useCallback(getSubmitCallback(setShowMessageModal, type, valgtBehandling.uuid, submitMessage,
    resetMessage, setShowSettPaVentModal, setMeldingForData),
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

  const submitFinished = submitState === RestApiState.SUCCESS;
  return (
    <>
      {showMessagesModal && (
        <MessagesModalSakIndex showModal={submitFinished && showMessagesModal} closeEvent={afterSubmit} />
      )}

      <MeldingerSakIndex
        submitCallback={submitCallback}
        sprakKode={valgtBehandling.sprakkode}
        previewCallback={previewCallback}
        revurderingVarslingArsak={revurderingVarslingArsak}
        templates={valgtBehandling.brevmaler}
        isKontrollerRevurderingApOpen={valgtBehandling.ugunstAksjonspunkt}
        fagsakYtelseType={fagsak.fagsakYtelseType}
        kanVeilede={initFetchData.innloggetBruker.kanVeilede}
        meldingFormData={meldingFormData}
        setMeldingForData={setMeldingForData}
        brukerManglerAdresse={fagsak.brukerManglerAdresse}
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
