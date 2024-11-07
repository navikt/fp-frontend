import { ChatElipsisIcon } from '@navikt/aksel-icons';
import { BodyShort, HStack, Button, Label, Popover, SortState, Table, VStack } from '@navikt/ds-react';
import { getKodeverknavnFraKode, KodeverkType } from '@navikt/fp-kodeverk';
import { Oppgave, OppgaveStatus } from '@navikt/fp-los-felles';
import { TimeoutError } from '@navikt/fp-rest-api';
import { DateLabel, DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';
import React, { useEffect, useRef, useState, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  requestApi,
  RestApiGlobalStatePathsKeys,
  restApiHooks,
  RestApiPathsKeys,
} from '../../data/fplosSaksbehandlerRestApi';
import { BehandlingPollingTimoutModal } from '../timeoutModal/BehandlingPollingTimoutModal';

import { OppgaveHandlingerMenu } from './menu/OppgaveHandlingerMenu';
import styles from './oppgaverTabell.module.css';

const EMPTY_ARRAY: Oppgave[] = [];

type TableHeaders =
  | 'navn'
  | 'saksnummer'
  | 'behandlingstype'
  | 'opprettetTidspunkt'
  | 'behandlingsfrist'
  | 'reservertTilTidspunkt';

type OppgaveMedReservertIndikator = Oppgave & { underBehandling: boolean; reservertTilTidspunkt: string | undefined };

const createFlyttetReservasjonPopover = (oppgaveStatus: OppgaveStatus): ReactNode | undefined => {
  const { flyttetReservasjon } = oppgaveStatus;
  if (!flyttetReservasjon) {
    return undefined;
  }
  const datoOgTid = getDateAndTime(flyttetReservasjon.tidspunkt);

  return (
    <VStack gap="2">
      <VStack gap="1">
        <Label size="small">
          <FormattedMessage id="OppgaverTabell.OverfortReservasjonHeader" />
        </Label>
        <BodyShort size="small">
          <FormattedMessage
            id="OppgaverTabell.OverfortReservasjonBody"
            values={{
              dato: datoOgTid?.date,
              tid: datoOgTid?.time,
              uid: flyttetReservasjon.uid,
              navn: flyttetReservasjon.navn,
            }}
          />
        </BodyShort>
      </VStack>
      <VStack gap="1">
        <Label size="small">
          <FormattedMessage id="OppgaverTabell.OverfortReservasjonBegrunnelse" />
        </Label>
        <BodyShort size="small">{flyttetReservasjon.begrunnelse}</BodyShort>
      </VStack>
    </VStack>
  );
};

const NotatKnapp = ({ oppgave }: { oppgave: Oppgave }) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [openState, setOpenState] = useState(false);
  return (
    <>
      <Button
        ref={buttonRef}
        onClick={() => setOpenState(!openState)}
        aria-expanded={openState}
        icon={<ChatElipsisIcon className={styles.image} aria-hidden />}
        variant="tertiary-neutral"
      ></Button>
      <Popover open={openState} onClose={() => setOpenState(false)} anchorEl={buttonRef.current}>
        <Popover.Content>{createFlyttetReservasjonPopover(oppgave.status)}</Popover.Content>
      </Popover>
    </>
  );
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
  doPolling?: boolean;
}

export const OppgaverTabell = ({ reserverOppgave, antallOppgaver = 0, valgtSakslisteId, doPolling = true }: Props) => {
  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  const [enableTableEvents, setEnableTableEvents] = useState(true);

  const { startRequest: hentReserverteOppgaver, data: reserverteOppgaver = EMPTY_ARRAY } =
    restApiHooks.useRestApiRunner(RestApiPathsKeys.RESERVERTE_OPPGAVER);

  const {
    startRequest: hentOppgaverTilBehandling,
    data: oppgaverTilBehandling = EMPTY_ARRAY,
    error: hentOppgaverTilBehandlingError,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING);

  const fetchSakslisteOppgaverPolling = (keepData: boolean, sakslisteId: number, oppgaveIder?: string) => {
    hentReserverteOppgaver(undefined, true);
    hentOppgaverTilBehandling(oppgaveIder ? { sakslisteId, oppgaveIder } : { sakslisteId }, keepData)
      .then(response =>
        !response || typeof response === 'string' || !doPolling
          ? Promise.resolve()
          : fetchSakslisteOppgaverPolling(true, sakslisteId, response.map(o => o.id).join(',')),
      )
      .catch(err => console.log(err));
  };

  useEffect(() => {
    requestApi.cancelRequest(RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name);
    fetchSakslisteOppgaverPolling(false, valgtSakslisteId);
  }, [valgtSakslisteId]);

  useEffect(
    () => () => {
      requestApi.cancelRequest(RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name);
    },
    [],
  );

  const ref = useRef<Record<number, HTMLDivElement | null>>({});
  const refPopover = useRef<Record<number, HTMLDivElement | null>>({});

  const goToFagsak = (oppgave: Oppgave) => {
    if (
      ref.current &&
      // @ts-ignore Fiks
      Object.keys(ref.current).some(key => ref.current[key] && ref.current[key].contains(event.target))
    ) {
      return;
    }
    if (
      refPopover.current &&
      Object.keys(refPopover.current).some(
        // @ts-ignore Fiks
        key => refPopover.current[key] && refPopover.current[key].contains(event.target),
      )
    ) {
      return;
    }
    if (oppgave) {
      reserverOppgave(oppgave);
    }
  };

  const alleOppgaver = slaSammenOgMarkerReserverte(reserverteOppgaver, oppgaverTilBehandling);

  const [sort, setSort] = useState<SortState | undefined>({ orderBy: 'reservertTilTidspunkt', direction: 'ascending' });
  const handleSort = (sortKey: TableHeaders) => {
    setSort(
      sort && sortKey === sort.orderBy && sort.direction === 'descending'
        ? undefined
        : {
            orderBy: sortKey,
            direction: sort && sortKey === sort.orderBy && sort.direction === 'ascending' ? 'descending' : 'ascending',
          },
    );
  };

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

  const sortedData = alleOppgaver.slice().sort((a, b) => {
    if (sort) {
      return sort.direction === 'ascending'
        ? comparator(b, a, sort.orderBy as TableHeaders)
        : comparator(a, b, sort.orderBy as TableHeaders);
    }
    return 1;
  });

  return (
    <>
      {hentOppgaverTilBehandlingError instanceof TimeoutError && <BehandlingPollingTimoutModal />}
      <VStack gap="2" className={styles.headerPadding}>
        <HStack gap="2">
          <Label size="small">
            <FormattedMessage id="OppgaverTabell.DineNesteSaker" />
          </Label>
          <BodyShort size="small" className={styles.grayout}>
            <FormattedMessage id="OppgaverTabell.DineNesteSakerAntall" values={{ antall: antallOppgaver }} />
          </BodyShort>
        </HStack>
        {alleOppgaver.length === 0 && (
          <>
            <BodyShort size="small">
              <FormattedMessage id="OppgaverTabell.IngenOppgaver" values={{ i: (chunks: any) => <i>{chunks}</i> }} />
            </BodyShort>
          </>
        )}
      </VStack>
      {alleOppgaver.length > 0 && (
        <>
          <Table sort={sort} onSortChange={sortKey => handleSort(sortKey as TableHeaders)}>
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
              {sortedData.map(oppgave => (
                <Table.Row
                  key={oppgave.id}
                  onMouseDown={enableTableEvents ? () => goToFagsak(oppgave) : undefined}
                  onKeyDown={enableTableEvents ? () => goToFagsak(oppgave) : undefined}
                  className={oppgave.underBehandling ? styles.isUnderBehandling : undefined}
                >
                  <Table.DataCell>{oppgave.navn ? `${oppgave.navn} ${oppgave.personnummer}` : '<navn>'}</Table.DataCell>
                  <Table.DataCell>{oppgave.saksnummer}</Table.DataCell>
                  <Table.DataCell>
                    {getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, oppgave.behandlingstype)}
                  </Table.DataCell>
                  <Table.DataCell>
                    {oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}
                  </Table.DataCell>
                  <Table.DataCell>
                    {oppgave.behandlingsfrist && <DateLabel dateString={oppgave.behandlingsfrist} />}
                  </Table.DataCell>
                  <Table.DataCell>
                    {oppgave.reservertTilTidspunkt && (
                      <DateTimeLabel dateTimeString={oppgave.reservertTilTidspunkt} separator="kl" />
                    )}
                  </Table.DataCell>
                  <Table.DataCell>
                    {oppgave.status.flyttetReservasjon && (
                      <div
                        ref={el => {
                          refPopover.current = { ...refPopover.current, [oppgave.id]: el };
                        }}
                      >
                        <NotatKnapp oppgave={oppgave} />
                      </div>
                    )}
                  </Table.DataCell>
                  <Table.DataCell>
                    {oppgave.underBehandling && (
                      <div
                        ref={el => {
                          ref.current = { ...ref.current, [oppgave.id]: el };
                        }}
                      >
                        <OppgaveHandlingerMenu
                          oppgave={oppgave}
                          hentReserverteOppgaver={hentReserverteOppgaver}
                          setEnableTableEvents={setEnableTableEvents}
                        />
                      </div>
                    )}
                  </Table.DataCell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table>
        </>
      )}
    </>
  );
};
