import React, { FunctionComponent, useMemo } from 'react';
import { BodyShort, Table } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import OppgaveTabellRad from './OppgaveTabellRad';
import styles from './oppgaveTabell.module.css';

const finnRelevanteOppgaver = (oppgaver: OppgaveOversikt[], skjulUløseligeOppgaver: boolean): OppgaveOversikt[] => {
  if (oppgaver.length < 1 || !skjulUløseligeOppgaver) {
    return oppgaver;
  }
  return oppgaver.filter((opp) => !opp.journalpostHarMangler);
};

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
  skjulUløseligeOppgaver: boolean;
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

/**
 * OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave
 */
const OppgaveTabell: FunctionComponent<OwnProps> = ({
  oppgaver,
  skjulUløseligeOppgaver,
  setValgtOppgave,
}) => {
  const gjeldendeOppgaver = useMemo(() => finnRelevanteOppgaver(oppgaver, skjulUløseligeOppgaver), [oppgaver, skjulUløseligeOppgaver]);
  if (gjeldendeOppgaver.length < 1) {
    return (
      <>
        <VerticalSpacer eightPx />
        <BodyShort size="small"><FormattedMessage id="Journalforing.Oppgaver.IngenOppgaver" /></BodyShort>
        <VerticalSpacer eightPx />
      </>
    );
  }
  return (
    <div className={styles.oppgaverTabell}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.Opprettet" /></Table.HeaderCell>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.YtelseType" /></Table.HeaderCell>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.Beskrivelse" /></Table.HeaderCell>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.Bruker" /></Table.HeaderCell>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.Frist" /></Table.HeaderCell>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.Prioritet" /></Table.HeaderCell>
            <Table.HeaderCell><FormattedMessage id="Oppgavetabell.Enhet" /></Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {gjeldendeOppgaver.map((oppgave) => (
            <OppgaveTabellRad oppgave={oppgave} setValgtOppgave={setValgtOppgave} key={oppgave.id} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default OppgaveTabell;
