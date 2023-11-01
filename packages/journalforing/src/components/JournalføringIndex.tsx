import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { useForm } from 'react-hook-form';

import { FlexContainer, VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';
import { hasValidInteger, minLength, required } from '@navikt/ft-form-validators';
import { Form, InputField } from '@navikt/ft-form-hooks';
import { BodyShort, Button, HStack } from '@navikt/ds-react';

import Oppgave from '../typer/oppgaveTsType';
import OppgaveTabell from './oppgaver/OppgaveTabell';
import JournalpostIndex from './journalpost/JournalpostIndex';
import JournalførSubmitValue from '../typer/ferdigstillJournalføringSubmit';
import ReserverOppgaveType from '../typer/reserverOppgaveType';
import Journalpost from '../typer/journalpostTsType';

import styles from './journalføringIndex.module.css';

type Formvalues = {
  journalpostId: string;
};

type OwnProps = Readonly<{
  oppgaver: Oppgave[];
  navAnsatt: NavAnsatt;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  hentJournalpost: (journalpostId: string) => void;
  avbrytVisningAvJournalpost: () => void;
  valgtOppgave?: Oppgave;
  valgtJournalpost?: Journalpost;
  submitJournalføring: (data: JournalførSubmitValue) => void;
  reserverOppgave: (data: ReserverOppgaveType) => void;
  flyttTilGosys: (data: string) => void;
}>;

/**
 * JournalføringIndex - Styrer logikk rundt valg av oppgave i listen med oppgaver
 */
const JournalføringIndex: FunctionComponent<OwnProps> = ({
  oppgaver,
  navAnsatt,
  valgtOppgave,
  valgtJournalpost,
  velgOppgaveOgHentJournalpost,
  hentJournalpost,
  avbrytVisningAvJournalpost,
  submitJournalføring,
  reserverOppgave,
  flyttTilGosys,
}) => {
  const intl = useIntl();
  const formMethods = useForm({
    defaultValues: {} as Formvalues,
  });
  const submit = useCallback((data: Formvalues) => {
    hentJournalpost(data.journalpostId);
  }, []);
  const minLength9 = minLength(9);
  return (
    <FlexContainer>
      <VerticalSpacer sixteenPx />
      {!valgtJournalpost && (
        <div className={styles.sentrertInnhold}>
          <Form<Formvalues> formMethods={formMethods} onSubmit={submit}>
            <HStack gap="3" justify="start">
              <div className={styles.søkLabelSenter}>
                <BodyShort size="large">
                  <FormattedMessage id="Journalpost.Søk.Label" />
                </BodyShort>
              </div>
              <InputField
                name="journalpostId"
                validate={[required, hasValidInteger, minLength9]}
                size="medium"
                hideLabel
                label={intl.formatMessage({ id: 'Journalpost.Søk.Label' })}
              />
              <Button>Søk</Button>
            </HStack>
          </Form>
          <VerticalSpacer sixteenPx />
        </div>
      )}
      {!valgtJournalpost && (
        <div className={styles.sentrertInnhold}>
          <OppgaveTabell
            oppgaver={oppgaver}
            velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
            navAnsatt={navAnsatt}
            reserverOppgave={reserverOppgave}
          />
        </div>
      )}
      {valgtJournalpost && (
        <JournalpostIndex
          avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
          oppgave={valgtOppgave}
          journalpost={valgtJournalpost}
          navAnsatt={navAnsatt}
          submitJournalføring={submitJournalføring}
          reserverOppgave={reserverOppgave}
          flyttTilGosys={flyttTilGosys}
        />
      )}
    </FlexContainer>
  );
};
export default JournalføringIndex;
