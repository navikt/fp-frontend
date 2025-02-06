import React from 'react';
import { FormattedMessage } from 'react-intl';

import { ChevronRightIcon } from '@navikt/aksel-icons';
import { Button, Table, Tag } from '@navikt/ds-react';
import { DateLabel } from '@navikt/ft-ui-komponenter';

import type { NavAnsatt } from '@navikt/fp-types';

import type { Oppgave } from '../../typer/oppgaveTsType';
import type { ReserverOppgaveType } from '../../typer/reserverOppgaveType';
import { finnYtelseTekst } from '../journalpost/innhold/VelgSakForm';

import styles from './oppgaveTabellRad.module.css';

type Props = Readonly<{
  oppgave: Oppgave;
  velgOppgaveOgHentJournalpost: (oppgave: Oppgave) => void;
  navAnsatt: NavAnsatt;
  reserverOppgave: (data: ReserverOppgaveType) => void;
}>;

export const OppgaveTabellRad = ({ oppgave, velgOppgaveOgHentJournalpost, navAnsatt, reserverOppgave }: Props) => {
  return (
    <Table.Row
      onClick={() => {
        velgOppgaveOgHentJournalpost(oppgave);
      }}
      shadeOnHover
      className={styles.tabellRad}
    >
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
          <Button
            size="small"
            variant="tertiary"
            onClick={(e: React.SyntheticEvent) => {
              e.stopPropagation();
              reserverOppgave({
                journalpostId: oppgave.journalpostId,
                reserverFor: navAnsatt.brukernavn,
              });
            }}
            type="button"
          >
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
        <ChevronRightIcon className={styles.nesteIkon} />
      </Table.DataCell>
    </Table.Row>
  );
};
