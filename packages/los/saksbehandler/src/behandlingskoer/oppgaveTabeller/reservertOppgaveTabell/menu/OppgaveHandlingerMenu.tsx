import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { ArrowUndoIcon, MenuElipsisHorizontalIcon, NotePencilIcon, PersonHeadsetIcon } from '@navikt/aksel-icons';
import { ActionMenu, Button } from '@navikt/ds-react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import { FlyttReservasjonModal } from '@navikt/fp-los-felles';
import type { OppgaveDto } from '@navikt/fp-types';

import {
  flyttReservasjon,
  hentAktuelleSaksbehandlere,
  LosUrl,
  opphevReservasjon,
} from '../../../../data/fplosSaksbehandlerApi';
import { NotatModal } from './notat/NotatModal';

interface Props {
  oppgave: OppgaveDto;
  brukernavn: string;
}

export const OppgaveHandlingerMenu = ({ oppgave, brukernavn }: Props) => {
  const intl = useIntl();
  const queryClient = useQueryClient();

  const [visFlyttReservasjonModal, setVisFlyttReservasjonModal] = useState(false);
  const [visNotatModal, setVisNotatModal] = useState(false);

  const { mutate: flyttOppgavereservasjon } = useMutation({
    mutationFn: (values: { brukerIdent: string; begrunnelse: string }) =>
      flyttReservasjon(oppgave.id, values.brukerIdent, values.begrunnelse),
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
            aria-label={intl.formatMessage({ id: 'OppgaveHandlingerMenu.ÅpneMeny' })}
            title={intl.formatMessage({ id: 'OppgaveHandlingerMenu.ÅpneMeny' })}
            icon={<MenuElipsisHorizontalIcon aria-hidden />}
          />
        </ActionMenu.Trigger>
        <ActionMenu.Content>
          <ActionMenu.Group aria-label={intl.formatMessage({ id: 'OppgaveHandlingerMenu.Meny' })}>
            <ActionMenu.Item onSelect={() => opphevOppgavereservasjon()} icon={<ArrowUndoIcon aria-hidden />}>
              <FormattedMessage id="OppgaveHandlingerMenu.LeggTilbake" />
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
