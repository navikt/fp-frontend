import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import Modal from 'nav-frontend-modal';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';
import { Image } from '@navikt/ft-ui-komponenter';

import { createIntl } from '@navikt/ft-utils';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import messages from '../../i18n/nb_NO.json';

import styles from './klageBehandlingModal.less';

const intl = createIntl(messages);

interface OwnProps {
  visModal?: boolean;
  lukkModal: () => void;
}

/**
 * KlageBehandlingModal
 *
 * Presentasjonskomponent. Denne komponenten vises ved en klagevurdering hvor saksbehandler
 * i aksjonspunkt '' velger at ytelsesvedtaket skal stadfestes. Ved å trykke på knapp blir saksbehandler
 * tatt tilbake til sokesiden.
 */
const KlageBehandlingModal: FunctionComponent<OwnProps> = ({
  visModal = false,
  lukkModal,
}) => (
  <Modal
    className={styles.modal}
    isOpen={visModal}
    contentLabel={intl.formatMessage({ id: 'KlageVurderingModal.ModalDescription' })}
    onRequestClose={lukkModal}
    closeButton={false}
    shouldCloseOnOverlayClick={false}
  >
    <Row className="">
      <Column xs="1">
        <Image className={styles.image} src={innvilgetImageUrl} />
        <div className={styles.divider} />
      </Column>
      <Column xs="9">
        <Normaltekst>{intl.formatMessage({ id: 'KlageVurderingModal.VedtakOversendt' })}</Normaltekst>
        <Normaltekst>{intl.formatMessage({ id: 'KlageVurderingModal.GoToSearchPage' })}</Normaltekst>
      </Column>
      <Column xs="2">
        <Hovedknapp
          mini
          className={styles.button}
          onClick={lukkModal}
          autoFocus
        >
          {intl.formatMessage({ id: 'KlageVurderingModal.Ok' })}
        </Hovedknapp>
      </Column>
    </Row>
  </Modal>
);

export default KlageBehandlingModal;
