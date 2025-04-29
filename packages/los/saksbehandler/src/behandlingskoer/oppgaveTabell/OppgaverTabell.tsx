import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Pagination, type SortState, Table, VStack } from '@navikt/ds-react';

import { type Oppgave } from '@navikt/fp-los-felles';

import { BehandlingPollingTimoutModal } from '../timeoutModal/BehandlingPollingTimoutModal';
import { type OppgaveMedReservertIndikator, OppgaveRad } from './OppgaveRad';
import { useOppgavePolling } from './useOppgavePolling';

import styles from './oppgaverTabell.module.css';

type TableHeaders =
  | 'navn'
  | 'saksnummer'
  | 'behandlingstype'
  | 'opprettetTidspunkt'
  | 'behandlingsfrist'
  | 'reservertTilTidspunkt';

const comparator = (a: OppgaveMedReservertIndikator, b: OppgaveMedReservertIndikator, orderBy: TableHeaders) => {
  if (
    (orderBy === 'reservertTilTidspunkt' && a.underBehandling && !b.underBehandling) ||
    (!a.underBehandling && b.underBehandling)
  ) {
    return 1;
  }
  if (b[orderBy] === undefined || a[orderBy] === undefined || b[orderBy] < a[orderBy]) {
    return -1;
  }
  return b[orderBy] > a[orderBy] ? 1 : 0;
};

const getSorterOppgaver =
  (sort: SortState | undefined) => (a: OppgaveMedReservertIndikator, b: OppgaveMedReservertIndikator) => {
    if (sort) {
      return sort.direction === 'ascending'
        ? comparator(b, a, sort.orderBy as TableHeaders)
        : comparator(a, b, sort.orderBy as TableHeaders);
    }
    return 1;
  };

const slaSammenOgMarkerReserverte = (
  reserverteOppgaver: Oppgave[],
  oppgaverTilBehandling: Oppgave[],
): OppgaveMedReservertIndikator[] => {
  const markedAsUnderBehandling = reserverteOppgaver
    .filter(reservertOppgave => !oppgaverTilBehandling.some(oppgave => oppgave.id === reservertOppgave.id))
    .map(reservertOppgave => ({
      ...reservertOppgave,
      underBehandling: true,
      reservertTilTidspunkt: reservertOppgave.status.reservertTilTidspunkt,
    }));
  const notMarked = oppgaverTilBehandling.map(f => ({
    ...f,
    underBehandling: false,
    reservertTilTidspunkt: undefined,
  }));

  return markedAsUnderBehandling.concat(notMarked.slice(0, 3));
};

interface Props {
  reserverOppgave: (oppgave: Oppgave) => void;
  antallOppgaver?: number;
  valgtSakslisteId: number;
  brukernavn: string;
}

export const OppgaverTabell = ({ reserverOppgave, antallOppgaver = 0, valgtSakslisteId, brukernavn }: Props) => {
  const [sidetall, setSidetall] = useState(1);
  const raderPerSide = 15;

  const { oppgaverTilBehandling, reserverteOppgaver, isMaxPollingAttemptsReached } =
    useOppgavePolling(valgtSakslisteId);

  const alleOppgaver = slaSammenOgMarkerReserverte(reserverteOppgaver, oppgaverTilBehandling);

  const [tabellSortering, setTabellSortering] = useState<SortState | undefined>({
    orderBy: 'reservertTilTidspunkt',
    direction: 'ascending',
  });
  const sorterTabellPåKolonne = (sorteringsnøkkel: TableHeaders) => {
    setTabellSortering(
      tabellSortering && sorteringsnøkkel === tabellSortering.orderBy && tabellSortering.direction === 'descending'
        ? undefined
        : {
            orderBy: sorteringsnøkkel,
            direction:
              tabellSortering &&
              sorteringsnøkkel === tabellSortering.orderBy &&
              tabellSortering.direction === 'ascending'
                ? 'descending'
                : 'ascending',
          },
    );
  };

  const sorterteOppgaver = alleOppgaver.slice().sort(getSorterOppgaver(tabellSortering));

  const oppgaverSomSkalVisesITabell =
    sorterteOppgaver.length > raderPerSide
      ? sorterteOppgaver.slice((sidetall - 1) * raderPerSide, sidetall * raderPerSide)
      : sorterteOppgaver;

  return (
    <div className={styles.tabell}>
      {isMaxPollingAttemptsReached && <BehandlingPollingTimoutModal />}
      <VStack gap="2" className={styles.headerPadding}>
        <HStack gap="2">
          <Label size="small">
            <FormattedMessage id="OppgaverTabell.DineNesteSaker" />
          </Label>
          <BodyShort size="small" className={styles.grayout}>
            <FormattedMessage
              id="OppgaverTabell.DineNesteSakerAntall"
              values={{ totaltAntall: antallOppgaver, reservertAntall: reserverteOppgaver.length }}
            />
          </BodyShort>
        </HStack>
        {alleOppgaver.length === 0 && (
          <BodyShort size="small">
            <FormattedMessage id="OppgaverTabell.IngenOppgaver" values={{ i: chunks => <i>{chunks}</i> }} />
          </BodyShort>
        )}
      </VStack>
      {alleOppgaver.length > 0 && (
        <VStack gap="4">
          <Table
            size="small"
            sort={tabellSortering}
            onSortChange={sortKey => sorterTabellPåKolonne(sortKey as TableHeaders)}
          >
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader sortKey="navn" sortable>
                  <FormattedMessage id="OppgaverTabell.Soker" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="saksnummer" sortable>
                  <FormattedMessage id="OppgaverTabell.Sak" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="behandlingstype" sortable>
                  <FormattedMessage id="OppgaverTabell.Behandlingstype" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="opprettetTidspunkt" sortable>
                  <FormattedMessage id="OppgaverTabell.BehandlingOpprettet" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="behandlingsfrist" sortable>
                  <FormattedMessage id="OppgaverTabell.FristForBehandling" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="reservertTilTidspunkt" sortable>
                  <FormattedMessage id="OppgaverTabell.ReservertTilTidspunkt" />
                </Table.ColumnHeader>
                <Table.ColumnHeader />
                <Table.ColumnHeader />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {oppgaverSomSkalVisesITabell.map(oppgave => (
                <OppgaveRad
                  key={oppgave.id}
                  oppgave={oppgave}
                  reserverOppgave={reserverOppgave}
                  brukernavn={brukernavn}
                />
              ))}
            </Table.Body>
          </Table>
          {sorterteOppgaver.length > raderPerSide && (
            <Pagination
              page={sidetall}
              onPageChange={setSidetall}
              count={Math.ceil(sorterteOppgaver.length / raderPerSide)}
              size="small"
              prevNextTexts
            />
          )}
        </VStack>
      )}
    </div>
  );
};
