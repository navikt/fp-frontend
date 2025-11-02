import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Pagination, type SortState, Table, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { type Oppgave } from '@navikt/fp-los-felles';
import { notEmpty } from '@navikt/fp-utils';

import { reserverteOppgaverOptions } from '../../../data/fplosSaksbehandlerApi';
import { ReservertOppgaveRad } from './ReservertOppgaveRad';

import styles from './reservertOppgaveTabell.module.css';

const EMPTY_ARRAY = new Array<Oppgave>();

type TableHeaders = 'navn' | 'saksnummer' | 'behandlingstype' | 'opprettetTidspunkt' | 'status';

interface Props {
  reserverOppgave: (oppgave: Oppgave) => void;
  brukernavn: string;
}

export const ReservertOppgaveTabell = ({ reserverOppgave, brukernavn }: Props) => {
  const [sidetall, setSidetall] = useState(1);
  const raderPerSide = 15;

  const { data: reserverteOppgaver = EMPTY_ARRAY } = useQuery(reserverteOppgaverOptions());

  const [tabellSortering, setTabellSortering] = useState<SortState | undefined>({
    orderBy: 'reservertTilTidspunkt',
    direction: 'ascending',
  });
  const sorterTabellPåKolonne = (sorteringsnøkkel: TableHeaders) => {
    setTabellSortering(
      sorteringsnøkkel === tabellSortering?.orderBy && tabellSortering.direction === 'descending'
        ? undefined
        : {
            orderBy: sorteringsnøkkel,
            direction:
              sorteringsnøkkel === tabellSortering?.orderBy && tabellSortering.direction === 'ascending'
                ? 'descending'
                : 'ascending',
          },
    );
  };

  const sorterteOppgaver = reserverteOppgaver.slice().sort(getSorterOppgaver(tabellSortering));

  const oppgaverSomSkalVisesITabell =
    sorterteOppgaver.length > raderPerSide
      ? sorterteOppgaver.slice((sidetall - 1) * raderPerSide, sidetall * raderPerSide)
      : sorterteOppgaver;

  return (
    <div className={styles['tabell']}>
      <VStack gap="space-8" className={styles['headerPadding']}>
        <HStack gap="space-8">
          <Label size="small">
            <FormattedMessage id="ReservertOppgaveTabell.ReserverteOppgaver" />
          </Label>
          <BodyShort size="small" className={styles['grayout']}>
            <FormattedMessage
              id="ReservertOppgaveTabell.AntallOppgaver"
              values={{ reservertAntall: reserverteOppgaver.length }}
            />
          </BodyShort>
        </HStack>
        {reserverteOppgaver.length === 0 && (
          <BodyShort size="small">
            <FormattedMessage id="ReservertOppgaveTabell.IngenOppgaver" tagName="i" />
          </BodyShort>
        )}
      </VStack>
      {reserverteOppgaver.length > 0 && (
        <VStack gap="space-16">
          <Table
            size="small"
            sort={tabellSortering}
            onSortChange={sortKey => sorterTabellPåKolonne(sortKey as TableHeaders)}
          >
            <Table.Header>
              <Table.Row>
                <Table.ColumnHeader sortKey="navn" sortable>
                  <FormattedMessage id="ReservertOppgaveTabell.Soker" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="saksnummer" sortable>
                  <FormattedMessage id="ReservertOppgaveTabell.Sak" />
                </Table.ColumnHeader>
                <Table.ColumnHeader />
                <Table.ColumnHeader sortKey="opprettetTidspunkt" sortable>
                  <FormattedMessage id="ReservertOppgaveTabell.BehandlingOpprettet" />
                </Table.ColumnHeader>
                <Table.ColumnHeader sortKey="reservertTilTidspunkt" sortable>
                  <FormattedMessage id="ReservertOppgaveTabell.ReservertTilTidspunkt" />
                </Table.ColumnHeader>
                <Table.ColumnHeader />
                <Table.ColumnHeader />
              </Table.Row>
            </Table.Header>
            <Table.Body>
              {oppgaverSomSkalVisesITabell.map(oppgave => (
                <ReservertOppgaveRad
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

const comparator = (a: Oppgave, b: Oppgave, orderBy: TableHeaders) => {
  if (orderBy === 'status') {
    return notEmpty(a.reservasjonStatus.reservertTilTidspunkt) < notEmpty(b.reservasjonStatus.reservertTilTidspunkt)
      ? -1
      : 1;
  }

  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  return b[orderBy] > a[orderBy] ? 1 : 0;
};

const getSorterOppgaver = (sort: SortState | undefined) => (a: Oppgave, b: Oppgave) => {
  if (sort) {
    return sort.direction === 'ascending'
      ? comparator(b, a, sort.orderBy as TableHeaders)
      : comparator(a, b, sort.orderBy as TableHeaders);
  }
  return 1;
};
