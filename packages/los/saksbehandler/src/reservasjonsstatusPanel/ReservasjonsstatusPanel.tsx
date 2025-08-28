import { FaceFrownIcon, FaceLaughIcon } from '@navikt/aksel-icons';
import { Button, HStack, Tooltip } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';

import {
  LosUrl,
  oppgaverForFagsakerOptions,
  opphevReservasjon,
  reserverOppgavePost,
} from '../data/fplosSaksbehandlerApi';

import messages from '../../i18n/nb_NO.json';

const intl = createIntl(messages);

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
}

export const ReservasjonsstatusPanel = ({ saksnummer, behandlingUuid }: Props) => {
  const { data: reserverteOppgaver = [] } = useQuery(oppgaverForFagsakerOptions([saksnummer]));

  const queryClient = useQueryClient();

  const oppgaveForBehandling = reserverteOppgaver.find(ro => ro.behandlingId === behandlingUuid);

  const { mutate: opphevOppgavereservasjon } = useMutation({
    mutationFn: opphevReservasjon,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVER_FOR_FAGSAKER],
      });
    },
  });

  const { mutateAsync: reserverOppgave } = useMutation({
    mutationFn: reserverOppgavePost,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [LosUrl.OPPGAVER_FOR_FAGSAKER],
      });
    },
  });

  const erReservert = oppgaveForBehandling?.reservasjonStatus.erReservert;

  return (
    <HStack gap="space-8" align="center">
      {!erReservert && intl.formatMessage({ id: 'ReservasjonsstatusPanel.Ingen' })}
      {oppgaveForBehandling?.reservasjonStatus.erReservertAvInnloggetBruker &&
        intl.formatMessage({ id: 'ReservasjonsstatusPanel.ReservertPaMeg' })}
      {erReservert &&
        !oppgaveForBehandling?.reservasjonStatus.erReservertAvInnloggetBruker &&
        intl.formatMessage(
          { id: 'ReservasjonsstatusPanel.Reservert' },
          { navn: oppgaveForBehandling.reservasjonStatus.reservertAvNavn },
        )}
      {erReservert && oppgaveForBehandling.reservasjonStatus.erReservertAvInnloggetBruker && (
        <Tooltip content={intl.formatMessage({ id: 'ReservasjonsstatusPanel.OpphevReservasjon' })}>
          <Button
            icon={<FaceFrownIcon aria-hidden />}
            variant="tertiary-neutral"
            size="small"
            onClick={() => opphevOppgavereservasjon(oppgaveForBehandling.id)}
          />
        </Tooltip>
      )}
      {!erReservert && !!oppgaveForBehandling && (
        <Tooltip content={intl.formatMessage({ id: 'ReservasjonsstatusPanel.Reserver' })}>
          <Button
            icon={<FaceLaughIcon aria-hidden />}
            variant="tertiary-neutral"
            size="small"
            onClick={() => reserverOppgave(oppgaveForBehandling.id)}
          />
        </Tooltip>
      )}
    </HStack>
  );
};
