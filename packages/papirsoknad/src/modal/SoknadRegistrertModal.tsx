import React from 'react';
import { RawIntlProvider } from 'react-intl';
import { Link } from 'react-router-dom';
import { Alert, Button, Modal } from '@navikt/ds-react';
import { createIntl } from '@navikt/ft-utils';

import messages from '../../i18n/nb_NO.json';
import styles from './soknadRegistrertModal.module.css';

const intl = createIntl(messages);

interface Props {
  isOpen?: boolean;
}

/**
 * SoknadRegistrertModal
 *
 * Informasjonsmodal som vises til saksbehandler når en papirsøknad har blitt registrert.
 */
export const SoknadRegistrertModal = ({ isOpen = false }: Props) => (
  <RawIntlProvider value={intl}>
    <Modal
      className={styles.modalStyle}
      open={isOpen}
      aria-label={intl.formatMessage({ id: 'SoknadRegistrertModal.ContentLabel' })}
      onClose={() => undefined}
    >
      <Modal.Body>
        <Alert size="small" variant="success" className={styles.alertStyle}>
          <div className={styles.left}>
            <p className={styles.reduceMargin}>{intl.formatMessage({ id: 'SoknadRegistrertModal.InfoTextOne' })}</p>
            <p className={styles.reduceMargin}>{intl.formatMessage({ id: 'SoknadRegistrertModal.InfoTextTwo' })}</p>
          </div>
          <div className={styles.right}>
            <Link to="/">
              <Button size="small" variant="primary">
                {intl.formatMessage({ id: 'SoknadRegistrertModal.OkButtonText' })}
              </Button>
            </Link>
          </div>
        </Alert>
      </Modal.Body>
    </Modal>
  </RawIntlProvider>
);
