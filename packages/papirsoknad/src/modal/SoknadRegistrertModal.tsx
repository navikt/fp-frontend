import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'nav-frontend-modal';
import { Hovedknapp } from 'nav-frontend-knapper';
import { AlertStripeSuksess } from 'nav-frontend-alertstriper';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import styles from './soknadRegistrertModal.less';

const intl = createIntl(messages);

interface OwnProps {
  isOpen?: boolean;
}

/**
 * SoknadRegistrertModal
 *
 * Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.
 */
const SoknadRegistrertModal: FunctionComponent<OwnProps> = ({
  isOpen = false,
}) => (
  <Modal
    className={styles.modalStyle}
    isOpen={isOpen}
    contentLabel={intl.formatMessage({ id: 'SoknadRegistrertModal.ContentLabel' })}
    closeButton={false}
    onRequestClose={() => undefined}
    shouldCloseOnOverlayClick={false}
  >
    <AlertStripeSuksess className={styles.alertStyle}>
      <div className={styles.left}>
        <p className={styles.reduceMargin}>{intl.formatMessage({ id: 'SoknadRegistrertModal.InfoTextOne' })}</p>
        <p className={styles.reduceMargin}>{intl.formatMessage({ id: 'SoknadRegistrertModal.InfoTextTwo' })}</p>
      </div>
      <div className={styles.right}>
        <Link to="/">
          <Hovedknapp mini>{intl.formatMessage({ id: 'SoknadRegistrertModal.OkButtonText' })}</Hovedknapp>
        </Link>
      </div>
    </AlertStripeSuksess>
  </Modal>
);

export default SoknadRegistrertModal;
