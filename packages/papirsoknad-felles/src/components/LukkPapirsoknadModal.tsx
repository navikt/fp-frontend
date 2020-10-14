import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp, Knapp } from 'nav-frontend-knapper';
import { Element, Normaltekst } from 'nav-frontend-typografi';
import ModalWrapper from 'nav-frontend-modal';

import { Image } from '@fpsak-frontend/shared-components';
// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module '@fpsak-frontend/assets/images/... Remove this comment to see the full error message
import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';

// @ts-expect-error ts-migrate(2307) FIXME: Cannot find module './lukkPapirsoknadModal.less' o... Remove this comment to see the full error message
import styles from './lukkPapirsoknadModal.less';

type Props = {
    showModal: boolean;
    handleSubmit: (...args: any[]) => any;
    cancelEvent: (...args: any[]) => any;
    intl: {};
    form: string;
};

/**
 * LukkPapirSoknadModal
 *
 * Presentasjonskomponent. Denne modalen vises når saksbehandler velger 'Ikke mulig å fullføre registrering av søknad'
 * og trykker på 'Lagre og start behandling'.
 * Ved å trykke på OK blir saken sendt til behandling av avslag.
 */
export const LukkPapirSoknadModal = ({
  showModal, handleSubmit, cancelEvent, intl, form,
}: Props) => (
  <ModalWrapper
    className={styles.modal}
    isOpen={showModal}
    closeButton={false}
    // @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message
    contentLabel={intl.formatMessage({ id: 'ModalLukkPapirSoknad.ModalDescription' })}
    onRequestClose={cancelEvent}
    shouldCloseOnOverlayClick={false}
    // @ts-expect-error ts-migrate(2322) FIXME: Property 'ariaHideApp' does not exist on type 'Int... Remove this comment to see the full error message
    ariaHideApp={false}
  >
    <Row>
      <Column xs="1">
        {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
        <Image className={styles.image} alt={intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avslutt' })} src={advarselImageUrl} />
        <div className={styles.divider} />
      </Column>
      <Column xs="11">
        <Element>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
          {intl.formatMessage({ id: 'ModalLukkPapirSoknad.AvslutterRegistrering' })}
        </Element>
        <Normaltekst>
          {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
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
              onClick={() => handleSubmit(form)}
            >
              {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
              {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Ok' })}
            </Hovedknapp>
          </Link>
          <Knapp
            htmlType="button"
            mini
            onClick={cancelEvent}
            className={styles.cancelButton}
          >
            {/* @ts-expect-error ts-migrate(2339) FIXME: Property 'formatMessage' does not exist on type '{... Remove this comment to see the full error message */}
            {intl.formatMessage({ id: 'ModalLukkPapirSoknad.Avbryt' })}
          </Knapp>
        </div>
      </Column>
    </Row>
  </ModalWrapper>
);

// @ts-expect-error ts-migrate(2769) FIXME: Type '({ showModal, handleSubmit, cancelEvent, int... Remove this comment to see the full error message
export default injectIntl(LukkPapirSoknadModal);
