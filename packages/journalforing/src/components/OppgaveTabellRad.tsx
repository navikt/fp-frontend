import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button } from '@navikt/ds-react';
import { TableRow, TableColumn, DateLabel } from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import styles from './journalforingPanel.less';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const OppgaveTabellRad: FunctionComponent<OwnProps> = ({ oppgave, setValgtOppgave }) => {
  const setOppgave = useCallback(() => {
    setValgtOppgave(oppgave);
  }, []);
  return (
    <TableRow key={oppgave.id}>
      <TableColumn><DateLabel dateString={oppgave.opprettetDato} /></TableColumn>
      <TableColumn>{oppgave.ytelseType}</TableColumn>
      <TableColumn>{oppgave.beskrivelse}</TableColumn>
      <TableColumn>{oppgave.fødselsnummer}</TableColumn>
      <TableColumn><DateLabel dateString={oppgave.frist} /></TableColumn>
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
              disabled={false}
              onClick={setOppgave}
              type="button"
            >
              <FormattedMessage id="Oppgavetabell.Velg" />
            </Button>
          </TableColumn>
        )}
    </TableRow>
  );
};

export default OppgaveTabellRad;
