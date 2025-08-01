import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal as NavModal, VStack } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';

import { type Oppgave } from '@navikt/fp-los-felles';

import styles from './oppgaveReservasjonForlengetModal.module.css';

interface Props {
  oppgave: Oppgave;
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
      <NavModal.Body>
        <HStack gap="space-20" align="center" className={styles.padding}>
          <CheckmarkCircleFillIcon
            className={styles.image}
            title={intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Reservert' })}
          />
          <VStack gap="space-4">
            <Label size="small">
              <FormattedMessage id="OppgaveReservasjonForlengetModal.Reservert" />
            </Label>
            <BodyShort>
              <FormattedMessage
                id="OppgaveReservasjonForlengetModal.Til"
                values={getDateAndTime(oppgave.reservasjonStatus.reservertTilTidspunkt)}
              />
            </BodyShort>
          </VStack>
        </HStack>
      </NavModal.Body>
      <NavModal.Footer>
        <Button size="small" variant="secondary" onClick={closeModal} autoFocus type="button">
          <FormattedMessage id="OppgaveReservasjonForlengetModal.Ok" />
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};
