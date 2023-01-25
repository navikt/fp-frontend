import React, {
  FunctionComponent, useState, useCallback, useMemo,
} from 'react';
import { Label, BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import {
  Table, TableRow, TableColumn, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { getDateAndTime } from '@navikt/ft-utils';

import { AlleKodeverk } from '@navikt/fp-types';
import { OppgaveReservasjonEndringDatoModal, FlyttReservasjonModal } from '@navikt/fp-los-felles';
import KodeverkType from '@navikt/fp-kodeverk/src/kodeverkTyper';
import { getKodeverknavnFraKode } from '@navikt/fp-kodeverk/src/kodeverkUtils';
import removeIcon from '@navikt/fp-assets/images/remove.svg';
import gruppeHoverUrl from '@navikt/fp-assets/images/gruppe_hover.svg';
import gruppeUrl from '@navikt/fp-assets/images/gruppe.svg';

import { restApiHooks, RestApiPathsKeys } from '../../data/fplosRestApi';
import Reservasjon from '../../typer/reservasjonTsType';
import CalendarToggleButton from './CalendarToggleButton';

import styles from './reservasjonerTabell.less';

const headerTextCodes = [
  'ReservasjonerTabell.Navn',
  'ReservasjonerTabell.Saksnr',
  'ReservasjonerTabell.BehandlingType',
  'ReservasjonerTabell.ReservertTil',
  'ReservasjonerTabell.Endre',
  'ReservasjonerTabell.Flytt',
  'ReservasjonerTabell.Slett',
];

interface OwnProps {
  reservasjoner: Reservasjon[];
  opphevReservasjon: (oppgaveId: number) => Promise<string>;
  hentAvdelingensReservasjoner: () => void;
  alleKodeverk: AlleKodeverk;
}

const ReservasjonerTabell: FunctionComponent<OwnProps> = ({
  reservasjoner,
  opphevReservasjon,
  hentAvdelingensReservasjoner,
  alleKodeverk,
}) => {
  const [showReservasjonEndringDatoModal, setShowReservasjonEndringDatoModal] = useState(false);
  const [showFlyttReservasjonModal, setShowFlyttReservasjonModal] = useState(false);
  const [valgtReservasjon, setValgtReservasjon] = useState<Reservasjon | undefined>(undefined);

  const closeReservasjonEndringDatoModal = useCallback(() => {
    setShowReservasjonEndringDatoModal(false);
  }, []);

  const showReservasjonEndringDato = useCallback((reservasjon: Reservasjon): void => {
    setShowReservasjonEndringDatoModal(true);
    setValgtReservasjon(reservasjon);
  }, []);

  const showFlytteModal = useCallback((reservasjon: Reservasjon): void => {
    setShowFlyttReservasjonModal(true);
    setValgtReservasjon(reservasjon);
  }, []);

  const closeFlytteModal = useCallback(() => {
    setShowFlyttReservasjonModal(false);
  }, []);

  const sorterteReservasjoner = useMemo(() => reservasjoner
    .sort((reservasjon1, reservasjon2) => reservasjon1.reservertAvNavn.localeCompare(reservasjon2.reservertAvNavn)),
  [reservasjoner]);

  const { startRequest: endreOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON);

  const { startRequest: flyttOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON);

  const {
    startRequest: hentSaksbehandler, state: hentSaksbehandlerState, data: saksbehandler, resetRequestData: resetHentSaksbehandler,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);

  return (
    <>
      <Label size="small"><FormattedMessage id="ReservasjonerTabell.Reservasjoner" /></Label>
      {sorterteReservasjoner.length === 0 && (
        <>
          <VerticalSpacer eightPx />
          <BodyShort size="small"><FormattedMessage id="ReservasjonerTabell.IngenReservasjoner" /></BodyShort>
          <VerticalSpacer eightPx />
        </>
      )}
      {sorterteReservasjoner.length > 0 && (
        <Table headerTextCodes={headerTextCodes} noHover>
          {sorterteReservasjoner.map((reservasjon) => (
            <TableRow key={reservasjon.oppgaveId}>
              <TableColumn>{reservasjon.reservertAvNavn}</TableColumn>
              <TableColumn>{reservasjon.oppgaveSaksNr}</TableColumn>
              <TableColumn>{getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, reservasjon.behandlingType)}</TableColumn>
              <TableColumn>
                <FormattedMessage
                  id="ReservasjonerTabell.ReservertTilFormat"
                  values={getDateAndTime(reservasjon.reservertTilTidspunkt)}
                />
              </TableColumn>
              <TableColumn>
                <CalendarToggleButton
                  toggleShowCalendar={() => showReservasjonEndringDato(reservasjon)}
                  className={styles.calendarToggleButton}
                />
              </TableColumn>
              <TableColumn>
                <Image
                  src={gruppeUrl}
                  srcHover={gruppeHoverUrl}
                  onMouseDown={() => showFlytteModal(reservasjon)}
                />
              </TableColumn>
              <TableColumn>
                <Image
                  src={removeIcon}
                  className={styles.removeImage}
                  onMouseDown={() => opphevReservasjon(reservasjon.oppgaveId)}
                />
              </TableColumn>
            </TableRow>
          ))}
        </Table>
      )}
      {valgtReservasjon && showReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          showModal={showReservasjonEndringDatoModal}
          closeModal={closeReservasjonEndringDatoModal}
          reserverTilDefault={valgtReservasjon.reservertTilTidspunkt}
          endreReserverasjonState={closeReservasjonEndringDatoModal}
          hentReserverteOppgaver={hentAvdelingensReservasjoner}
          oppgaveId={valgtReservasjon.oppgaveId}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {valgtReservasjon && showFlyttReservasjonModal && (
        <FlyttReservasjonModal
          showModal={showFlyttReservasjonModal}
          closeModal={closeFlytteModal}
          oppgaveId={valgtReservasjon.oppgaveId}
          toggleMenu={closeFlytteModal}
          hentReserverteOppgaver={hentAvdelingensReservasjoner}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          hentSaksbehandler={hentSaksbehandler}
          hentSaksbehandlerState={hentSaksbehandlerState}
          saksbehandler={saksbehandler}
          resetHentSaksbehandler={resetHentSaksbehandler}
        />
      )}
    </>
  );
};

export default ReservasjonerTabell;
