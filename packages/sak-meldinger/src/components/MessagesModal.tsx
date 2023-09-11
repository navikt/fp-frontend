import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Modal, Label } from '@navikt/ds-react';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './MessagesModal.module.css';

interface OwnProps {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * MessagesModal
 *
 * Denne modalen vises etter at et brev har blitt bestilt.
 * Ved å trykke på knapp blir fritekst-feltet tømt.
 */
const MessagesModal: FunctionComponent<OwnProps> = ({ showModal, closeEvent }) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={showModal}
      aria-label={intl.formatMessage({ id: 'MessagesModal.description' })}
      onClose={closeEvent}
    >
      <Modal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <CheckmarkCircleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'MessagesModal.description' })}
              />
            </FlexColumn>
            <FlexColumn className={styles.text}>
              <Label size="small">
                <FormattedMessage id="MessagesModal.text" />
              </Label>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button size="small" variant="primary" onClick={closeEvent} autoFocus type="button">
                {intl.formatMessage({ id: 'MessagesModal.OK' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Body>
    </Modal>
  );
};

export default MessagesModal;
