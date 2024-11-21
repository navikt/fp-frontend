import React, { useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { KodeverkMedNavn } from '@navikt/fp-types';
import { BehandlingType, KodeverkType, VenteArsakType, DokumentMalType } from '@navikt/fp-kodeverk';
import { MeldingerSakIndex, MessagesModalSakIndex, FormValues } from '@navikt/fp-sak-meldinger';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert } from '@navikt/ds-react';
import { useFpSakKodeverk } from '../../data/useKodeverk';
import { useVisForhandsvisningAvMelding, ForhandsvisFunksjon } from '../../data/useVisForhandsvisningAvMelding';
import { FagsakApiKeys, SubmitMessageParams, restFagsakApiHooks } from '../../data/fagsakContextApi';
import { FagsakData } from '../../fagsak/FagsakData';
import { SettPaVentReadOnlyModal } from './SettPaVentReadOnlyModal';
import { SupportHeaderAndContent } from '../SupportHeader';

import styles from './MeldingIndex.module.css';

const getSubmitCallback =
  (
    setShowMessageModal: (showModal: boolean) => void,
    submitMessage: (
      params?: SubmitMessageParams | undefined,
      keepData?: boolean | undefined,
    ) => Promise<void | undefined>,
    hentOgSettBehandling: () => void,
    setShowSettPaVentModal: (erInnhentetEllerForlenget: boolean) => void,
    setMeldingFormData: (data?: any) => void,
    behandlingTypeKode?: string,
    behandlingUuid?: string,
  ) =>
  (values: FormValues) => {
    const skalSettePåVent =
      values.brevmalkode === DokumentMalType.INNHENTE_OPPLYSNINGER ||
      values.brevmalkode === DokumentMalType.VARSEL_OM_REVURDERING ||
      values.brevmalkode === DokumentMalType.ETTERLYS_INNTEKTSMELDING;
    const erTilbakekreving =
      BehandlingType.TILBAKEKREVING === behandlingTypeKode ||
      BehandlingType.TILBAKEKREVING_REVURDERING === behandlingTypeKode;

    setShowMessageModal(!skalSettePåVent);

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
      setMeldingFormData();
      if (skalSettePåVent) {
        setShowSettPaVentModal(true);
      } else {
        hentOgSettBehandling();
      }
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

const finnKanIkkeLagreMeldingTekst = (kanVeilede: boolean, behandlingKanSendeMelding?: boolean) => {
  if (!behandlingKanSendeMelding) {
    return 'MeldingIndex.IkkeTilgjengeligPaVent';
  }
  if (kanVeilede) {
    return 'MeldingIndex.IkkeTilgjengeligVeileder';
  }
  return 'MeldingIndex.IkkeTilgjengeligAvsluttet';
};

interface Props {
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  meldingFormData?: any;
  setMeldingFormData: (data?: any) => void;
  hentOgSettBehandling: () => void;
}

const EMPTY_ARRAY = [] as KodeverkMedNavn[];

/**
 * MeldingIndex
 *
 * Har ansvar for å hente mottakere og brevmaler fra serveren.
 */
export const MeldingIndex = ({
  fagsakData,
  valgtBehandlingUuid,
  meldingFormData,
  setMeldingFormData,
  hentOgSettBehandling,
}: Props) => {
  const intl = useIntl();
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

  const submitCallback = useCallback(
    getSubmitCallback(
      setShowMessageModal,
      submitMessage,
      hentOgSettBehandling,
      setShowSettPaVentModal,
      setMeldingFormData,
      valgtBehandling?.type,
      valgtBehandling?.uuid,
    ),
    [valgtBehandling?.uuid, valgtBehandling?.versjon],
  );

  const handleSubmitFromModal = useCallback(() => {
    navigate('/');
  }, []);

  const fetchPreview = useVisForhandsvisningAvMelding(valgtBehandling?.type);

  const previewCallback = useCallback(
    getPreviewCallback(fagsak.fagsakYtelseType, fetchPreview, valgtBehandling?.type, valgtBehandling?.uuid),
    [valgtBehandling?.uuid, valgtBehandling?.versjon],
  );

  const afterSubmit = useCallback(() => {
    setShowMessageModal(false);
    return hentOgSettBehandling();
  }, []);

  const submitFinished = submitState === RestApiState.SUCCESS;

  const behandlingTillatteOperasjoner = valgtBehandling?.behandlingTillatteOperasjoner;
  const kanSendeMelding =
    !initFetchData.innloggetBruker.kanVeilede &&
    fagsakData.getAlleBehandlinger().some(b => !b.avsluttet) &&
    behandlingTillatteOperasjoner?.behandlingKanSendeMelding;

  return (
    <>
      {showMessagesModal && (
        <MessagesModalSakIndex showModal={submitFinished && showMessagesModal} closeEvent={afterSubmit} />
      )}

      <SupportHeaderAndContent tekst={intl.formatMessage({ id: 'MeldingIndex.Meldinger' })}>
        <VerticalSpacer sixteenPx />
        {!kanSendeMelding && (
          <div className={styles.textAlign}>
            <VerticalSpacer fourtyPx />
            <Alert variant="info">
              <FormattedMessage
                id={finnKanIkkeLagreMeldingTekst(
                  initFetchData.innloggetBruker.kanVeilede,
                  behandlingTillatteOperasjoner?.behandlingKanSendeMelding,
                )}
              />
            </Alert>
          </div>
        )}
        {kanSendeMelding && (
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
            setMeldingFormData={setMeldingFormData}
            brukerManglerAdresse={fagsak.brukerManglerAdresse}
          />
        )}
      </SupportHeaderAndContent>
      {submitFinished && showSettPaVentModal && (
        <SettPaVentReadOnlyModal
          lukkCallback={handleSubmitFromModal}
          ventearsak={VenteArsakType.AVV_DOK}
          ventearsaker={ventearsaker}
        />
      )}
    </>
  );
};
