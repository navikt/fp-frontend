import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';

import { type Oppgave } from '@navikt/fp-los-felles';

import { BehandlingPollingTimoutModal } from '../../timeoutModal/BehandlingPollingTimoutModal';
import { LedigOppgaveRad } from './LedigOppgaveRad';
import { useOppgavePolling } from './useOppgavePolling';

import styles from './ledigOppgaveTabell.module.css';

interface Props {
  reserverOppgave: (oppgave: Oppgave) => void;
  antallOppgaver?: number;
  valgtSakslisteId: number;
}

export const LedigOppgaveTabell = ({ reserverOppgave, antallOppgaver = 0, valgtSakslisteId }: Props) => {
  const { oppgaverTilBehandling, nyeBehandlinger, isMaxPollingAttemptsReached } = useOppgavePolling(valgtSakslisteId);

  return (
    <VStack gap="4" className={styles.tabell}>
      {isMaxPollingAttemptsReached && <BehandlingPollingTimoutModal />}
      <VStack gap="2" className={styles.padding}>
        <HStack gap="2">
          <Label size="small">
            <FormattedMessage id="LedigOppgaveTabell.DineNesteSaker" />
          </Label>
          <BodyShort size="small" className={styles.grayout}>
            <FormattedMessage id="LedigOppgaveTabell.DineNesteSakerAntall" values={{ totaltAntall: antallOppgaver }} />
          </BodyShort>
        </HStack>
      </VStack>
      {oppgaverTilBehandling.length === 0 && (
        <BodyShort size="small" className={styles.padding}>
          <FormattedMessage id="LedigOppgaveTabell.IngenOppgaver" tagName="i" />
        </BodyShort>
      )}
      {oppgaverTilBehandling.length > 0 && (
        <VStack gap="4">
          <Table size="small">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>
                  <FormattedMessage id="LedigOppgaveTabell.Soker" />
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <FormattedMessage id="LedigOppgaveTabell.Sak" />
                </Table.ColumnHeader>
                <Table.ColumnHeader />
                <Table.ColumnHeader>
                  <FormattedMessage id="LedigOppgaveTabell.BehandlingOpprettet" />
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {oppgaverTilBehandling.map(oppgave => (
                <LedigOppgaveRad
                  key={oppgave.id}
                  oppgave={oppgave}
                  reserverOppgave={reserverOppgave}
                  erNyBehandling={nyeBehandlinger.some(nb => nb.id === oppgave.id)}
                />
              ))}
            </Table.Body>
          </Table>
        </VStack>
      )}
    </VStack>
  );
};
