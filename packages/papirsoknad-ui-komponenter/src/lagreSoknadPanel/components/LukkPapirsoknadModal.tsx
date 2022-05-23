import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import ModalWrapper from 'nav-frontend-modal';
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
    <ModalWrapper
      className={styles.modal}
      isOpen={showModal}
      closeButton={false}
      contentLabel={intl.formatMessage({ id: 'ModalLukkPapirSoknad.ModalDescription' })}
      onRequestClose={cancelEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Row>
        <Column xs="1">
          <Image className={styles.image} alt={intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avslutt' })} src={advarselImageUrl} />
          <div className={styles.divider} />
        </Column>
        <Column xs="11">
          <Element>
            {intl.formatMessage({ id: 'ModalLukkPapirSoknad.AvslutterRegistrering' })}
          </Element>
          <Normaltekst>
            {intl.formatMessage({ id: 'ModalLukkPapirSoknad.BekreftAvslag' })}
          </Normaltekst>
        </Column>
      </Row>
      <Row>
        <Column>
          <div className={styles.right}>
            <Link to="/">
              <Hovedknapp
                mini
                className={styles.button}
                onClick={() => handleSubmit()}
              >
                {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Ok' })}
              </Hovedknapp>
            </Link>
            <Knapp
              htmlType="button"
              mini
              onClick={cancelEvent}
              className={styles.cancelButton}
            >
              {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avbryt' })}
            </Knapp>
          </div>
        </Column>
      </Row>
    </ModalWrapper>
  );
};

export default LukkPapirSoknadModal;
