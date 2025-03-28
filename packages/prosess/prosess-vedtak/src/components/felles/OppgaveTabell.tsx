import { FormattedMessage } from 'react-intl';

import { BodyShort, Label, Table, VStack } from '@navikt/ds-react';

import { KodeverkType } from '@navikt/fp-kodeverk';
import type { Oppgave } from '@navikt/fp-types';
import { usePanelDataContext } from '@navikt/fp-utils';

import { Beskrivelser } from './Beskrivelser.tsx';
import { Dokumenter } from './Dokumenter.tsx';

import styles from './oppgaveTabell.module.css';

interface Props {
  oppgaver: Oppgave[];
}

export const OppgaveTabell = ({ oppgaver }: Props) => {
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
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {oppgaver.map(oppgave => (
            <Table.Row
              key={oppgave.nyesteBeskrivelse?.header || oppgave.nyesteBeskrivelse?.kommentarer[0]}
              className={styles.row}
            >
              <Table.DataCell>
                <BodyShort size="small">
                  {alleKodeverk[KodeverkType.OPPGAVE_TYPE].find(o => o.kode === oppgave.oppgavetype)?.navn}
                </BodyShort>
              </Table.DataCell>
              <Table.DataCell>
                <VStack gap="2">
                  <Beskrivelser
                    nyesteBeskrivelse={oppgave.nyesteBeskrivelse}
                    eldreBeskrivelser={oppgave.eldreBeskrivelser}
                  />
                  {oppgave.dokumenter.length > 0 && <Dokumenter dokumenter={oppgave.dokumenter} />}
                </VStack>
              </Table.DataCell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </VStack>
  );
};
