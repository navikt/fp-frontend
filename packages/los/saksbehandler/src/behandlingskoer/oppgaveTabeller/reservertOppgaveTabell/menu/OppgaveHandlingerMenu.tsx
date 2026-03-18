import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import {
  ArrowUndoIcon,
  CalendarIcon,
  HourglassTopFilledIcon,
  MenuElipsisVerticalCircleIcon,
  NotePencilIcon,
  PersonHeadsetIcon,
} from '@navikt/aksel-icons';
import { ActionMenu, Button } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import dayjs from 'dayjs';

import { FlyttReservasjonModal, OppgaveReservasjonEndringDatoModal } from '@navikt/fp-los-felles';
import type { OppgaveDto } from '@navikt/fp-types';

import {
  endreReservasjonPost,
  flyttReservasjonPost,
  hentAktuelleSaksbehandlere,
  LosUrl,
  opphevReservasjon,
} from '../../../../data/fplosSaksbehandlerApi';
import { OppgaveReservasjonForlengetModal } from './forleng/OppgaveReservasjonForlengetModal';
import { NotatModal } from './notat/NotatModal';

interface Props {
  oppgave: OppgaveDto;
  brukernavn: string;
}

export const OppgaveHandlingerMenu = ({ oppgave, brukernavn }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const [visForlengetReservasjonModal, setVisForlengetReservasjonModal] = useState(false);
  const [visReservasjonEndringDatoModal, setVisReservasjonEndringDatoModal] = useState(false);
  const [visFlyttReservasjonModal, setVisFlyttReservasjonModal] = useState(false);
  const [visNotatModal, setVisNotatModal] = useState(false);

  const { mutate: endreOppgavereservasjon } = useMutation({
    mutationFn: (reserverTil: string) => endreReservasjonPost(oppgave.id, reserverTil),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });

      setVisForlengetReservasjonModal(true);
      setVisReservasjonEndringDatoModal(false);
    },
  });

  const { mutate: flyttOppgavereservasjon } = useMutation({
    mutationFn: (values: { brukerIdent: string; begrunnelse: string }) =>
      flyttReservasjonPost(oppgave.id, values.brukerIdent, values.begrunnelse),
    onSuccess: () => {
      setVisFlyttReservasjonModal(false);
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });
    },
  });

  const { mutate: opphevOppgavereservasjon } = useMutation({
    mutationFn: () => opphevReservasjon(oppgave.id),
    onSuccess: () => {
      void queryClient.invalidateQueries({
        queryKey: [LosUrl.RESERVERTE_OPPGAVER],
      });
    },
  });

  const { data: aktuelleSaksbehandlere, isPending: isLoadingSaksbehandlere } = useQuery(
    hentAktuelleSaksbehandlere(oppgave.id, visFlyttReservasjonModal),
  );

  return (
    <>
      <ActionMenu>
        <ActionMenu.Trigger>
          <Button
            variant="tertiary"
            size="small"
            title={intl.formatMessage({ id: 'OppgaveHandlingerMenu.OppgaveHandlinger' })}
            icon={<MenuElipsisVerticalCircleIcon aria-hidden />}
          />
        </ActionMenu.Trigger>
        <ActionMenu.Content>
          <ActionMenu.Group aria-label={intl.formatMessage({ id: 'OppgaveHandlingerMenu.Meny' })}>
            <ActionMenu.Item onSelect={() => opphevOppgavereservasjon()} icon={<ArrowUndoIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.LeggTilbake" />
            </ActionMenu.Item>
            <ActionMenu.Item
              onSelect={() => endreOppgavereservasjon(getForlengetDato(oppgave))}
              icon={<HourglassTopFilledIcon aria-hidden />}
            >
              <FormattedMessage id="OppgaveHandlingerMenu.ForlengReservasjon" />
            </ActionMenu.Item>
            <ActionMenu.Item
              onSelect={() => setVisReservasjonEndringDatoModal(true)}
              icon={<CalendarIcon aria-hidden />}
            >
              <FormattedMessage id="OppgaveHandlingerMenu.EndreReservasjon" />
            </ActionMenu.Item>
            <ActionMenu.Item
              onSelect={() => setVisFlyttReservasjonModal(true)}
              icon={<PersonHeadsetIcon aria-hidden />}
            >
              <FormattedMessage id="OppgaveHandlingerMenu.FlyttReservasjon" />
            </ActionMenu.Item>
            <ActionMenu.Item onSelect={() => setVisNotatModal(true)} icon={<NotePencilIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.Notat" />
            </ActionMenu.Item>
          </ActionMenu.Group>
        </ActionMenu.Content>
      </ActionMenu>
      {visReservasjonEndringDatoModal && (
        <OppgaveReservasjonEndringDatoModal
          closeModal={() => setVisReservasjonEndringDatoModal(false)}
          reserverTilDefault={oppgave.reservasjonStatus.reservertTilTidspunkt}
          endreOppgavereservasjon={endreOppgavereservasjon}
        />
      )}
      {visForlengetReservasjonModal && (
        <OppgaveReservasjonForlengetModal oppgave={oppgave} closeModal={() => setVisForlengetReservasjonModal(false)} />
      )}
      {visFlyttReservasjonModal && (
        <FlyttReservasjonModal
          flyttetBegrunnelse={oppgave.reservasjonStatus.flyttetReservasjon?.begrunnelse}
          closeModal={() => setVisFlyttReservasjonModal(false)}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          tilgjengeligeSaksbehandlere={(aktuelleSaksbehandlere ?? []).filter(sbh => sbh.brukerIdent !== brukernavn)}
          isLoadingSaksbehandlere={isLoadingSaksbehandlere}
        />
      )}
      {visNotatModal && (
        <NotatModal
          closeModal={() => setVisNotatModal(false)}
          flyttOppgavereservasjon={flyttOppgavereservasjon}
          brukernavn={brukernavn}
          notat={oppgave.reservasjonStatus.flyttetReservasjon?.begrunnelse}
        />
      )}
    </>
  );
};

const getForlengetDato = (oppgave: OppgaveDto) =>
  dayjs(oppgave.reservasjonStatus.reservertTilTidspunkt).add(1, 'day').format(ISO_DATE_FORMAT);
