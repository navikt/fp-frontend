import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table, VStack } from '@navikt/ds-react';

import type { Oppgave } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { Beskrivelser } from './Beskrivelser.tsx';
import { Dokumenter } from './Dokumenter.tsx';
import { FerdigstillOppgaveKnapp } from './FerdigstillOppgaveKnapp.tsx';

import styles from './oppgaveTabell.module.css';

interface Props {
  oppgaver: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
  isReadOnly: boolean;
}

export const OppgaveTabell = ({ oppgaver, ferdigstillOppgave, isReadOnly }: Props) => {
  const { alleKodeverk } = usePanelDataContext();

  return (
    <VStack gap="space-8">
      <Label size="small">
        <FormattedMessage id="OppgaveTabell.Header" />
      </Label>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className={styles.headerType} textSize="small">
              <FormattedMessage id="OppgaveTabell.Type" />
            </Table.HeaderCell>
            <Table.HeaderCell textSize="small">
              <FormattedMessage id="OppgaveTabell.Beskrivelse" />
            </Table.HeaderCell>
            {!isReadOnly && <Table.HeaderCell className={styles.headerButton} />}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map(oppgave => (
            <Table.Row key={oppgave.oppgaveId} className={styles.row}>
              <Table.DataCell>
                <BodyShort size="small">
                  {alleKodeverk['OppgaveType'].find(o => o.kode === oppgave.oppgavetype)?.navn}
                </BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <VStack gap="space-8">
                  {oppgave.beskrivelser.length > 0 && <Beskrivelser beskrivelser={oppgave.beskrivelser} />}
                  {oppgave.dokumenter.length > 0 && <Dokumenter dokumenter={oppgave.dokumenter} />}
                </VStack>
              </Table.DataCell>
              {!isReadOnly && (
                <Table.DataCell align="right">
                  <FerdigstillOppgaveKnapp oppgave={oppgave} ferdigstillOppgave={ferdigstillOppgave} />
                </Table.DataCell>
              )}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </VStack>
  );
};
