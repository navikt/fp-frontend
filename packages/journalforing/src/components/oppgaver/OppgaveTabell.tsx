import { FormattedMessage } from 'react-intl';

import { BodyShort, Table } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import type { NavAnsatt } from '@navikt/fp-types';

import { hentAlleJournalOppgaver } from '../../data/fpFordelApi';
import type { Oppgave } from '../../typer/oppgaveTsType';
import type { ReserverOppgaveType } from '../../typer/reserverOppgaveType';
import { OppgaveTabellRad } from './OppgaveTabellRad';

import styles from './oppgaveTabell.module.css';

type Props = Readonly<{
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

/**
 * OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave
 */
export const OppgaveTabell = ({ velgOppgaveOgHentJournalpost, navAnsatt, reserverOppgave }: Props) => {
  const { data: oppgaver } = useQuery(hentAlleJournalOppgaver(navAnsatt.brukernavn));

  if ((oppgaver ?? []).length < 1) {
    return (
      <BodyShort size="small">
        <FormattedMessage id="Journalforing.Oppgaver.IngenOppgaver" />
      </BodyShort>
    );
  }

  return (
    <Table>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.Opprettet" />
          </Table.HeaderCell>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.YtelseType" />
          </Table.HeaderCell>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.Beskrivelse" />
          </Table.HeaderCell>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.Saksbehandler" />
          </Table.HeaderCell>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.Bruker" />
          </Table.HeaderCell>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.Frist" />
          </Table.HeaderCell>
          <Table.HeaderCell className={styles.headerText}>
            <FormattedMessage id="Oppgavetabell.Enhet" />
          </Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {(oppgaver ?? []).map(oppgave => (
          <OppgaveTabellRad
            oppgave={oppgave}
            velgOppgaveOgHentJournalpost={velgOppgaveOgHentJournalpost}
            key={oppgave.journalpostId}
            navAnsatt={navAnsatt}
            reserverOppgave={reserverOppgave}
          />
        ))}
      </Table.Body>
    </Table>
  );
};
