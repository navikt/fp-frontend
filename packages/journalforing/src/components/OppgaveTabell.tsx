import React, { FunctionComponent } from 'react';
import { Button, BodyShort, Heading } from '@navikt/ds-react';
import dayjs from 'dayjs';

import {
  VerticalSpacer,
  Table, TableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import styles from './journalforingPanel.less';

type OwnProps = Readonly<{
    oppgaver: OppgaveOversikt[];
    setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const headerTextCodes = [
  'Oppgavetabell.Opprettet',
  'Oppgavetabell.YtelseType',
  'Oppgavetabell.Beskrivelse',
  'Oppgavetabell.Bruker',
  'Oppgavetabell.Frist',
  'Oppgavetabell.Prioritet',
];

/**
 * OppgaveTabell - Presenterer liste over oppgaver og tar inn callback for å sette valgt oppgave
 */
const OppgaveTabell: FunctionComponent<OwnProps> = ({
  oppgaver,
  setValgtOppgave,
}) => {
  if (oppgaver.length < 1) {
    return (
      <>
        <VerticalSpacer eightPx />
        <BodyShort size="small"><FormattedMessage id="Journalforing.Oppgaver.IngenOppgaver" /></BodyShort>
        <VerticalSpacer eightPx />
      </>
    );
  }
  return (
    <>
      <Heading size="small"><FormattedMessage id="Journalforing.Oppgaver.Tittel" /></Heading>
      <Table headerTextCodes={headerTextCodes}>
        {oppgaver.map((oppgave) => (
          <TableRow>
            <TableColumn>{dayjs(oppgave.opprettetDato).format(DDMMYYYY_DATE_FORMAT)}</TableColumn>
            <TableColumn>{oppgave.ytelseType}</TableColumn>
            <TableColumn>{oppgave.beskrivelse}</TableColumn>
            <TableColumn>{oppgave.fødselsnummer}</TableColumn>
            <TableColumn>{dayjs(oppgave.frist).format(DDMMYYYY_DATE_FORMAT)}</TableColumn>
            <TableColumn>{oppgave.prioritet}</TableColumn>
            {oppgave.journalpostHarMangler
                            && (
                            <TableColumn>
                              <a className={styles.gosysLink} href="https://gosys-q1.dev.intern.nav.no/gosys" target="_blank" rel="noreferrer">
                                <FormattedMessage id="Oppgave.Gosys.Link" />
                              </a>
                            </TableColumn>
                            )}
            {!oppgave.journalpostHarMangler
                            && (
                            <TableColumn>
                              <Button
                                size="small"
                                variant="tertiary"
                                loading={false}
                                disabled={false}
                                onClick={() => setValgtOppgave(oppgave)}
                                type="button"
                              >
                                <FormattedMessage id="Oppgavetabell.Velg" />
                              </Button>

                            </TableColumn>
                            )}
          </TableRow>
        ))}

      </Table>
    </>
  );
};
export default OppgaveTabell;
