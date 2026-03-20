import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { PersonGroupIcon, XMarkIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Table, TextField, VStack } from '@navikt/ds-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { EndreReservasjonDato, FlyttReservasjonModal, OppgaveLabels } from '@navikt/fp-los-felles';
import type { AvdelingReservasjonDto } from '@navikt/fp-types';

import {
  endreReservasjon,
  flyttReservasjon,
  LosUrl,
  opphevReservasjon,
  reservasjonerForAvdelingOptions,
  saksbehandlareForAvdelingOptions,
} from '../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../data/useLosKodeverk';

interface Props {
  valgtAvdelingEnhet: string;
}

export const ReservasjonerTabell = ({ valgtAvdelingEnhet }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const [showFlyttReservasjonModal, setShowFlyttReservasjonModal] = useState(false);
  const [valgtReservasjon, setValgtReservasjon] = useState<AvdelingReservasjonDto | undefined>(undefined);
  const [søketekst, setSøketekst] = useState('');

  const { data: reservasjoner } = useQuery(reservasjonerForAvdelingOptions(valgtAvdelingEnhet));

  const sorterteReservasjoner = reservasjoner
    .filter(reservasjon => reservasjon.reservertAvNavn.toLowerCase().includes(søketekst.toLowerCase()))
    .toSorted((reservasjon1, reservasjon2) => reservasjon1.reservertAvNavn.localeCompare(reservasjon2.reservertAvNavn));

  const { mutate: opphevOppgaveReservasjon } = useMutation({
    mutationFn: (valuesToStore: { oppgaveId: number }) => opphevReservasjon(valuesToStore.oppgaveId),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [LosUrl.RESERVASJONER_FOR_AVDELING, valgtAvdelingEnhet] });
    },
  });

  const { data: avdelingensSaksbehandlere, isPending: isLoadingAvdelingensSaksbehandlere } = useQuery(
    saksbehandlareForAvdelingOptions(valgtAvdelingEnhet),
  );

  const showFlytteModal = (reservasjon: AvdelingReservasjonDto): void => {
    setValgtReservasjon(reservasjon);
    setShowFlyttReservasjonModal(true);
  };

  const { mutateAsync: endreOppgaveReservasjonAsync } = useMutation({
    mutationFn: ({ oppgaveId, reserverTil }: { oppgaveId: number; reserverTil: string }) =>
      endreReservasjon(oppgaveId, reserverTil),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [LosUrl.RESERVASJONER_FOR_AVDELING, valgtAvdelingEnhet] });
    },
  });

  const { mutateAsync: flyttOppgavereservasjonRequest } = useMutation({
    mutationFn: (valuesToStore: { oppgaveId: number; brukerIdent: string; begrunnelse: string }) =>
      flyttReservasjon(valuesToStore.oppgaveId, valuesToStore.brukerIdent, valuesToStore.begrunnelse),
    onSuccess: () => {
      void queryClient.invalidateQueries({ queryKey: [LosUrl.RESERVASJONER_FOR_AVDELING, valgtAvdelingEnhet] });
      setShowFlyttReservasjonModal(false);
    },
  });

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
                <FormattedMessage id="ReservasjonerTabell.Egenskaper" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.ReservertUt" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="ReservasjonerTabell.Flytt" />
              </Table.ColumnHeader>
              <Table.ColumnHeader>
                <FormattedMessage id="Label.Slett" />
              </Table.ColumnHeader>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {sorterteReservasjoner.map(reservasjon => (
              <Table.Row key={reservasjon.oppgaveId} shadeOnHover={false}>
                <Table.DataCell>{reservasjon.reservertAvNavn}</Table.DataCell>
                <Table.DataCell>{reservasjon.oppgaveSaksNr}</Table.DataCell>
                <Table.DataCell>
                  <OppgaveLabels
                    behandlingType={reservasjon.behandlingType}
                    fagsakYtelseType={reservasjon.ytelseType}
                    kriterier={reservasjon.andreKriterier}
                    hentKodeverk={useLosKodeverk}
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <EndreReservasjonDato
                    reservertTilTidspunkt={reservasjon.reservertTilTidspunkt}
                    endreReservasjon={reserverTil =>
                      endreOppgaveReservasjonAsync({ oppgaveId: reservasjon.oppgaveId, reserverTil })
                    }
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <Button
                    variant="tertiary"
                    size="small"
                    icon={<PersonGroupIcon aria-hidden />}
                    onClick={() => showFlytteModal(reservasjon)}
                  />
                </Table.DataCell>
                <Table.DataCell>
                  <Button
                    variant="tertiary"
                    data-color="danger"
                    size="small"
                    title={intl.formatMessage(
                      { id: 'ReservasjonerTabell.OpphevReservasjon' },
                      { oppgaveId: reservasjon.oppgaveId },
                    )}
                    icon={<XMarkIcon aria-hidden />}
                    onClick={() => opphevOppgaveReservasjon({ oppgaveId: reservasjon.oppgaveId })}
                  />
                </Table.DataCell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      )}

      {valgtReservasjon && showFlyttReservasjonModal && (
        <FlyttReservasjonModal
          closeModal={() => setShowFlyttReservasjonModal(false)}
          flyttOppgavereservasjon={params =>
            flyttOppgavereservasjonRequest({ oppgaveId: valgtReservasjon.oppgaveId, ...params })
          }
          tilgjengeligeSaksbehandlere={avdelingensSaksbehandlere}
          isLoadingSaksbehandlere={isLoadingAvdelingensSaksbehandlere}
        />
      )}
    </VStack>
  );
};
