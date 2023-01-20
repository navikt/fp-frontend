import React, { FunctionComponent } from 'react';
import { Button, BodyShort, Heading } from '@navikt/ds-react';

import {
  VerticalSpacer,
  Table, TableRow, TableColumn,
} from '@navikt/ft-ui-komponenter';
import { FormattedMessage } from 'react-intl';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import styles from './journalforingPanel.less';

type OwnProps = Readonly<{
  oppgaver: OppgaveOversikt[];
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const headerTextCodes = [
  'Oppgavetabell.Opprettet',
  'Oppgavetabell.Behandlingtype',
  'Oppgavetabell.Frist',
  'Oppgavetabell.Prioritet',
  'Oppgavetabell.Bruker',
  'Oppgavetabell.Enhet',
];

/**
 * JournalforingPanel
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
          <TableRow key={oppgave.id}>
            <TableColumn>{oppgave.opprettetDato}</TableColumn>
            <TableColumn>{oppgave.tema}</TableColumn>
            <TableColumn>{oppgave.frist}</TableColumn>
            <TableColumn>{oppgave.prioritet}</TableColumn>
            <TableColumn>{oppgave.aktoerId}</TableColumn>
            <TableColumn>{oppgave.tildeltEnhetsnr}</TableColumn>
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
