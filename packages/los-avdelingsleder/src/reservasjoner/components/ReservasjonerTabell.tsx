import React, {
  FunctionComponent, useState, useCallback, useMemo,
} from 'react';
import { Label, BodyShort } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { AlleKodeverk } from '@navikt/ft-types';
import { KodeverkType } from '@navikt/ft-kodeverk';
import {
  Table, TableRow, TableColumn, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { getDateAndTime, getKodeverknavnFraKode } from '@navikt/ft-utils';

import removeIcon from '@fpsak-frontend/assets/images/remove.svg';
import gruppeHoverUrl from '@fpsak-frontend/assets/images/gruppe_hover.svg';
import gruppeUrl from '@fpsak-frontend/assets/images/gruppe.svg';

import FlyttReservasjonModal from './flytt/FlyttReservasjonModal';
import OppgaveReservasjonEndringDatoModal from './endre/OppgaveReservasjonEndringDatoModal';
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
        />
      )}
      {valgtReservasjon && showFlyttReservasjonModal && (
        <FlyttReservasjonModal
          showModal={showFlyttReservasjonModal}
          closeModal={closeFlytteModal}
          oppgaveId={valgtReservasjon.oppgaveId}
          toggleMenu={closeFlytteModal}
          hentReserverteOppgaver={hentAvdelingensReservasjoner}
        />
      )}
    </>
  );
};

export default ReservasjonerTabell;
