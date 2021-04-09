import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import Modal from 'nav-frontend-modal';

import { Image } from '@fpsak-frontend/shared-components';
import { createIntl } from '@fpsak-frontend/utils';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import messages from '../../../../i18n/nb_NO.json';
import styles from './fatterVedtakStatusModal.less';

const intl = createIntl(messages);

interface OwnProps {
  visModal?: boolean;
  lukkModal: () => void;
  tekst: string;
}

/**
 * FatterVedtakStatusModal
 *
 * Presentasjonskomponent. Denne modalen viser en lightbox etter at en saksbehandler har sendt et forslag på vedtak til beslutter
 * ved totrinnskontroll. Ved å trykke på knapp blir saksbehandler tatt tilbake til søkesiden.
 */
const FatterVedtakStatusModal: FunctionComponent<OwnProps> = ({
  visModal = false,
  lukkModal,
  tekst,
}) => (
  <Modal
    className={styles.modal}
    isOpen={visModal}
    closeButton={false}
    contentLabel={tekst}
    onRequestClose={lukkModal}
    shouldCloseOnOverlayClick={false}
  >
    <Row className="">
      <Column xs="1">
        <Image
          className={styles.image}
          alt={tekst}
          src={innvilgetImageUrl}
        />
        <div className={styles.divider} />
      </Column>
      <Column xs="9">
        <Normaltekst>
          {tekst}
        </Normaltekst>
        <Normaltekst>{intl.formatMessage({ id: 'FatterVedtakStatusModal.GoToSearchPage' })}</Normaltekst>
      </Column>
      <Column xs="2">
        <Hovedknapp
          mini
          className={styles.button}
          onClick={lukkModal}
          autoFocus
        >
          {intl.formatMessage({ id: 'FatterVedtakStatusModal.Ok' })}
        </Hovedknapp>
      </Column>
    </Row>
  </Modal>
);

export default FatterVedtakStatusModal;
