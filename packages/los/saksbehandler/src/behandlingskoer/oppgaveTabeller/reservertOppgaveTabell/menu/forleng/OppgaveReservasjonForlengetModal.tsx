import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal as NavModal } from '@navikt/ds-react';
import { DateTimeLabel } from '@navikt/ft-ui-komponenter';

import { type OppgaveDto } from '@navikt/fp-types';

interface Props {
  oppgave: OppgaveDto;
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const OppgaveReservasjonForlengetModal = ({ oppgave, closeModal }: Props) => {
  const intl = useIntl();

  return (
    <NavModal
      width="small"
      open
      aria-label={intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Reservert' })}
      onClose={closeModal as () => void}
    >
      <NavModal.Header>
        <HStack gap="space-16" align="center">
          <CheckmarkCircleFillIcon color="var(--ax-bg-success-strong)" fontSize="2rem" aria-hidden />
          <Label size="medium">
            <FormattedMessage id="OppgaveReservasjonForlengetModal.Reservert" />
          </Label>
        </HStack>
      </NavModal.Header>
      {oppgave.reservasjonStatus.reservertTilTidspunkt && (
        <NavModal.Body>
          <BodyShort>
            <FormattedMessage
              id="OppgaveReservasjonForlengetModal.ReservertTil"
              values={{ datetime: <DateTimeLabel dateTimeString={oppgave.reservasjonStatus.reservertTilTidspunkt} /> }}
            />
          </BodyShort>
        </NavModal.Body>
      )}
      <NavModal.Footer>
        <Button size="small" variant="primary" onClick={closeModal} autoFocus type="button">
          <FormattedMessage id="Label.Ok" />
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};
