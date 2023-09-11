import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Modal as NavModal, Button, BodyShort, Label } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import { Oppgave } from '@navikt/fp-los-felles';

import styles from './oppgaveReservasjonForlengetModal.module.css';

interface OwnProps {
  oppgave: Oppgave;
  showModal: boolean;
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * OppgaveReservasjonForlengetModal.
 */
const OppgaveReservasjonForlengetModal: FunctionComponent<OwnProps> = ({ oppgave, showModal, closeModal }) => {
  const intl = useIntl();
  return (
    <NavModal
      width="small"
      open={showModal}
      aria-label={intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Reservert' })}
      onClose={closeModal as () => void}
    >
      <NavModal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <CheckmarkCircleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Reservert' })}
              />
            </FlexColumn>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="OppgaveReservasjonForlengetModal.Reservert" />
              </Label>
              <BodyShort size="small">
                <FormattedMessage
                  id="OppgaveReservasjonForlengetModal.Til"
                  values={getDateAndTime(oppgave.status.reservertTilTidspunkt)}
                />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button size="small" variant="secondary" onClick={closeModal} autoFocus type="button">
                {intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </NavModal.Body>
    </NavModal>
  );
};

export default OppgaveReservasjonForlengetModal;
