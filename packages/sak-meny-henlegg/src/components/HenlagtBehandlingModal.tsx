import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import styles from './henlagtBehandlingModal.module.css';

interface Props {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * HenlagtBehandlingModal
 *
 * Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.
 */
export const HenlagtBehandlingModal = ({ showModal, closeEvent }: Props) => {
  const intl = useIntl();

  return (
    <Modal
      className={styles.modal}
      open={showModal}
      aria-label={intl.formatMessage({ id: 'HenlagtBehandlingModal.ModalDescription' })}
      onClose={closeEvent}
    >
      <Modal.Body>
        <HStack justify="space-between">
          <HStack gap="3">
            <CheckmarkCircleFillIcon
              className={styles.image}
              title={intl.formatMessage({ id: 'HenlagtBehandlingModal.Henlagt' })}
            />
            <VStack gap="1">
              <Label size="small">
                <FormattedMessage id="HenlagtBehandlingModal.BehandlingenErHenlagt" />
              </Label>
              <BodyShort size="small">
                <FormattedMessage id="HenlagtBehandlingModal.RutetTilForsiden" />
              </BodyShort>
            </VStack>
          </HStack>
          <Button variant="primary" size="small" onClick={closeEvent} autoFocus type="button">
            <FormattedMessage id="HenlagtBehandlingModal.Ok" />
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
