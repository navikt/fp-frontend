import React, { FunctionComponent, useCallback } from 'react'
import { FormattedMessage } from 'react-intl';
import dayjs from 'dayjs';
import { DDMMYYYY_DATE_FORMAT } from '@navikt/ft-utils';
import { Button } from '@navikt/ds-react';
import { TableRow, TableColumn } from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import styles from './journalforingPanel.less';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const OppgaveTabellRad: FunctionComponent<OwnProps> = ({ oppgave, setValgtOppgave }) => {
  const setOppgave = useCallback((oppgave: OppgaveOversikt) => {
    setValgtOppgave(oppgave);
  }, []);
  return (
    <TableRow key={oppgave.id}>
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
              disabled={false}
              onClick={() => setOppgave(oppgave)}
              type="button"
            >
              <FormattedMessage id="Oppgavetabell.Velg" />
            </Button>
          </TableColumn>
        )}
    </TableRow>
  )
}

export default OppgaveTabellRad