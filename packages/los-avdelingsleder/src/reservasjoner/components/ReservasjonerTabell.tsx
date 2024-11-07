import React, { FunctionComponent, useState, useCallback, useMemo } from 'react';
import { Label, BodyShort, Table, VStack } from '@navikt/ds-react';
import { FormattedMessage } from 'react-intl';
import { getDateAndTime } from '@navikt/ft-utils';
import { PersonGroupIcon, CalendarIcon, XMarkIcon } from '@navikt/aksel-icons';

import { AlleKodeverk } from '@navikt/fp-types';
import { OppgaveReservasjonEndringDatoModal, FlyttReservasjonModal } from '@navikt/fp-los-felles';
import { KodeverkType, getKodeverknavnFraKode } from '@navikt/fp-kodeverk';

import { restApiHooks, RestApiPathsKeys } from '../../data/fplosRestApi';
import Reservasjon from '../../typer/reservasjonTsType';

import styles from './reservasjonerTabell.module.css';

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

  const sorterteReservasjoner = useMemo(
    () =>
      reservasjoner.sort((reservasjon1, reservasjon2) =>
        reservasjon1.reservertAvNavn.localeCompare(reservasjon2.reservertAvNavn),
      ),
    [reservasjoner],
  );

  const { startRequest: endreOppgavereservasjon } = restApiHooks.useRestApiRunner(
    RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON,
  );

  const { startRequest: flyttOppgavereservasjon } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON);

  const {
    startRequest: hentSaksbehandler,
    state: hentSaksbehandlerState,
    data: saksbehandler,
    resetRequestData: resetHentSaksbehandler,
  } = restApiHooks.useRestApiRunner(RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK);

  return (
    <VStack gap="2">
      <Label size="small">
        <FormattedMessage id="ReservasjonerTabell.Reservasjoner" />
      </Label>
      {sorterteReservasjoner.length === 0 && (
        <BodyShort size="small">
          <FormattedMessage id="ReservasjonerTabell.IngenReservasjoner" />
        </BodyShort>
      )}
      {sorterteReservasjoner.length > 0 && (
        <Table>
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Navn" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Saksnr" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.BehandlingType" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.ReservertTil" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Endre" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Flytt" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Slett" />
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorterteReservasjoner.map(reservasjon => (
              <Table.Row key={reservasjon.oppgaveId} shadeOnHover={false}>
                <Table.DataCell>{reservasjon.reservertAvNavn}</Table.DataCell>
                <Table.DataCell>{reservasjon.oppgaveSaksNr}</Table.DataCell>
                <Table.DataCell>
                  {getKodeverknavnFraKode(alleKodeverk, KodeverkType.BEHANDLING_TYPE, reservasjon.behandlingType)}
                </Table.DataCell>
                <Table.DataCell>
                  <FormattedMessage
                    id="ReservasjonerTabell.ReservertTilFormat"
                    values={getDateAndTime(reservasjon.reservertTilTidspunkt)}
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <CalendarIcon
                    className={styles.calendarIcon}
                    onClick={() => showReservasjonEndringDato(reservasjon)}
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <PersonGroupIcon className={styles.flyttIcon} onClick={() => showFlytteModal(reservasjon)} />
                </Table.DataCell>
                <Table.DataCell>
                  <XMarkIcon className={styles.removeIcon} onClick={() => opphevReservasjon(reservasjon.oppgaveId)} />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
      {valgtReservasjon && showReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
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
          closeModal={closeFlytteModal}
          oppgaveId={valgtReservasjon.oppgaveId}
          hentReserverteOppgaver={hentAvdelingensReservasjoner}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          hentSaksbehandler={hentSaksbehandler}
          hentSaksbehandlerState={hentSaksbehandlerState}
          saksbehandler={saksbehandler}
          resetHentSaksbehandler={resetHentSaksbehandler}
        />
      )}
    </VStack>
  );
};

export default ReservasjonerTabell;
