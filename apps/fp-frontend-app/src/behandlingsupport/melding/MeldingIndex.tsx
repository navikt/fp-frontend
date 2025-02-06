import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { Alert } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BehandlingType, DokumentMalType, KodeverkType, VenteArsakType } from '@navikt/fp-kodeverk';
import { type FormValues, MeldingerSakIndex, MessagesModalSakIndex } from '@navikt/fp-sak-meldinger';
import type { BehandlingAppKontekst, KodeverkMedNavn } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import { initFetchOptions, type SubmitMessageParams, useFagsakBehandlingApi } from '../../data/fagsakApi';
import { useFpSakKodeverk } from '../../data/useKodeverk';
import { type ForhandsvisFunksjon, useVisForhandsvisningAvMelding } from '../../data/useVisForhandsvisningAvMelding';
import { FagsakData } from '../../fagsak/FagsakData';
import { SupportHeaderAndContent } from '../SupportHeader';
import { SettPaVentReadOnlyModal } from './SettPaVentReadOnlyModal';

import styles from './MeldingIndex.module.css';

const EMPTY_ARRAY = [] as KodeverkMedNavn[];

interface Props {
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  meldingFormData?: any;
  setMeldingFormData: (data?: any) => void;
  hentOgSettBehandling: () => void;
}

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
  const valgtBehandling = notEmpty(fagsakData.getBehandling(valgtBehandlingUuid));

  const api = useFagsakBehandlingApi(valgtBehandling);

  const initFetchQuery = useQuery(initFetchOptions());
  const {
    innloggetBruker: { kanVeilede },
  } = notEmpty(initFetchQuery.data);

  const ventearsaker = useFpSakKodeverk(KodeverkType.VENT_AARSAK) || EMPTY_ARRAY;
  const revurderingVarslingArsak = useFpSakKodeverk(KodeverkType.REVURDERING_VARSLING_ÅRSAK);

  const { mutateAsync: sendMelding, status: meldingStatus } = useMutation({
    mutationFn: (valuesToStore: SubmitMessageParams) => api.sendMelding(valuesToStore),
  });

  const submitCallback = getSubmitCallback(
    setShowMessageModal,
    sendMelding,
    hentOgSettBehandling,
    setShowSettPaVentModal,
    setMeldingFormData,
    valgtBehandling,
  );

  const handleSubmitFromModal = () => {
    navigate('/');
  };

  const fetchPreview = useVisForhandsvisningAvMelding(valgtBehandling);

  const previewCallback = getPreviewCallback(fagsak.fagsakYtelseType, fetchPreview, valgtBehandling);

  const afterSubmit = () => {
    setShowMessageModal(false);
    return hentOgSettBehandling();
  };

  const submitFinished = meldingStatus === 'success';

  const behandlingTillatteOperasjoner = valgtBehandling.behandlingTillatteOperasjoner;
  const kanSendeMelding =
    !kanVeilede &&
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
                id={finnKanIkkeLagreMeldingTekst(kanVeilede, behandlingTillatteOperasjoner?.behandlingKanSendeMelding)}
              />
            </Alert>
          </div>
        )}
        {kanSendeMelding && (
          <MeldingerSakIndex
            submitCallback={submitCallback}
            behandling={valgtBehandling}
            previewCallback={previewCallback}
            revurderingVarslingArsak={revurderingVarslingArsak}
            fagsakYtelseType={fagsak.fagsakYtelseType}
            kanVeilede={kanVeilede}
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

const getSubmitCallback =
  (
    setShowMessageModal: (showModal: boolean) => void,
    submitMessage: (params: SubmitMessageParams) => Promise<unknown>,
    hentOgSettBehandling: () => void,
    setShowSettPaVentModal: (erInnhentetEllerForlenget: boolean) => void,
    setMeldingFormData: (data?: any) => void,
    behandling: BehandlingAppKontekst,
  ) =>
  (values: FormValues) => {
    const skalSettePåVent =
      values.brevmalkode === DokumentMalType.INNHENTE_OPPLYSNINGER ||
      values.brevmalkode === DokumentMalType.VARSEL_OM_REVURDERING ||
      values.brevmalkode === DokumentMalType.ETTERLYS_INNTEKTSMELDING;
    const erTilbakekreving =
      BehandlingType.TILBAKEKREVING === behandling.type ||
      BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type;

    setShowMessageModal(!skalSettePåVent);

    const data = erTilbakekreving
      ? {
          behandlingUuid: behandling.uuid,
          fritekst: values.fritekst,
          brevmalkode: values.brevmalkode,
        }
      : {
          behandlingUuid: behandling.uuid,
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
  (fagsakYtelseType: string, fetchPreview: ForhandsvisFunksjon, behandling: BehandlingAppKontekst) =>
  (dokumentMal?: string, fritekst?: string, aarsakskode?: string) => {
    const erTilbakekreving =
      BehandlingType.TILBAKEKREVING === behandling.type ||
      BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type;
    const data = erTilbakekreving
      ? {
          behandlingUuid: behandling.uuid,
          fritekst: fritekst || ' ',
          brevmalkode: dokumentMal,
        }
      : {
          behandlingUuid: behandling.uuid,
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
