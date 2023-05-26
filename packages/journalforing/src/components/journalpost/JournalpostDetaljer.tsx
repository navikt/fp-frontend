import React, { FunctionComponent, useCallback, useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Heading, BodyLong, Alert } from '@navikt/ds-react';

import { FlexColumn, FlexRow, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { Form } from '@navikt/ft-form-hooks';
import VelgSakForm, { transformValues as transformValuesSak } from './innhold/VelgSakForm';
import Journalpost from '../../typer/journalpostTsType';
import JournalførSubmitValue, {
  DokumentTittelSubmitValue,
  OppdaterJournalførTittlerSubmitValue,
} from '../../typer/ferdigstillJournalføringSubmit';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import SakDetaljer from './innhold/SakDetaljer';
import DokumentForm, {
  transformValues as transformValuesFlereDokumenter,
  buildInitialValues as buildInitialValuesFlereDokumenter,
} from './innhold/DokumentForm';
import BrukerAvsenderPanel from './innhold/BrukerAvsenderPanel';
import JournalføringFormValues from '../../typer/journalføringFormValues';
import OppdaterMedBruker from '../../typer/oppdaterBrukerTsType';
import JournalpostTittelForm from './innhold/JournalpostTittelForm';

const dokumentTittelSkalStyresAvJournalpost = (jp: Journalpost): boolean => jp.dokumenter?.length === 1;

const buildInitialValues = (journalpost: Journalpost): JournalføringFormValues => {
  const docs = journalpost.dokumenter || [];
  return {
    saksnummerValg: undefined,
    ytelsetypeValg: undefined,
    journalpostTittel: journalpost.tittel,
    journalpostDokumenter: dokumentTittelSkalStyresAvJournalpost(journalpost)
      ? [{ dokumentId: docs[0].dokumentId, tittel: journalpost.tittel }]
      : buildInitialValuesFlereDokumenter(docs),
  };
};

const transformValuesEttDokument = (journalpost: Journalpost, tittel: string): DokumentTittelSubmitValue[] => {
  const dokumentId = journalpost.dokumenter?.at(0)?.dokumentId;
  if (!dokumentId) {
    throw new Error(`Finner ingen dokumenter på journalpost ${journalpost.journalpostId}`);
  }
  return [
    {
      dokumentId,
      tittel,
    },
  ];
};

const transformTittelValues = (
  values: JournalføringFormValues,
  journalpost: Journalpost,
): OppdaterJournalførTittlerSubmitValue | undefined => {
  const nyJournalpostTittel = journalpost.tittel !== values.journalpostTittel ? values.journalpostTittel : undefined;
  const endredeDokumenter =
    nyJournalpostTittel && dokumentTittelSkalStyresAvJournalpost(journalpost)
      ? transformValuesEttDokument(journalpost, nyJournalpostTittel)
      : transformValuesFlereDokumenter(values, journalpost.dokumenter || []);
  if (nyJournalpostTittel || endredeDokumenter.length > 0) {
    return {
      journalpostTittel: nyJournalpostTittel,
      dokumenter: endredeDokumenter,
    };
  }
  return undefined;
};

const transformValues = (
  values: JournalføringFormValues,
  journalpost: Journalpost,
  oppgave: OppgaveOversikt,
): JournalførSubmitValue => {
  if (!oppgave.enhetId) {
    throw Error('Kan ikke journalføre uten at enhet er satt');
  }
  return {
    journalpostId: journalpost.journalpostId,
    enhetId: oppgave.enhetId,
    oppgaveId: oppgave.id,
    oppdaterTitlerDto: transformTittelValues(values, journalpost),
    ...transformValuesSak(values, journalpost),
  };
};

type OwnProps = Readonly<{
  journalpostFraOppgave: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue) => void;
  hentOppdatertJournalpostMedBruker: (params: OppdaterMedBruker) => void;
  oppdatertJournalpost?: Journalpost;
}>;

/**
 * JournalpostDetaljer - Viser detaljer om valgt journalpost
 */
const JournalpostDetaljer: FunctionComponent<OwnProps> = ({
  journalpostFraOppgave,
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  hentOppdatertJournalpostMedBruker,
  oppdatertJournalpost,
}) => {
  const [gjeldendeJournalpost, setGjeldendeJournalpost] = useState(journalpostFraOppgave);
  const [skalKunneEndreSøker, setSkalKunneEndreSøker] = useState(!journalpostFraOppgave.bruker);
  const saker = journalpostFraOppgave.fagsaker || [];
  const formMethods = useForm<JournalføringFormValues>({
    defaultValues: buildInitialValues(journalpostFraOppgave),
  });
  const submitJournal = useCallback((values: JournalføringFormValues) => {
    submitJournalføring(transformValues(values, gjeldendeJournalpost, oppgave));
  }, []);
  const isSubmittable = formMethods.formState.isDirty;

  const knyttSøkerTilJournalpost = useCallback(() => {
    if (oppdatertJournalpost?.bruker && !journalpostFraOppgave.bruker) {
      const nyJournalpost = {
        ...journalpostFraOppgave,
        bruker: oppdatertJournalpost.bruker,
        fagsaker: oppdatertJournalpost.fagsaker || [],
      };
      setGjeldendeJournalpost(nyJournalpost);
      setSkalKunneEndreSøker(false);
    }
  }, [oppdatertJournalpost]);

  return (
    <Form<JournalføringFormValues> formMethods={formMethods} onSubmit={submitJournal}>
      <JournalpostTittelForm journalpost={gjeldendeJournalpost} />
      <VerticalSpacer sixteenPx />
      <BrukerAvsenderPanel
        journalpost={gjeldendeJournalpost}
        hentOppdatertJournalpostMedBruker={hentOppdatertJournalpostMedBruker}
        skalKunneEndreSøker={skalKunneEndreSøker}
        hentetSøker={oppdatertJournalpost?.bruker}
        knyttSøkerTilJournalpost={knyttSøkerTilJournalpost}
      />
      <VerticalSpacer twentyPx />
      {oppgave.beskrivelse && (
        <>
          <FlexRow>
            <FlexColumn>
              <Heading size="small">
                <FormattedMessage id="ValgtOppgave.Notat" />
              </Heading>
            </FlexColumn>
          </FlexRow>
          <FlexRow>
            <FlexColumn>
              <BodyLong>{oppgave.beskrivelse}</BodyLong>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer twentyPx />
        </>
      )}
      <VerticalSpacer sixteenPx />
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.Dokumenter" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      {gjeldendeJournalpost.dokumenter && (
        <>
          <VerticalSpacer eightPx />
          <DokumentForm
            journalpost={gjeldendeJournalpost}
            dokumentTittelStyresAvJournalpostTittel={dokumentTittelSkalStyresAvJournalpost(journalpostFraOppgave)}
          />
          <VerticalSpacer thirtyTwoPx />
        </>
      )}
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.RelaterteSaker" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      {skalKunneEndreSøker && (
        <Alert variant="info">
          <FormattedMessage id="ValgtOppgave.RelaterteSaker.ManglerSøker" />
        </Alert>
      )}
      {saker.map(sak => (
        <SakDetaljer sak={sak} key={sak.saksnummer} />
      ))}
      <VerticalSpacer thirtyTwoPx />
      <FlexRow>
        <FlexColumn>
          <Heading size="small">
            <FormattedMessage id="ValgtOppgave.KnyttTilSak" />
          </Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer eightPx />
      <VelgSakForm
        isSubmittable={isSubmittable}
        journalpost={gjeldendeJournalpost}
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        erKlarForJournalføring={!skalKunneEndreSøker}
      />
    </Form>
  );
};
export default JournalpostDetaljer;
