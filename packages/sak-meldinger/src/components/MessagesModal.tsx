import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, HStack,Label, Modal } from '@navikt/ds-react';

import styles from './MessagesModal.module.css';

interface Props {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * MessagesModal
 *
 * Denne modalen vises etter at et brev har blitt bestilt.
 * Ved å trykke på knapp blir fritekst-feltet tømt.
 */
export const MessagesModal = ({ showModal, closeEvent }: Props) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={showModal}
      aria-label={intl.formatMessage({ id: 'MessagesModal.description' })}
      onClose={closeEvent}
    >
      <Modal.Body>
        <HStack justify="space-between" align="center">
          <HStack gap="2" align="center">
            <CheckmarkCircleFillIcon
              className={styles.image}
              title={intl.formatMessage({ id: 'MessagesModal.description' })}
            />
            <Label size="small">
              <FormattedMessage id="MessagesModal.text" />
            </Label>
          </HStack>
          <Button size="small" variant="primary" onClick={closeEvent} autoFocus type="button">
            <FormattedMessage id="MessagesModal.OK" />
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
