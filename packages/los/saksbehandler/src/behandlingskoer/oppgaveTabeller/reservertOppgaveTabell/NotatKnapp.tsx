import { useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ChatElipsisIcon } from '@navikt/aksel-icons';
import { Button, Popover, VStack } from '@navikt/ds-react';
import { LabeledValue } from '@navikt/ft-ui-komponenter';
import { dateTimeFormat } from '@navikt/ft-utils';

import type { FlyttetReservasjonDto } from '@navikt/fp-types';

export const NotatKnapp = ({
  flyttetReservasjon: { flyttetAvIdent, tidspunkt, navn, begrunnelse },
  brukernavn,
}: {
  flyttetReservasjon: FlyttetReservasjonDto;
  brukernavn: string;
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const isOpen = anchorEl !== null;
  const erLagetAvInnloggetBruker = brukernavn === flyttetAvIdent;

  return (
    <>
      <Button
        onClick={event => setAnchorEl(isOpen ? null : event.currentTarget)}
        aria-expanded={isOpen}
        size="small"
        icon={<ChatElipsisIcon title="Vis notat" />}
        variant="tertiary"
      />
      <Popover open={isOpen} onClose={() => setAnchorEl(null)} anchorEl={anchorEl}>
        <Popover.Content className="whitespace-pre-line">
          <VStack gap="space-8" minWidth="150px">
            {!erLagetAvInnloggetBruker && (
              <LabeledValue
                size="small"
                label={<FormattedMessage id="ReservertOppgaveRad.OverfortReservasjonHeader" />}
                value={
                  <FormattedMessage
                    id="ReservertOppgaveRad.OverfortReservasjonBody"
                    values={{
                      tidspunkt: dateTimeFormat(tidspunkt),
                      flyttetAvIdent: flyttetAvIdent,
                      navn: navn,
                    }}
                  />
                }
              />
            )}

            <LabeledValue
              size="small"
              label={
                erLagetAvInnloggetBruker ? (
                  <FormattedMessage id="ReservertOppgaveRad.Notat" />
                ) : (
                  <FormattedMessage id="ReservertOppgaveRad.OverfortReservasjonBegrunnelse" />
                )
              }
              value={begrunnelse}
            />
          </VStack>
        </Popover.Content>
      </Popover>
    </>
  );
};
