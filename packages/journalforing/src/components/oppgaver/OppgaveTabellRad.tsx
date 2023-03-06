import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Table } from '@navikt/ds-react';
import { NextFilled } from '@navikt/ds-icons';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import OppgaveOversikt from '../../typer/oppgaveOversiktTsType';
import { finnYtelseTekst } from '../journalpost/form/VelgSakForm';

import styles from './oppgaveTabellRad.module.css';

type OwnProps = Readonly<{
  oppgave: OppgaveOversikt;
  setValgtOppgave: (oppgave: OppgaveOversikt) => void;
}>;

const OppgaveTabellRad: FunctionComponent<OwnProps> = ({ oppgave, setValgtOppgave }) => {
  const setOppgave = useCallback(() => {
    setValgtOppgave(oppgave);
  }, []);
  return (
    <Table.Row
      onClick={oppgave.journalpostHarMangler ? undefined : setOppgave}
      shadeOnHover
      className={oppgave.journalpostHarMangler ? undefined : styles.tabellRad}
    >
      <Table.DataCell><DateLabel dateString={oppgave.opprettetDato} /></Table.DataCell>
      <Table.DataCell><FormattedMessage id={finnYtelseTekst(oppgave.ytelseType)} /></Table.DataCell>
      <Table.DataCell>{oppgave.beskrivelse}</Table.DataCell>
      <Table.DataCell>{oppgave.fødselsnummer}</Table.DataCell>
      <Table.DataCell><DateLabel dateString={oppgave.frist} /></Table.DataCell>
      <Table.DataCell>{oppgave.prioritet}</Table.DataCell>
      <Table.DataCell>{oppgave.enhetId}</Table.DataCell>
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
      {oppgave.journalpostHarMangler
        && (
          <Table.DataCell>
              <FormattedMessage id="Oppgave.Gosys" />
          </Table.DataCell>
        )}
    </Table.Row>
  );
};

export default OppgaveTabellRad;
