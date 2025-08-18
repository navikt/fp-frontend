import { FormattedMessage } from 'react-intl';

import {
  ArrowCirclepathIcon,
  CheckmarkCircleIcon,
  CheckmarkIcon,
  ChevronRightCircleFillIcon,
  ClockDashedIcon,
  HourglassTopFilledIcon,
  PencilIcon,
  PersonEnvelopeIcon,
} from '@navikt/aksel-icons';
import { BodyShort, Heading, HStack, Table, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { OppgaveBehandlingStatus } from '@navikt/fp-kodeverk';
import { type Oppgave } from '@navikt/fp-los-felles';

import { behandlendeOppgaverOptions } from '../../data/fplosSaksbehandlerApi';
import { useLosKodeverk } from '../../data/useLosKodeverk';

import styles from './sistBehandledeSaker.module.css';

const EMPTY_ARRAY: Oppgave[] = [];

interface Props {
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
}

/**
 * SistBehandledeSaker
 *
 * Denne komponenten viser de siste fagsakene en nav-ansatt har behandlet.
 */
export const SistBehandledeSaker = ({ åpneFagsak }: Props) => {
  const { data: sistBehandledeSaker = EMPTY_ARRAY } = useQuery(behandlendeOppgaverOptions());

  return (
    <VStack gap="space-8">
      <HStack gap="space-8" align="center">
        <div className={styles.iconBackground}>
          <ClockDashedIcon aria-hidden className={styles.clockIcon} />
        </div>
        <Heading size="xsmall" level="2">
          <FormattedMessage id="SistBehandledeSaker.SistBehandledeSaker" />
        </Heading>
      </HStack>
      {sistBehandledeSaker.length === 0 && (
        <div className={styles.ingenBehandlinger}>
          <BodyShort size="medium">
            <FormattedMessage id="SistBehandledeSaker.IngenBehandlinger" tagName="i" />
          </BodyShort>
        </div>
      )}
      {sistBehandledeSaker.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.Soker" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.Saksnr" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.Status" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col">
                <FormattedMessage id="SistBehandledeSaker.ErReservert" />
              </Table.HeaderCell>
              <Table.HeaderCell scope="col" />
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sistBehandledeSaker.map(sbs => (
              <Table.Row key={sbs.id} onClick={() => åpneFagsak(sbs.saksnummer, sbs.behandlingId)}>
                <Table.DataCell scope="row">{sbs.navn}</Table.DataCell>
                <Table.DataCell scope="row">{sbs.saksnummer}</Table.DataCell>
                <Table.DataCell scope="row">
                  <StatusIcon oppgave={sbs} />
                </Table.DataCell>
                <Table.DataCell scope="row">
                  {sbs.reservasjonStatus.erReservert && (
                    <CheckmarkIcon title={sbs.reservasjonStatus.reservertAvNavn} fontSize="1.5rem" />
                  )}
                </Table.DataCell>
                <Table.DataCell scope="row">
                  <ChevronRightCircleFillIcon aria-hidden className={styles.pointerIcon} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
    </VStack>
  );
};

const StatusIcon = ({ oppgave }: { oppgave: Oppgave }) => {
  const oppgaveBehandlingStatuser = useLosKodeverk('OppgaveBehandlingStatus');

  const statusNavn = oppgaveBehandlingStatuser.find(obs => obs.kode === oppgave.oppgaveBehandlingStatus)?.navn || '-';

  if (oppgave.oppgaveBehandlingStatus === OppgaveBehandlingStatus.UNDER_ARBEID) {
    return <PencilIcon title={statusNavn} fontSize="1.5rem" />;
  }
  if (oppgave.oppgaveBehandlingStatus === OppgaveBehandlingStatus.FERDIG) {
    return <CheckmarkCircleIcon title={statusNavn} fontSize="1.5rem" color="var(--ax-success-500)" />;
  }
  if (oppgave.oppgaveBehandlingStatus === OppgaveBehandlingStatus.PÅ_VENT) {
    return <HourglassTopFilledIcon title={statusNavn} fontSize="1.5rem" color="var(--ax-success-500)" />;
  }
  if (oppgave.oppgaveBehandlingStatus === OppgaveBehandlingStatus.RETURNERT_FRA_BESLUTTER) {
    return <ArrowCirclepathIcon title={statusNavn} fontSize="1.5rem" color="var(--ax-warning-500)" />;
  }
  if (oppgave.oppgaveBehandlingStatus === OppgaveBehandlingStatus.TIL_BESLUTTER) {
    return <PersonEnvelopeIcon title={statusNavn} fontSize="1.5rem" />;
  }

  throw new Error('Ukjent status i statusfeltet til "Dine siste reserverte behandlinger');
};
