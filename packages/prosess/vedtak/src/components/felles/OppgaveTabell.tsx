import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table, VStack } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { Oppgave } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { Beskrivelser } from './Beskrivelser.tsx';
import { Dokumenter } from './Dokumenter.tsx';
import { FerdigstillOppgaveKnapp } from './FerdigstillOppgaveKnapp.tsx';

import styles from './oppgaveTabell.module.css';

interface Props {
  oppgaver: Oppgave[];
  ferdigstillOppgave: (oppgaveId: string) => Promise<void>;
}

export const OppgaveTabell = ({ oppgaver, ferdigstillOppgave }: Props) => {
  const { alleKodeverk } = usePanelDataContext();

  return (
    <VStack gap="2">
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
            <Table.HeaderCell className={styles.headerButton} />
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map(oppgave => (
            <Table.Row key={oppgave.oppgaveId} className={styles.row}>
              <Table.DataCell>
                <BodyShort size="small">
                  {alleKodeverk[KodeverkType.OPPGAVE_TYPE].find(o => o.kode === oppgave.oppgavetype)?.navn}
                </BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <VStack gap="2">
                  {oppgave.beskrivelser.length > 0 && <Beskrivelser beskrivelser={oppgave.beskrivelser} />}
                  {oppgave.dokumenter.length > 0 && <Dokumenter dokumenter={oppgave.dokumenter} />}
                </VStack>
              </Table.DataCell>
              <Table.DataCell align="right">
                <FerdigstillOppgaveKnapp oppgave={oppgave} ferdigstillOppgave={ferdigstillOppgave} />
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </VStack>
  );
};
