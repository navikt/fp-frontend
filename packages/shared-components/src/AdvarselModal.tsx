import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import Modal from 'nav-frontend-modal';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst, Undertittel } from 'nav-frontend-typografi';

import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../i18n/nb_NO.json';
import Image from './Image';

import styles from './advarselModal.less';

const intl = createIntl(messages);

interface OwnProps {
  headerText?: string;
  bodyText: string;
  showModal: boolean;
  submit: () => void;
}

/**
 * AdvarselModal
 *
 * Presentasjonskomponent. Modal med advarselikon og som viser en valgfri tekst i tillegg til knappen OK.
 */
const AdvarselModal: FunctionComponent<OwnProps> = ({
  bodyText,
  headerText,
  showModal,
  submit,
}) => (
  <Modal
    className={styles.modal}
    isOpen={showModal}
    closeButton={false}
    contentLabel={bodyText}
    onRequestClose={submit}
    shouldCloseOnOverlayClick={false}
  >
    <Row>
      <Column xs="1">
        <Image className={styles.image} alt={bodyText} src={advarselImageUrl} />
        <div className={styles.divider} />
      </Column>
      <Column xs="8" className={styles.text}>
        {headerText && <Undertittel>{headerText}</Undertittel>}
        <Normaltekst>{bodyText}</Normaltekst>
      </Column>
      <Column xs="2">
        <Hovedknapp
          className={styles.submitButton}
          mini
          htmlType="submit"
          onClick={submit}
          autoFocus
        >
          {intl.formatMessage({ id: 'AdvarselModal.Ok' })}
        </Hovedknapp>
      </Column>
    </Row>
  </Modal>
);

export default AdvarselModal;
