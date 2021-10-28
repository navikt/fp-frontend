import React, { Component } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import NavFrontendSpinner from 'nav-frontend-spinner';
import { Element } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';

import { createIntl } from '@fpsak-frontend/utils';

import messages from '../i18n/nb_NO.json';

import styles from './dataFetchPendingModal.less';

const intl = createIntl(messages);

// Skal ikke være mulig å lukke modal
const doNothing = () => undefined;

// Vent to sekund med å vise melding
const MESSAGE_DELAY_MILLIS = 2000;

interface OwnProps {
  pendingMessage: string;
}

interface OwnState {
  displayMessage: boolean;
}

/**
 * DataFetchPendingModal
 *
 * Presentasjonskomponent. Denne modalen vises når det går mer enn to sekund å polle etter serverdata.
 */
export class DataFetchPendingModal extends Component<OwnProps, OwnState> {
  constructor(props: OwnProps) {
    super(props);
    this.enableMessage = this.enableMessage.bind(this);

    this.state = {
      displayMessage: false,
    };

    this.timer = setTimeout(this.enableMessage, MESSAGE_DELAY_MILLIS);
  }

  componentWillUnmount(): void {
    clearTimeout(this.timer);
  }

  timer: ReturnType<typeof setTimeout>;

  enableMessage(): void {
    this.setState({ displayMessage: true });
  }

  render() {
    const { displayMessage } = this.state;
    if (!displayMessage) {
      return null;
    }

    const { pendingMessage } = this.props;

    return (
      <Modal
        className={styles.modal}
        isOpen
        closeButton={false}
        contentLabel={pendingMessage}
        onRequestClose={doNothing}
        shouldCloseOnOverlayClick={false}
      >
        <Row>
          <Column xs="2">
            <NavFrontendSpinner type="L" />
            <div className={styles.divider} />
          </Column>
          <Column xs="10">
            <Element className={styles.modalText}>
              {intl.formatMessage({ id: 'DataFetchPendingModal.LosningenJobberMedBehandlingen' })}
            </Element>
          </Column>
        </Row>
      </Modal>
    );
  }
}

export default DataFetchPendingModal;
