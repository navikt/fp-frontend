import { FormattedMessage } from 'react-intl';

import { BodyShort, Heading, Table, VStack } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { Oppgave } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { LesMer } from './LesMer.tsx';

import styles from './oppgaveTabell.module.css';

interface Props {
  oppgaver: Oppgave[];
}

export const OppgaveTabell = ({ oppgaver }: Props) => {
  const maksLengde = 120;

  const { alleKodeverk } = usePanelDataContext();

  return (
    <VStack gap="2">
      <Heading size="xsmall">
        <FormattedMessage id="OppgaveTabell.Header" />
      </Heading>
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className={styles.headerType} textSize="small">
              <FormattedMessage id="OppgaveTabell.Type" />
            </Table.HeaderCell>
            <Table.HeaderCell className={styles.headerBeskrivelse} textSize="small">
              <FormattedMessage id="OppgaveTabell.Beskrivelse" />
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map((oppgave, index) => (
            <Table.Row key={`index${index + 1}`} className={styles.row}>
              <Table.DataCell>
                <BodyShort size="small">
                  {alleKodeverk[KodeverkType.OPPGAVE_TYPE].find(o => o.kode === oppgave.oppgavetype)?.navn}
                </BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                {oppgave.beskrivelse.length < maksLengde ? (
                  <BodyShort size="small">{oppgave.beskrivelse}</BodyShort>
                ) : (
                  <LesMer tekst={oppgave.beskrivelse} maksLengde={maksLengde} />
                )}
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </VStack>
  );
};
