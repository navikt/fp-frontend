import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';

import { type Oppgave } from '@navikt/fp-los-felles';

import { BehandlingPollingTimoutModal } from '../timeoutModal/BehandlingPollingTimoutModal';
import { OppgaveRad } from './OppgaveRad';
import { useOppgavePolling } from './useOppgavePolling';

import styles from './oppgaverTabell.module.css';

interface Props {
  reserverOppgave: (oppgave: Oppgave) => void;
  antallOppgaver?: number;
  valgtSakslisteId: number;
}

export const OppgaverTabell = ({ reserverOppgave, antallOppgaver = 0, valgtSakslisteId }: Props) => {
  const { oppgaverTilBehandling, nyeBehandlinger, isMaxPollingAttemptsReached } = useOppgavePolling(valgtSakslisteId);

  return (
    <div className={styles.tabell}>
      {isMaxPollingAttemptsReached && <BehandlingPollingTimoutModal />}
      <VStack gap="2" className={styles.headerPadding}>
        <HStack gap="2">
          <Label size="small">
            <FormattedMessage id="OppgaverTabell.DineNesteSaker" />
          </Label>
          <BodyShort size="small" className={styles.grayout}>
            <FormattedMessage id="OppgaverTabell.DineNesteSakerAntall" values={{ totaltAntall: antallOppgaver }} />
          </BodyShort>
        </HStack>
      </VStack>
      {oppgaverTilBehandling.length > 0 && (
        <VStack gap="4">
          <Table size="small">
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader>
                  <FormattedMessage id="OppgaverTabell.Soker" />
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <FormattedMessage id="OppgaverTabell.Sak" />
                </Table.ColumnHeader>
                <Table.ColumnHeader />
                <Table.ColumnHeader>
                  <FormattedMessage id="OppgaverTabell.BehandlingOpprettet" />
                </Table.ColumnHeader>
                <Table.ColumnHeader>
                  <FormattedMessage id="OppgaverTabell.FristForBehandling" />
                </Table.ColumnHeader>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {oppgaverTilBehandling.map(oppgave => (
                <OppgaveRad
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
    </div>
  );
};
