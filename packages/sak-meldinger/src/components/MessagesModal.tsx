import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Button, Modal, Label } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '../images/innvilget_valgt.svg';

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
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'MessagesModal.description' })}
      onClose={closeEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image
                className={styles.image}
                alt={intl.formatMessage({ id: 'MessagesModal.description' })}
                src={innvilgetImageUrl}
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
      </Modal.Content>
    </Modal>
  );
};

export default MessagesModal;
