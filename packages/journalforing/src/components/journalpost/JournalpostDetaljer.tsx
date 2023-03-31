import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { useForm } from 'react-hook-form';
import { Heading, BodyLong } from '@navikt/ds-react';

import {
  FlexColumn, FlexRow, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Form } from '@navikt/ft-form-hooks';
import VelgSakForm, { transformValues as transformValuesSak } from './innhold/VelgSakForm';
import Journalpost from '../../typer/journalpostTsType';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import SakDetaljer from './innhold/SakDetaljer';
import DokumentDetaljer from './innhold/DokumentDetaljer';
import BrukerAvsenderPanel from './innhold/BrukerAvsenderPanel';
import JournalføringFormValues from '../../typer/journalføringFormValues';

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue) => void;
}>;

export const transformValues = (values: JournalføringFormValues, journalpost: Journalpost, oppgave: OppgaveOversikt): JournalførSubmitValue => {
  if (!oppgave.enhetId) {
    throw Error('Kan ikke journalføre uten at enhet er satt');
  }
  return {
    journalpostId: journalpost.journalpostId,
    enhetId: oppgave.enhetId,
    oppgaveId: oppgave.id,
    ...transformValuesSak(values, journalpost),
  };
};

/**
 * JournalpostDetaljer - Viser detaljer om valgt journalpost
 */
const JournalpostDetaljer: FunctionComponent<OwnProps> = ({
  journalpost,
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
}) => {
  const saker = journalpost.fagsaker || [];
  const formMethods = useForm<JournalføringFormValues>();
  const submitJournal = useCallback((values: JournalføringFormValues) => {
    submitJournalføring(transformValues(values, journalpost, oppgave));
  }, []);
  const isSubmittable = formMethods.formState.isDirty;

  return (
    <Form<JournalføringFormValues> formMethods={formMethods} onSubmit={submitJournal}>
      <FlexRow>
        <FlexColumn>
          <Heading size="large">{journalpost.tittel}</Heading>
        </FlexColumn>
      </FlexRow>
      <VerticalSpacer sixteenPx />
      <BrukerAvsenderPanel journalpost={journalpost} />
      <VerticalSpacer twentyPx />
      {oppgave.beskrivelse && (
        <>
          <FlexRow>
            <FlexColumn>
              <Heading size="small"><FormattedMessage id="ValgtOppgave.Notat" /></Heading>
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
      {journalpost.dokumenter
        && (
          <>
            <VerticalSpacer eightPx />
            <DokumentDetaljer dokumenter={journalpost.dokumenter} />
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
      {saker.map((sak) => (
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
        journalpost={journalpost}
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
      />
    </Form>
  );
};
export default JournalpostDetaljer;
