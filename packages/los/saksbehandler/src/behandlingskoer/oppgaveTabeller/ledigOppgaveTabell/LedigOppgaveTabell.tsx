import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Table, VStack } from '@navikt/ds-react';

import { type OppgaveDto } from '@navikt/fp-types';

import { BehandlingPollingTimoutModal } from '../../timeoutModal/BehandlingPollingTimoutModal';
import { LedigOppgaveRad } from './LedigOppgaveRad';
import { useOppgavePolling } from './useOppgavePolling';

import styles from './ledigOppgaveTabell.module.css';

interface Props {
  reserverOppgave: (oppgave: OppgaveDto) => void;
  antallOppgaver?: number;
  valgtSakslisteId: number;
}

export const LedigOppgaveTabell = ({ reserverOppgave, antallOppgaver = 0, valgtSakslisteId }: Props) => {
  const { oppgaverTilBehandling, nyeBehandlinger, isMaxPollingAttemptsReached } = useOppgavePolling(valgtSakslisteId);

  return (
    <VStack gap="space-16" className={styles['container']}>
      {isMaxPollingAttemptsReached && <BehandlingPollingTimoutModal />}
      <VStack gap="space-8" paddingInline="space-12">
        <HStack gap="space-8">
          <Label size="small">
            <FormattedMessage id="LedigOppgaveTabell.DineNesteSaker" />
          </Label>
          <BodyShort size="small" textColor="subtle">
            <FormattedMessage id="LedigOppgaveTabell.DineNesteSakerAntall" values={{ totaltAntall: antallOppgaver }} />
          </BodyShort>
        </HStack>
        {oppgaverTilBehandling.length === 0 && (
          <BodyShort size="small">
            <FormattedMessage id="LedigOppgaveTabell.IngenOppgaver" tagName="i" />
          </BodyShort>
        )}
      </VStack>
      {oppgaverTilBehandling.length > 0 && (
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
      )}
    </VStack>
  );
};
