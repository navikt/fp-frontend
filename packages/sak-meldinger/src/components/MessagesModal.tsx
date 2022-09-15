import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Button, Modal, Label } from '@navikt/ds-react';
import { Column, Container, Row } from 'nav-frontend-grid';
import { Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './MessagesModal.less';

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
const MessagesModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  showModal,
  closeEvent,
  intl,
}) => (
  <Modal
    className={styles.modal}
    open={showModal}
    closeButton={false}
    aria-label={intl.formatMessage({ id: 'MessagesModal.description' })}
    onClose={closeEvent}
    shouldCloseOnOverlayClick={false}
  >
    <Modal.Content>
      <Container className={styles.container}>
        <Row>
          <Column xs="1">
            <Image
              className={styles.image}
              alt={intl.formatMessage({ id: 'MessagesModal.description' })}
              src={innvilgetImageUrl}
            />
            <div className={styles.divider} />
          </Column>
          <Column xs="9">
            <Label size="small" className={styles.text}>
              <FormattedMessage id="MessagesModal.text" />
            </Label>
          </Column>
          <Column xs="2">
            <Button
              className={styles.button}
              size="small"
              variant="primary"
              onClick={closeEvent}
              autoFocus
            >
              {intl.formatMessage({ id: 'MessagesModal.OK' })}
            </Button>
          </Column>
        </Row>
      </Container>
    </Modal.Content>
  </Modal>
);

export default injectIntl(MessagesModal);
