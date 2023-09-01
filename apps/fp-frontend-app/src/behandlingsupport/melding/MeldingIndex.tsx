import React, { FunctionComponent, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import { KodeverkMedNavn } from '@navikt/fp-types';
import { behandlingType as BehandlingType, KodeverkType, venteArsakType, dokumentMalType } from '@navikt/fp-kodeverk';
import { MeldingerSakIndex, MessagesModalSakIndex, FormValues } from '@navikt/fp-sak-meldinger';
import { RestApiState } from '@navikt/fp-rest-api-hooks';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage, useIntl } from 'react-intl';
import { Alert } from '@navikt/ds-react';
import { useFpSakKodeverk } from '../../data/useKodeverk';
import useVisForhandsvisningAvMelding, { ForhandsvisFunksjon } from '../../data/useVisForhandsvisningAvMelding';
import { FagsakApiKeys, SubmitMessageParams, restFagsakApiHooks } from '../../data/fagsakContextApi';
import FagsakData from '../../fagsak/FagsakData';
import SettPaVentReadOnlyModal from './SettPaVentReadOnlyModal';
import SupportHeaderAndContent from '../SupportHeader';

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
    setMeldingForData: (data?: any) => void,
    behandlingTypeKode?: string,
    behandlingUuid?: string,
  ) =>
  (values: FormValues) => {
    const skalSettePåVent =
      values.brevmalkode === dokumentMalType.INNHENTE_OPPLYSNINGER ||
      values.brevmalkode === dokumentMalType.VARSEL_OM_REVURDERING ||
      values.brevmalkode === dokumentMalType.ETTERLYS_INNTEKTSMELDING;
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
      setMeldingForData();
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
 * Har ansvar for å hente mottakere og brevmaler fra serveren.
 */
const MeldingIndex: FunctionComponent<OwnProps> = ({
  fagsakData,
  valgtBehandlingUuid,
  meldingFormData,
  setMeldingForData,
  hentOgSettBehandling,
}) => {
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
      setMeldingForData,
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
            setMeldingForData={setMeldingForData}
            brukerManglerAdresse={fagsak.brukerManglerAdresse}
          />
        )}
      </SupportHeaderAndContent>
      {submitFinished && showSettPaVentModal && (
        <SettPaVentReadOnlyModal
          lukkCallback={handleSubmitFromModal}
          ventearsak={venteArsakType.AVV_DOK}
          ventearsaker={ventearsaker}
        />
      )}
    </>
  );
};

export default MeldingIndex;
