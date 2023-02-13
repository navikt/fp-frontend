import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Table, Link } from '@navikt/ds-react';
import { NextFilled } from '@navikt/ds-icons';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../typer/oppgaveOversiktTsType';
import styles from './journalforingPanel.less';
import { finnYtelseTekst } from './VelgSakForm';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const OppgaveTabellRad: FunctionComponent<OwnProps> = ({ oppgave, setValgtOppgave }) => {
  const setOppgave = useCallback(() => {
    setValgtOppgave(oppgave);
  }, []);
  return (
    <Table.Row>
      <Table.DataCell><DateLabel dateString={oppgave.opprettetDato} /></Table.DataCell>
      <Table.DataCell><FormattedMessage id={finnYtelseTekst(oppgave.ytelseType)} /></Table.DataCell>
      <Table.DataCell>{oppgave.beskrivelse}</Table.DataCell>
      <Table.DataCell>{oppgave.fødselsnummer}</Table.DataCell>
      <Table.DataCell><DateLabel dateString={oppgave.frist} /></Table.DataCell>
      <Table.DataCell>{oppgave.prioritet}</Table.DataCell>
      <Table.DataCell>{oppgave.enhetId}</Table.DataCell>
      {oppgave.journalpostHarMangler
        && (
          <Table.DataCell>
            <Link href="https://gosys-q1.dev.intern.nav.no/gosys" target="_blank" className={styles.gosysLink}>
              <FormattedMessage id="Oppgave.Gosys.Link" />
            </Link>
          </Table.DataCell>
        )}
      {!oppgave.journalpostHarMangler
        && (
          <Table.DataCell>
            <Button
              size="small"
              variant="tertiary"
              disabled={false}
              onClick={setOppgave}
              type="button"
            >
              <NextFilled className={styles.nesteIkon} />
            </Button>
          </Table.DataCell>
        )}
    </Table.Row>
  );
};

export default OppgaveTabellRad;
