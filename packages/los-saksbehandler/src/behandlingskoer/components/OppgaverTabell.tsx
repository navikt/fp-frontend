import React, {
  useState, useRef, FunctionComponent, useCallback, useMemo, useEffect,
} from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Label } from '@navikt/ds-react';
import { Next } from '@navikt/ds-icons';
import { getDateAndTime } from '@navikt/ft-utils';
import {
  Image, VerticalSpacer, Table, TableRow, TableColumn, DateLabel,
} from '@navikt/ft-ui-komponenter';

import KodeverkType from '@fpsak-frontend/kodeverk/src/kodeverkTyper';
import { getKodeverknavnFraKode } from '@fpsak-frontend/kodeverk/src/kodeverkUtils';
import { TimeoutError } from '@fpsak-frontend/rest-api';
import menuIconBlueUrl from '@fpsak-frontend/assets/images/ic-menu-18px_blue.svg';
import menuIconBlackUrl from '@fpsak-frontend/assets/images/ic-menu-18px_black.svg';
import bubbletextUrl from '@fpsak-frontend/assets/images/bubbletext.svg';
import bubbletextFilledUrl from '@fpsak-frontend/assets/images/bubbletext_filled.svg';
import { Oppgave, OppgaveStatus } from '@fpsak-frontend/los-felles';

import BehandlingPollingTimoutModal from './BehandlingPollingTimoutModal';
import OppgaveHandlingerMenu from './menu/OppgaveHandlingerMenu';
import {
  requestApi, RestApiPathsKeys, RestApiGlobalStatePathsKeys, restApiHooks,
} from '../../data/fplosSaksbehandlerRestApi';

import styles from './oppgaverTabell.less';

const headerTextCodes = [
  'OppgaverTabell.Soker',
  'OppgaverTabell.Behandlingstype',
  'OppgaverTabell.BehandlingOpprettet',
  'OppgaverTabell.FristForBehandling',
  'EMPTY_1',
  'EMPTY_2',
];

const EMPTY_ARRAY: Oppgave[] = [];

type OppgaveMedReservertIndikator = Oppgave & { underBehandling?: boolean };

const slaSammenOgMarkerReserverte = (reserverteOppgaver: Oppgave[], oppgaverTilBehandling: Oppgave[]): OppgaveMedReservertIndikator[] => {
  const markedAsUnderBehandling = reserverteOppgaver
    .filter((reservertOppgave) => !oppgaverTilBehandling.some((oppgave) => oppgave.id === reservertOppgave.id))
    .map((f) => ({
      ...f,
      underBehandling: true,
    }));
  const notMarked = oppgaverTilBehandling.map((f) => ({
    ...f,
    underBehandling: false,
  }));

  return markedAsUnderBehandling.concat(notMarked.slice(0, 3));
};

const getToggleMenuEvent = (
  oppgave: OppgaveMedReservertIndikator,
  toggleMenu: (valgtOppgave: Oppgave) => void,
) => (oppgave.underBehandling ? () => toggleMenu(oppgave) : undefined);

interface OwnProps {
  reserverOppgave: (oppgave: Oppgave) => void;
  antallOppgaver?: number;
  valgtSakslisteId: number;
  doPolling?: boolean;
}

/**
 * OppgaverTabell
 */
const OppgaverTabell: FunctionComponent<OwnProps> = ({
  reserverOppgave,
  antallOppgaver = 0,
  valgtSakslisteId,
  doPolling = true,
}) => {
  const intl = useIntl();

  const [showMenu, setShowMenu] = useState(false);
  const [valgtOppgaveId, setValgtOppgaveId] = useState<number>();
  const [offset, setOffset] = useState({
    left: 0,
    top: 0,
  });

  const alleKodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);

  const { startRequest: forlengOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON);

  const { startRequest: hentReserverteOppgaver, data: reserverteOppgaver = EMPTY_ARRAY } = restApiHooks
    .useRestApiRunner(RestApiPathsKeys.RESERVERTE_OPPGAVER);

  const {
    startRequest: hentOppgaverTilBehandling, data: oppgaverTilBehandling = EMPTY_ARRAY, error: hentOppgaverTilBehandlingError,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING);

  const fetchSakslisteOppgaverPolling = (keepData: boolean, sakslisteId: number, oppgaveIder?: string) => {
    hentReserverteOppgaver(undefined, true);
    hentOppgaverTilBehandling(oppgaveIder ? { sakslisteId, oppgaveIder } : { sakslisteId }, keepData)
      .then((response) => (!response || typeof response === 'string' || !doPolling
        ? Promise.resolve()
        : fetchSakslisteOppgaverPolling(true, sakslisteId, response.map((o) => o.id).join(','))))
      .catch(() => undefined);
  };

  useEffect(() => {
    requestApi.cancelRequest(RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name);
    fetchSakslisteOppgaverPolling(false, valgtSakslisteId);
  }, [valgtSakslisteId]);

  useEffect(() => () => {
    requestApi.cancelRequest(RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING.name);
  }, []);

  const forlengOppgaveReservasjonFn = useCallback((oppgaveId: number): Promise<any> => forlengOppgavereservasjon({ oppgaveId })
    .then(() => hentReserverteOppgaver(undefined, true)), []);

  const ref = useRef<Record<number, HTMLDivElement | null>>({});

  const goToFagsak = useCallback((event: React.MouseEvent | React.KeyboardEvent, _id?: number, oppgave?: Oppgave) => {
    // @ts-ignore Fiks
    if (ref.current && Object.keys(ref.current).some((key) => ref.current[key] && ref.current[key].contains(event.target))) {
      return;
    }
    if (oppgave) {
      reserverOppgave(oppgave);
    }
  }, [ref.current]);

  const toggleMenu = useCallback((valgtOppgave: Oppgave) => {
    const newOffset = ref.current[valgtOppgave.id]?.getBoundingClientRect();
    setShowMenu(!showMenu);
    setValgtOppgaveId(valgtOppgave.id);
    if (newOffset) {
      setOffset({ top: newOffset.top, left: newOffset.left });
    }
  }, [ref.current, showMenu]);

  const createTooltip = useCallback((oppgaveStatus: OppgaveStatus) => {
    const { flyttetReservasjon } = oppgaveStatus;
    if (!flyttetReservasjon) {
      return undefined;
    }
    const datoOgTid = getDateAndTime(flyttetReservasjon.tidspunkt);
    const textValues = {
      dato: datoOgTid?.date,
      tid: datoOgTid?.time,
      uid: flyttetReservasjon.uid,
      navn: flyttetReservasjon.navn,
      beskrivelse: flyttetReservasjon.begrunnelse,
      br: <br />,
    };
    return (
      <BodyShort size="small"><FormattedMessage id="OppgaverTabell.OverfortReservasjonTooltip" values={textValues} /></BodyShort>
    );
  }, []);

  const alleOppgaver = useMemo(() => slaSammenOgMarkerReserverte(reserverteOppgaver, oppgaverTilBehandling), [reserverteOppgaver, oppgaverTilBehandling]);
  const valgtOppgave = reserverteOppgaver.find((o) => o.id === valgtOppgaveId);

  return (
    <>
      {hentOppgaverTilBehandlingError instanceof TimeoutError
        && <BehandlingPollingTimoutModal />}
      <Label size="small"><FormattedMessage id="OppgaverTabell.DineNesteSaker" values={{ antall: antallOppgaver }} /></Label>
      {alleOppgaver.length === 0 && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small"><FormattedMessage id="OppgaverTabell.IngenOppgaver" /></BodyShort>
        </>
      )}
      {alleOppgaver.length > 0 && (
        <>
          <Table headerTextCodes={headerTextCodes}>
            {alleOppgaver.map((oppgave) => (
              <TableRow<number, Oppgave>
                key={oppgave.id}
                onMouseDown={goToFagsak}
                onKeyDown={goToFagsak}
                className={oppgave.underBehandling ? styles.isUnderBehandling : undefined}
                model={oppgave}
              >
                <TableColumn>{oppgave.navn ? `${oppgave.navn} ${oppgave.personnummer}` : '<navn>'}</TableColumn>
                <TableColumn>{getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, oppgave.behandlingstype)}</TableColumn>
                <TableColumn>{oppgave.opprettetTidspunkt && <DateLabel dateString={oppgave.opprettetTidspunkt} />}</TableColumn>
                <TableColumn>{oppgave.behandlingsfrist && <DateLabel dateString={oppgave.behandlingsfrist} />}</TableColumn>
                <TableColumn>
                  {oppgave.status.flyttetReservasjon && (
                  <Image
                    src={bubbletextUrl}
                    srcHover={bubbletextFilledUrl}
                    alt={intl.formatMessage({ id: 'OppgaverTabell.OverfortReservasjon' })}
                    tooltip={createTooltip(oppgave.status)}
                    alignTooltipLeft
                  />
                  )}
                </TableColumn>
                <TableColumn className={oppgave.underBehandling ? styles.noPadding : undefined}>
                  {!oppgave.underBehandling && <Next /> }
                  {oppgave.underBehandling && (
                    <div ref={(el) => { ref.current = { ...ref.current, [oppgave.id]: el }; }}>
                      <Image
                        className={styles.image}
                        src={menuIconBlackUrl}
                        srcHover={menuIconBlueUrl}
                        alt={intl.formatMessage({ id: 'OppgaverTabell.OppgaveHandlinger' })}
                        onMouseDown={getToggleMenuEvent(oppgave, toggleMenu)}
                        onKeyDown={getToggleMenuEvent(oppgave, toggleMenu)}
                      />
                    </div>
                  ) }
                </TableColumn>
              </TableRow>
            ))}
          </Table>
          {showMenu && valgtOppgaveId && valgtOppgave && (
            <OppgaveHandlingerMenu
              imageNode={ref.current[valgtOppgaveId]}
              toggleMenu={toggleMenu}
              offset={offset}
              oppgave={valgtOppgave}
              forlengOppgaveReservasjon={forlengOppgaveReservasjonFn}
              hentReserverteOppgaver={hentReserverteOppgaver}
            />
          )}
        </>
      )}
    </>
  );
};

export default OppgaverTabell;
