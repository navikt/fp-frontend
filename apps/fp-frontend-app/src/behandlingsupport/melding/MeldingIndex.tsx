import { type ReactElement, useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { Alert, VStack } from '@navikt/ds-react';
import { forhandsvisDokument } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { BehandlingType, DokumentMalType, VenteArsakType } from '@navikt/fp-kodeverk';
import {
  type ForhåndsvisBrevParams,
  MeldingerSakIndex,
  type MessagesFormValues,
  MessagesModalSakIndex,
} from '@navikt/fp-sak-meldinger';
import type { BehandlingAppKontekst } from '@navikt/fp-types';
import { notEmpty } from '@navikt/fp-utils';

import {
  forhåndsvisTilbakekreving,
  initFetchOptions,
  type SubmitMessageParams,
  useFagsakBehandlingApi,
} from '../../data/fagsakApi';
import { useFpSakKodeverk } from '../../data/useKodeverk';
import { FagsakData } from '../../fagsak/FagsakData';
import { SupportHeaderAndContent } from '../SupportHeader';
import { SettPaVentReadOnlyModal } from './SettPaVentReadOnlyModal';

interface Props {
  fagsakData: FagsakData;
  valgtBehandlingUuid: string;
  meldingFormData?: MessagesFormValues;
  setMeldingFormData: (data?: MessagesFormValues) => void;
  hentOgSettBehandling: () => void;
  toggleVisUtvidetBehandlingDetaljerKnapp: ReactElement;
}

const finnFristFraBehandling = (behandling: BehandlingAppKontekst) =>
  behandling.behandlingPåVent ? behandling.fristBehandlingPåVent : null;

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
  toggleVisUtvidetBehandlingDetaljerKnapp,
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

  const ventearsaker = useFpSakKodeverk('Venteårsak') || [];
  const revurderingVarslingArsak = useFpSakKodeverk('RevurderingVarslingÅrsak');

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

  const forhåndsvisBrev = useVisForhandsvisningAvMelding(valgtBehandling);

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

      <SupportHeaderAndContent
        tekst={intl.formatMessage({ id: 'MeldingIndex.Meldinger' })}
        toggleVisUtvidetBehandlingDetaljerKnapp={toggleVisUtvidetBehandlingDetaljerKnapp}
      >
        <VStack gap="4">
          {!kanSendeMelding && (
            <Alert variant="info">
              <FormattedMessage
                id={finnKanIkkeLagreMeldingTekst(kanVeilede, behandlingTillatteOperasjoner?.behandlingKanSendeMelding)}
              />
            </Alert>
          )}
          {kanSendeMelding && (
            <MeldingerSakIndex
              submitCallback={submitCallback}
              behandling={valgtBehandling}
              forhåndsvisBrev={forhåndsvisBrev}
              revurderingVarslingArsak={revurderingVarslingArsak}
              fagsakYtelseType={fagsak.fagsakYtelseType}
              kanVeilede={kanVeilede}
              meldingFormData={meldingFormData}
              setMeldingFormData={setMeldingFormData}
              brukerManglerAdresse={fagsak.brukerManglerAdresse}
            />
          )}
        </VStack>
      </SupportHeaderAndContent>
      {submitFinished && showSettPaVentModal && (
        <SettPaVentReadOnlyModal
          lukkCallback={handleSubmitFromModal}
          ventearsak={VenteArsakType.AVV_DOK}
          ventearsaker={ventearsaker}
          frist={finnFristFraBehandling(valgtBehandling)}
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
    setMeldingFormData: (data?: MessagesFormValues) => void,
    behandling: BehandlingAppKontekst,
  ) =>
  (values: MessagesFormValues) => {
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

const finnKanIkkeLagreMeldingTekst = (kanVeilede: boolean, behandlingKanSendeMelding?: boolean) => {
  if (!behandlingKanSendeMelding) {
    return 'MeldingIndex.IkkeTilgjengeligPaVent';
  }
  if (kanVeilede) {
    return 'MeldingIndex.IkkeTilgjengeligVeileder';
  }
  return 'MeldingIndex.IkkeTilgjengeligAvsluttet';
};

const useVisForhandsvisningAvMelding = (behandling: BehandlingAppKontekst) => {
  const api = useFagsakBehandlingApi(behandling);

  const { mutate: forhåndsvisFpSakBrev } = useMutation({
    mutationFn: (params: ForhåndsvisBrevParams) =>
      api.forhåndsvisMelding({
        behandlingUuid: behandling.uuid,
        dokumentMal: params.brevmalkode,
        fritekst: params.fritekst || ' ',
        arsakskode: params.arsakskode,
      }),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const { mutate: forhåndsvisFpTilbakeBrev } = useMutation({
    mutationFn: (params: ForhåndsvisBrevParams) =>
      forhåndsvisTilbakekreving(behandling.uuid, params.brevmalkode, params.fritekst ?? ' '),
    onSuccess: response => {
      forhandsvisDokument(response);
    },
  });

  const erTilbakekreving =
    BehandlingType.TILBAKEKREVING === behandling.type || BehandlingType.TILBAKEKREVING_REVURDERING === behandling.type;

  return (params: ForhåndsvisBrevParams): void => {
    if (erTilbakekreving) {
      forhåndsvisFpTilbakeBrev(params);
    } else {
      forhåndsvisFpSakBrev(params);
    }
  };
};
