import React, { FunctionComponent } from 'react';
import { BodyShort, Table } from '@navikt/ds-react';

import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { NavAnsatt } from '@navikt/fp-types';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import OppgaveTabellRad from './OppgaveTabellRad';
import styles from './oppgaveTabell.module.css';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
  navAnsatt: NavAnsatt
}>;

/**
 * OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave
 */
const OppgaveTabell: FunctionComponent<OwnProps> = ({ oppgaver,
                                                      setValgtOppgave,
                                                      navAnsatt}) => {
  if (oppgaver.length < 1) {
    return (
      <>
        <VerticalSpacer eightPx />
        <BodyShort size="small">
          <FormattedMessage id="Journalforing.Oppgaver.IngenOppgaver" />
        </BodyShort>
        <VerticalSpacer eightPx />
      </>
    );
  }
  return (
    <div className={styles.oppgaverTabell}>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Opprettet" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.YtelseType" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Beskrivelse" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Saksbehandler" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Bruker" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Frist" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Prioritet" />
            </Table.HeaderCell>
            <Table.HeaderCell>
              <FormattedMessage id="Oppgavetabell.Enhet" />
            </Table.HeaderCell>
            <Table.HeaderCell />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map(oppgave => (
            <OppgaveTabellRad oppgave={oppgave} setValgtOppgave={setValgtOppgave} key={oppgave.id} navAnsatt={navAnsatt} />
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};
export default OppgaveTabell;
