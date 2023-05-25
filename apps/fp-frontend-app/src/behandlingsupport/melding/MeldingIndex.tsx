import React, { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { KodeverkMedNavn } from '@navikt/fp-types';
import { behandlingType as BehandlingType, KodeverkType, venteArsakType, dokumentMalType } from '@navikt/fp-kodeverk';
import { MeldingerSakIndex, MessagesModalSakIndex, FormValues } from '@navikt/fp-sak-meldinger';
import { RestApiState } from '@navikt/fp-rest-api-hooks';
import { SettPaVentModalIndex, FormValues as SettPaVentFormValues } from '@navikt/fp-modal-sett-pa-vent';

import { useFpSakKodeverk } from '../../data/useKodeverk';
import useVisForhandsvisningAvMelding, { ForhandsvisFunksjon } from '../../data/useVisForhandsvisningAvMelding';
import { FagsakApiKeys, SubmitMessageParams, restFagsakApiHooks } from '../../data/fagsakContextApi';
import FagsakData from '../../fagsak/FagsakData';
import { BehandlingApiKeys, restBehandlingApiHooks } from '../../data/behandlingContextApi';

const getSubmitCallback =
  (
    setShowMessageModal: (showModal: boolean) => void,
    submitMessage: (
      params?: SubmitMessageParams | undefined,
      keepData?: boolean | undefined,
    ) => Promise<void | undefined>,
    hentOgSettBehandling: () => void,
    setShowSettPaVentModal: (erInnhentetEllerForlenget: boolean) => void,
    setMeldingForData: (data?: any) => void,
    behandlingTypeKode?: string,
    behandlingUuid?: string,
  ) =>
  (values: FormValues) => {
    const isInnhentEllerForlenget =
      values.brevmalkode === dokumentMalType.INNHENTE_OPPLYSNINGER ||
      values.brevmalkode === dokumentMalType.FORLENGET_SAKSBEHANDLINGSTID ||
      values.brevmalkode === dokumentMalType.FORLENGET_SAKSBEHANDLINGSTID_MEDL;
    const erTilbakekreving =
      BehandlingType.TILBAKEKREVING === behandlingTypeKode ||
      BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;

    setShowMessageModal(!isInnhentEllerForlenget);

    const data = erTilbakekreving
      ? {
          behandlingUuid,
          fritekst: values.fritekst,
          brevmalkode: values.brevmalkode,
        }
      : {
          behandlingUuid,
          brevmalkode: values.brevmalkode,
          fritekst: values.fritekst,
          arsakskode: values.arsakskode,
        };
    return submitMessage(data).then(() => {
      hentOgSettBehandling();
      setMeldingForData();
      setShowSettPaVentModal(isInnhentEllerForlenget);
    });
  };

const getPreviewCallback =
  (fagsakYtelseType: string, fetchPreview: ForhandsvisFunksjon, behandlingTypeKode?: string, behandlingUuid?: string) =>
  (dokumentMal?: string, fritekst?: string, aarsakskode?: string) => {
    const erTilbakekreving =
      BehandlingType.TILBAKEKREVING === behandlingTypeKode ||
      BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;
    const data = erTilbakekreving
      ? {
          behandlingUuid,
          fritekst: fritekst || ' ',
          brevmalkode: dokumentMal,
        }
      : {
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
  meldingFormData?: any;
  setMeldingForData: (data?: any) => void;
  hentOgSettBehandling: () => void;
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
  hentOgSettBehandling,
}) => {
  const [showSettPaVentModal, setShowSettPaVentModal] = useState(false);
  const [showMessagesModal, setShowMessageModal] = useState(false);

  const navigate = useNavigate();

  const fagsak = fagsakData.getFagsak();
  const valgtBehandling = fagsakData.getBehandling(valgtBehandlingUuid);

  const initFetchData = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);

  const ventearsaker = useFpSakKodeverk(KodeverkType.VENT_AARSAK) || EMPTY_ARRAY;
  const revurderingVarslingArsak = useFpSakKodeverk(KodeverkType.REVURDERING_VARSLING_ÅRSAK);

  const { startRequest: submitMessage, state: submitState } = restFagsakApiHooks.useRestApiRunner(
    FagsakApiKeys.SUBMIT_MESSAGE,
  );

  const { startRequest: setBehandlingPåVent } = restBehandlingApiHooks.useRestApiRunner(
    BehandlingApiKeys.BEHANDLING_ON_HOLD,
  );

  const submitCallback = useCallback(
    getSubmitCallback(
      setShowMessageModal,
      submitMessage,
      hentOgSettBehandling,
      setShowSettPaVentModal,
      setMeldingForData,
      valgtBehandling?.type,
      valgtBehandling?.uuid,
    ),
    [valgtBehandling?.uuid, valgtBehandling?.versjon],
  );

  const hideSettPaVentModal = useCallback(() => {
    setShowSettPaVentModal(false);
  }, []);

  const handleSubmitFromModal = useCallback((formValues: SettPaVentFormValues) => {
    if (valgtBehandling && formValues.frist && formValues.ventearsak) {
      const values = {
        behandlingUuid: valgtBehandling.uuid,
        behandlingVersjon: valgtBehandling.versjon,
        frist: formValues.frist,
        ventearsak: formValues.ventearsak,
      };
      setBehandlingPåVent(values);
    }
    hideSettPaVentModal();
    navigate('/');
  }, []);

  const fetchPreview = useVisForhandsvisningAvMelding(valgtBehandling?.type);

  const previewCallback = useCallback(
    getPreviewCallback(fagsak.fagsakYtelseType, fetchPreview, valgtBehandling?.type, valgtBehandling?.uuid),
    [valgtBehandling?.uuid, valgtBehandling?.versjon],
  );

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
        sprakKode={valgtBehandling?.sprakkode}
        previewCallback={previewCallback}
        revurderingVarslingArsak={revurderingVarslingArsak}
        templates={valgtBehandling?.brevmaler}
        isKontrollerRevurderingApOpen={valgtBehandling?.ugunstAksjonspunkt}
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
          erTilbakekreving={
            valgtBehandling?.type === BehandlingType.TILBAKEKREVING ||
            valgtBehandling?.type === BehandlingType.TILBAKEKREVING_REVURDERING
          }
        />
      )}
    </>
  );
};

export default MeldingIndex;
