import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowUndoIcon, CalendarIcon, MenuElipsisVerticalIcon, PersonGroupIcon } from '@navikt/aksel-icons';
import { ActionMenu, BodyShort, Button, HStack, Label, Table, TextField, VStack } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';
import { useMutation, useQuery } from '@tanstack/react-query';

import { FlyttReservasjonModal, OppgaveReservasjonEndringDatoModal } from '@navikt/fp-los-felles';
import type { ReservasjonDto } from '@navikt/fp-types';

import {
  endreReservasjon,
  flyttReservasjon,
  flyttReservasjonSaksbehandlerSøk,
  opphevReservasjon,
  reservasjonerForAvdelingOptions,
} from '../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../data/useLosKodeverk';

interface Props {
  valgtAvdelingEnhet: string;
}

export const ReservasjonerTabell = ({ valgtAvdelingEnhet }: Props) => {
  const intl = useIntl();
  const [showReservasjonEndringDatoModal, setShowReservasjonEndringDatoModal] = useState(false);
  const [showFlyttReservasjonModal, setShowFlyttReservasjonModal] = useState(false);
  const [valgtReservasjon, setValgtReservasjon] = useState<ReservasjonDto | undefined>(undefined);
  const [søketekst, setSøketekst] = useState('');

  const behandlingTyper = useLosKodeverk('BehandlingType');

  const { data: reservasjoner, refetch: hentAvdelingensReservasjoner } = useQuery(
    reservasjonerForAvdelingOptions(valgtAvdelingEnhet),
  );

  const sorterteReservasjoner = reservasjoner
    .filter(reservasjon => reservasjon.reservertAvNavn.toLowerCase().includes(søketekst.toLowerCase()))
    .toSorted((reservasjon1, reservasjon2) => reservasjon1.reservertAvNavn.localeCompare(reservasjon2.reservertAvNavn));

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

  const showReservasjonEndringDato = (reservasjon: ReservasjonDto): void => {
    setShowReservasjonEndringDatoModal(true);
    setValgtReservasjon(reservasjon);
  };

  const showFlytteModal = (reservasjon: ReservasjonDto): void => {
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
    void hentAvdelingensReservasjoner();
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
    void hentAvdelingensReservasjoner();
  };

  return (
    <VStack gap="space-8">
      <Label size="small">
        <FormattedMessage id="ReservasjonerTabell.Reservasjoner" />
      </Label>
      <HStack>
        <TextField
          hideLabel
          label={<FormattedMessage id="ReservasjonerTabell.Sok.PlaceHolder" />}
          placeholder={intl.formatMessage({ id: 'ReservasjonerTabell.Sok.PlaceHolder' })}
          value={søketekst}
          onChange={e => setSøketekst(e.target.value)}
          size="small"
          htmlSize={30}
        />
      </HStack>
      {sorterteReservasjoner.length === 0 && (
        <BodyShort size="small">
          <FormattedMessage id="ReservasjonerTabell.IngenReservasjoner" />
        </BodyShort>
      )}
      {sorterteReservasjoner.length > 0 && (
        <Table zebraStripes size="small">
          <Table.Header>
            <Table.Row>
              <Table.ColumnHeader>
                <FormattedMessage id="Label.Navn" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Saksnr" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="Label.Behandlingstype" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.ReservertTil" />
              </Table.ColumnHeader>
              <Table.ColumnHeader />
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
                  <DateTimeLabel dateTimeString={reservasjon.reservertTilTidspunkt} />
                </Table.DataCell>
                <Table.DataCell>
                  <ActionMenu>
                    <ActionMenu.Trigger>
                      <Button
                        data-color="neutral"
                        variant="tertiary"
                        icon={
                          <MenuElipsisVerticalIcon title={intl.formatMessage({ id: 'ReservasjonerTabell.Meny' })} />
                        }
                        size="small"
                      />
                    </ActionMenu.Trigger>
                    <ActionMenu.Content>
                      <ActionMenu.Group
                        label={intl.formatMessage(
                          { id: 'ReservasjonerTabell.MenyLabel' },
                          { saksnummer: reservasjon.oppgaveSaksNr },
                        )}
                      >
                        <ActionMenu.Item
                          icon={<CalendarIcon aria-hidden />}
                          onSelect={() => showReservasjonEndringDato(reservasjon)}
                        >
                          <FormattedMessage id="ReservasjonerTabell.Endre" />
                        </ActionMenu.Item>
                        <ActionMenu.Item
                          icon={<PersonGroupIcon aria-hidden />}
                          onSelect={() => showFlytteModal(reservasjon)}
                        >
                          <FormattedMessage id="ReservasjonerTabell.Flytt" />
                        </ActionMenu.Item>
                        <ActionMenu.Item
                          icon={<ArrowUndoIcon aria-hidden />}
                          onSelect={() => opphevOppgaveReservasjon({ oppgaveId: reservasjon.oppgaveId })}
                        >
                          <FormattedMessage id="ReservasjonerTabell.LeggTilbake" />
                        </ActionMenu.Item>
                      </ActionMenu.Group>
                    </ActionMenu.Content>
                  </ActionMenu>
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
