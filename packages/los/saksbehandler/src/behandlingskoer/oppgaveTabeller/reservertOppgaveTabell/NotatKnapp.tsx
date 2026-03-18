import { type ReactNode, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChatElipsisIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Label, Popover, VStack } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';

import type { OppgaveDto, ReservasjonStatusDto } from '@navikt/fp-types';

export const NotatKnapp = ({ oppgave, brukernavn }: { oppgave: OppgaveDto; brukernavn: string }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isOpen = anchorEl !== null;

  return (
    <>
      <Button
        onClick={event => setAnchorEl(isOpen ? null : event.currentTarget)}
        aria-expanded={isOpen}
        size="small"
        icon={<ChatElipsisIcon aria-hidden />}
        variant="tertiary"
      />
      <Popover open={isOpen} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
        <Popover.Content className="whitespace-pre-line">
          {lagFlyttetReservasjonPopover(oppgave.reservasjonStatus, brukernavn)}
        </Popover.Content>
      </Popover>
    </>
  );
};

const lagFlyttetReservasjonPopover = (
  oppgaveStatus: ReservasjonStatusDto,
  brukernavn: string,
): ReactNode | undefined => {
  const { flyttetReservasjon } = oppgaveStatus;
  if (!flyttetReservasjon) {
    return undefined;
  }
  const datoOgTid = getDateAndTime(flyttetReservasjon.tidspunkt);

  const erLagetAvInnloggetBruker = brukernavn === flyttetReservasjon.flyttetAvIdent;

  return (
    <VStack gap="space-8" minWidth="150px">
      {!erLagetAvInnloggetBruker && (
        <VStack gap="space-4">
          <Label size="small">
            <FormattedMessage id="ReservertOppgaveRad.OverfortReservasjonHeader" />
          </Label>
          <BodyShort size="small">
            <FormattedMessage
              id="ReservertOppgaveRad.OverfortReservasjonBody"
              values={{
                dato: datoOgTid?.date,
                tid: datoOgTid?.time,
                flyttetAvIdent: flyttetReservasjon.flyttetAvIdent,
                navn: flyttetReservasjon.navn,
              }}
            />
          </BodyShort>
        </VStack>
      )}
      <VStack gap="space-4">
        <Label size="small">
          {erLagetAvInnloggetBruker ? (
            <FormattedMessage id="ReservertOppgaveRad.Notat" />
          ) : (
            <FormattedMessage id="ReservertOppgaveRad.OverfortReservasjonBegrunnelse" />
          )}
        </Label>
        <BodyShort size="small">{flyttetReservasjon.begrunnelse}</BodyShort>
      </VStack>
    </VStack>
  );
};
