import { useEffect, useState } from 'react';
import { FormattedMessage, RawIntlProvider } from 'react-intl';

import { PadlockLockedIcon } from '@navikt/aksel-icons';
import { Button, HStack, Tooltip } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';
import { useMutation, useQuery } from '@tanstack/react-query';

import { oppgaverForFagsakerOptions, opphevReservasjon, reserverOppgavePost } from '../data/fplosSaksbehandlerApi';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  kanVeilede: boolean;
}

export const ReservasjonsstatusPanel = ({ saksnummer, behandlingUuid, kanVeilede }: Props) => {
  const [erOppgaveReservert, setErOppgaveReservert] = useState(false);

  const { data: reserverteOppgaver = [], refetch } = useQuery({
    ...oppgaverForFagsakerOptions([saksnummer]),
    refetchInterval: erOppgaveReservert ? false : 30000,
  });

  const oppgaveForBehandling = reserverteOppgaver.find(ro => ro.behandlingId === behandlingUuid);
  const erReservert = oppgaveForBehandling?.reservasjonStatus.erReservert;

  useEffect(() => {
    setErOppgaveReservert(erReservert || false);
  }, [erReservert]);

  const { mutate: opphevOppgavereservasjon } = useMutation({
    mutationFn: opphevReservasjon,
    onSuccess: () => {
      void refetch();
    },
  });

  const { mutateAsync: reserverOppgave } = useMutation({
    mutationFn: reserverOppgavePost,
    onSuccess: () => {
      void refetch();
    },
  });

  return (
    <RawIntlProvider value={intl}>
      <HStack gap="space-8" align="center">
        {!kanVeilede && !erReservert && !!oppgaveForBehandling && (
          <Button size="small" onClick={() => reserverOppgave(oppgaveForBehandling.id)}>
            <FormattedMessage id="ReservasjonsstatusPanel.Reserver" />
          </Button>
        )}
        {erReservert && oppgaveForBehandling.reservasjonStatus.erReservertAvInnloggetBruker && (
          <Tooltip content={intl.formatMessage({ id: 'ReservasjonsstatusPanel.ErReservertPaDeg' })}>
            <Button
              size="small"
              variant="primary-neutral"
              onClick={() => opphevOppgavereservasjon(oppgaveForBehandling.id)}
              disabled={kanVeilede}
            >
              <FormattedMessage id="ReservasjonsstatusPanel.OpphevReservasjon" />
            </Button>
          </Tooltip>
        )}
        {erReservert && !oppgaveForBehandling.reservasjonStatus.erReservertAvInnloggetBruker && (
          <Button size="small" variant="primary-neutral" disabled icon={<PadlockLockedIcon aria-hidden />}>
            <FormattedMessage
              id="ReservasjonsstatusPanel.Reservert"
              values={{ navn: oppgaveForBehandling.reservasjonStatus.reservertAvNavn }}
            />
          </Button>
        )}
      </HStack>
    </RawIntlProvider>
  );
};
