import React, { FunctionComponent } from 'react';
import { FormattedMessage } from 'react-intl';
import { Heading, BodyLong } from '@navikt/ds-react';

import {
  FlexColumn, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import VelgSakForm from './VelgSakForm';
import Journalpost from '../../typer/journalpostTsType';
import JournalførSubmitValue from '../../typer/ferdigstillJournalføringSubmit';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import SakDetaljer from './SakDetaljer';
import DokumentDetaljer from './DokumentDetaljer';
import BrukerAvsenderPanel from './BrukerAvsenderPanel';

type OwnProps = Readonly<{
  journalpost: Journalpost;
  oppgave: OppgaveOversikt;
  avbrytVisningAvJournalpost: () => void;
  submitJournalføring: (params: JournalførSubmitValue) => void;
}>;

/**
 * OppgaveDetaljertVisning - Viser detaljer om valgt oppgave
 */
const OppgaveDetaljertVisning: FunctionComponent<OwnProps> = ({
  journalpost,
  oppgave,
  avbrytVisningAvJournalpost,
  submitJournalføring,
}) => {
  const saker = journalpost.fagsaker || [];
  return (
    <>
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
        journalpost={journalpost}
        avbrytVisningAvJournalpost={avbrytVisningAvJournalpost}
        submitJournalføring={submitJournalføring}
        oppgave={oppgave}
      />
    </>
  );
};
export default OppgaveDetaljertVisning;
