import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { BodyShort, HStack, Label, Pagination, type SortState, Table, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { type Oppgave } from '@navikt/fp-los-felles';

import { notEmpty } from '../../../../../utils/src/notEmpty';
import { reserverteOppgaverOptions } from '../../data/fplosSaksbehandlerApi';
import { ReservertOppgaveRad } from './ReservertOppgaveRad';

import styles from './reserverteOppgaverTabell.module.css';

const EMPTY_ARRAY = new Array<Oppgave>();

type TableHeaders = 'navn' | 'saksnummer' | 'behandlingstype' | 'opprettetTidspunkt' | 'behandlingsfrist' | 'status';

interface Props {
  reserverOppgave: (oppgave: Oppgave) => void;
  antallOppgaver?: number;
  brukernavn: string;
}

export const ReserverteOppgaverTabell = ({ reserverOppgave, brukernavn }: Props) => {
  const [sidetall, setSidetall] = useState(1);
  const raderPerSide = 15;

  const { data: reserverteOppgaver = EMPTY_ARRAY } = useQuery(reserverteOppgaverOptions());

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

  const sorterteOppgaver = reserverteOppgaver.slice().sort(getSorterOppgaver(tabellSortering));

  const oppgaverSomSkalVisesITabell =
    sorterteOppgaver.length > raderPerSide
      ? sorterteOppgaver.slice((sidetall - 1) * raderPerSide, sidetall * raderPerSide)
      : sorterteOppgaver;

  return (
    <div className={styles.tabell}>
      <VStack gap="2" className={styles.headerPadding}>
        <HStack gap="2">
          <Label size="small">
            <FormattedMessage id="ReserverteOppgaverTabell.ReserverteOppgaver" />
          </Label>
          <BodyShort size="small" className={styles.grayout}>
            <FormattedMessage
              id="ReserverteOppgaverTabell.AntallOppgaver"
              values={{ reservertAntall: reserverteOppgaver.length }}
            />
          </BodyShort>
        </HStack>
        {reserverteOppgaver.length === 0 && (
          <BodyShort size="small">
            <FormattedMessage id="ReserverteOppgaverTabell.IngenOppgaver" values={{ i: chunks => <i>{chunks}</i> }} />
          </BodyShort>
        )}
      </VStack>
      {reserverteOppgaver.length > 0 && (
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
                <Table.ColumnHeader />
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
    return notEmpty(a.status.reservertTilTidspunkt) < notEmpty(b.status.reservertTilTidspunkt) ? -1 : 1;
  }

  if (b[orderBy] === undefined || a[orderBy] === undefined || b[orderBy] < a[orderBy]) {
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
