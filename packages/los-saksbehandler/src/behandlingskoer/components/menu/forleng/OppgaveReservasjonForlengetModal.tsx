import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, BodyShort, Label } from '@navikt/ds-react';
import { getDateAndTime } from '@navikt/ft-utils';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import Modal from '../../../../components/Modal';
import Oppgave from '../../../../typer/oppgaveTsType';

import styles from './oppgaveReservasjonForlengetModal.less';

interface OwnProps {
  oppgave: Oppgave;
  showModal: boolean;
  closeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

/**
 * OppgaveReservasjonForlengetModal.
 */
const OppgaveReservasjonForlengetModal: FunctionComponent<OwnProps> = ({
  oppgave,
  showModal,
  closeModal,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Reservert' })}
      onClose={closeModal as () => void}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Image
              className={styles.image}
              alt={intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Reservert' })}
              src={innvilgetImageUrl}
            />
          </FlexColumn>
          <FlexColumn>
            <Label size="small">
              <FormattedMessage id="OppgaveReservasjonForlengetModal.Reservert" />
            </Label>
            <BodyShort size="small">
              <FormattedMessage id="OppgaveReservasjonForlengetModal.Til" values={getDateAndTime(oppgave.status.reservertTilTidspunkt)} />
            </BodyShort>
          </FlexColumn>
          <FlexColumn className={styles.button}>
            <Button
              size="small"
              variant="secondary"
              onClick={closeModal}
              autoFocus
              type="button"
            >
              {intl.formatMessage({ id: 'OppgaveReservasjonForlengetModal.Ok' })}
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Modal>
  );
};

export default OppgaveReservasjonForlengetModal;
