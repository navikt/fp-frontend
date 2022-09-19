import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Column, Row } from 'nav-frontend-grid';
import {
  Label, BodyShort, Button, Modal,
} from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';

import styles from './lukkPapirsoknadModal.less';

interface OwnProps {
  showModal: boolean;
  handleSubmit: () => void;
  cancelEvent: () => void;
}

/**
 * LukkPapirSoknadModal
 *
 * Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
 * og trykker på 'Lagre og start behandling'. Ved å trykke på OK blir saken sendt til behandling av avslag.
 */
const LukkPapirSoknadModal: FunctionComponent<OwnProps> = ({
  showModal,
  handleSubmit,
  cancelEvent,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'ModalLukkPapirSoknad.ModalDescription' })}
      onClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Row>
          <Column xs="1">
            <Image className={styles.image} alt={intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avslutt' })} src={advarselImageUrl} />
            <div className={styles.divider} />
          </Column>
          <Column xs="11">
            <Label size="small">
              {intl.formatMessage({ id: 'ModalLukkPapirSoknad.AvslutterRegistrering' })}
            </Label>
            <BodyShort size="small">
              {intl.formatMessage({ id: 'ModalLukkPapirSoknad.BekreftAvslag' })}
            </BodyShort>
          </Column>
        </Row>
        <Row>
          <Column>
            <div className={styles.right}>
              <Link to="/">
                <Button
                  size="small"
                  variant="primary"
                  className={styles.button}
                  onClick={() => handleSubmit()}
                  type="button"
                >
                  {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Ok' })}
                </Button>
              </Link>
              <Button
                size="small"
                variant="secondary"
                onClick={cancelEvent}
                className={styles.cancelButton}
                type="button"
              >
                {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avbryt' })}
              </Button>
            </div>
          </Column>
        </Row>
      </Modal.Content>
    </Modal>
  );
};

export default LukkPapirSoknadModal;
