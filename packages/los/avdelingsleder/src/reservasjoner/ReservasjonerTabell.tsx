import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { CalendarIcon, PersonGroupIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Label, Table, VStack } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { KodeverkLosType } from '@navikt/fp-kodeverk';
import { FlyttReservasjonModal, OppgaveReservasjonEndringDatoModal } from '@navikt/fp-los-felles';

import {
  endreReservasjon,
  flyttReservasjon,
  flyttReservasjonSaksbehandlerSøk,
  opphevReservasjon,
  reservasjonerForAvdelingOptions,
} from '../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../data/useLosKodeverk';
import type { Reservasjon } from '../typer/reservasjonTsType';

import styles from './reservasjonerTabell.module.css';

interface Props {
  valgtAvdelingEnhet: string;
}

export const ReservasjonerTabell = ({ valgtAvdelingEnhet }: Props) => {
  const [showReservasjonEndringDatoModal, setShowReservasjonEndringDatoModal] = useState(false);
  const [showFlyttReservasjonModal, setShowFlyttReservasjonModal] = useState(false);
  const [valgtReservasjon, setValgtReservasjon] = useState<Reservasjon | undefined>(undefined);

  const behandlingTyper = useLosKodeverk(KodeverkLosType.BEHANDLING_TYPE);

  const { data: reservasjoner, refetch: hentAvdelingensReservasjoner } = useQuery(
    reservasjonerForAvdelingOptions(valgtAvdelingEnhet),
  );

  const sorterteReservasjoner = reservasjoner.toSorted((reservasjon1, reservasjon2) =>
    reservasjon1.reservertAvNavn.localeCompare(reservasjon2.reservertAvNavn),
  );

  const { mutate: opphevOppgaveReservasjon } = useMutation({
    mutationFn: (valuesToStore: { oppgaveId: number }) => opphevReservasjon(valuesToStore.oppgaveId),
    onSuccess: () => hentAvdelingensReservasjoner(),
  });

  const {
    mutateAsync: hentSaksbehandler,
    data: saksbehandler,
    status: hentSaksbehandlerStatus,
    reset: resetHentSaksbehandler,
  } = useMutation({
    mutationFn: (valuesToStore: { brukerIdent: string }) => flyttReservasjonSaksbehandlerSøk(valuesToStore.brukerIdent),
  });

  const showReservasjonEndringDato = (reservasjon: Reservasjon): void => {
    setShowReservasjonEndringDatoModal(true);
    setValgtReservasjon(reservasjon);
  };

  const showFlytteModal = (reservasjon: Reservasjon): void => {
    setShowFlyttReservasjonModal(true);
    setValgtReservasjon(reservasjon);
  };

  const { mutateAsync: endreOppgavereservasjonRequest } = useMutation({
    mutationFn: (valuesToStore: { oppgaveId: number; reserverTil: string }) =>
      endreReservasjon(valuesToStore.oppgaveId, valuesToStore.reserverTil),
  });

  const endreOppgavereservasjon = async (reserverTil: string) => {
    if (!valgtReservasjon) {
      throw new Error('Reservasjon må være valgt');
    }
    await endreOppgavereservasjonRequest({ oppgaveId: valgtReservasjon.oppgaveId, reserverTil });
    setShowReservasjonEndringDatoModal(false);
    hentAvdelingensReservasjoner();
  };

  const { mutateAsync: flyttOppgavereservasjonRequest } = useMutation({
    mutationFn: (valuesToStore: { oppgaveId: number; brukerIdent: string; begrunnelse: string }) =>
      flyttReservasjon(valuesToStore.oppgaveId, valuesToStore.brukerIdent, valuesToStore.begrunnelse),
  });

  const flyttOppgavereservasjon = async (params: { brukerIdent: string; begrunnelse: string }) => {
    if (!valgtReservasjon) {
      throw new Error('Reservasjon må være valgt');
    }
    await flyttOppgavereservasjonRequest({ oppgaveId: valgtReservasjon.oppgaveId, ...params });
    hentAvdelingensReservasjoner();
  };

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
                  {behandlingTyper.find(t => t.kode === reservasjon.behandlingType)?.navn}
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
                  <XMarkIcon
                    className={styles.removeIcon}
                    onClick={() => opphevOppgaveReservasjon({ oppgaveId: reservasjon.oppgaveId })}
                  />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}
      {valgtReservasjon && showReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          closeModal={() => setShowReservasjonEndringDatoModal(false)}
          reserverTilDefault={valgtReservasjon.reservertTilTidspunkt}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {valgtReservasjon && showFlyttReservasjonModal && (
        <FlyttReservasjonModal
          closeModal={() => setShowFlyttReservasjonModal(false)}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          hentSaksbehandler={(brukerIdent: string) => hentSaksbehandler({ brukerIdent })}
          hentSaksbehandlerIsPending={hentSaksbehandlerStatus === 'pending'}
          hentSaksbehandlerIsSuccess={hentSaksbehandlerStatus === 'success'}
          saksbehandler={saksbehandler}
          resetHentSaksbehandler={resetHentSaksbehandler}
        />
      )}
    </VStack>
  );
};
