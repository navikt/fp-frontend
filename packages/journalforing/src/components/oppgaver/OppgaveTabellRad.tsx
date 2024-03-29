import React, { FunctionComponent, useCallback } from 'react';
import { FormattedMessage } from 'react-intl';
import { Button, Table, Tag } from '@navikt/ds-react';
import { ChevronRightIcon } from '@navikt/aksel-icons';
import { DateLabel } from '@navikt/ft-ui-komponenter';
import { NavAnsatt } from '@navikt/fp-types';
import Oppgave from '../../typer/oppgaveTsType';
import ReserverOppgaveType from '../../typer/reserverOppgaveType';
import { finnYtelseTekst } from '../journalpost/innhold/VelgSakForm';

import styles from './oppgaveTabellRad.module.css';

type OwnProps = Readonly<{
  oppgave: Oppgave;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

const OppgaveTabellRad: FunctionComponent<OwnProps> = ({
  oppgave,
  velgOppgaveOgHentJournalpost,
  navAnsatt,
  reserverOppgave,
}) => {
  const setOppgave = useCallback(() => {
    velgOppgaveOgHentJournalpost(oppgave);
  }, [oppgave]);

  const reserverOppgaveAction = useCallback(
    (e: React.SyntheticEvent) => {
      e.stopPropagation();
      reserverOppgave({
        journalpostId: oppgave.journalpostId,
        reserverFor: navAnsatt.brukernavn,
      });
    },
    [oppgave],
  );

  return (
    <Table.Row onClick={setOppgave} shadeOnHover className={styles.tabellRad}>
      <Table.DataCell>
        <DateLabel dateString={oppgave.opprettetDato} />
      </Table.DataCell>
      <Table.DataCell>
        <FormattedMessage id={finnYtelseTekst(oppgave.ytelseType)} />
      </Table.DataCell>
      <Table.DataCell>{oppgave.beskrivelse}</Table.DataCell>
      <Table.DataCell>
        {oppgave.reservertAv && navAnsatt.brukernavn === oppgave.reservertAv && (
          <Tag size="small" variant="info-moderate">
            <FormattedMessage id="Oppgavetabell.Meg" />
          </Tag>
        )}
        {oppgave.reservertAv && navAnsatt.brukernavn !== oppgave.reservertAv && (
          <Tag size="small" variant="neutral-moderate">
            {oppgave.reservertAv}
          </Tag>
        )}
        {!oppgave.reservertAv && (
          <Button size="small" variant="tertiary" onClick={reserverOppgaveAction} type="button">
            <FormattedMessage id="Oppgavetabell.SettPåMeg" />
          </Button>
        )}
      </Table.DataCell>
      <Table.DataCell>{oppgave.fødselsnummer}</Table.DataCell>
      <Table.DataCell>
        <DateLabel dateString={oppgave.frist} />
      </Table.DataCell>
      <Table.DataCell>{oppgave.enhetId}</Table.DataCell>
      <Table.DataCell>
        <Button size="small" variant="tertiary" disabled={false} onClick={setOppgave} type="button">
          <ChevronRightIcon className={styles.nesteIkon} />
        </Button>
      </Table.DataCell>
    </Table.Row>
  );
};

export default OppgaveTabellRad;
