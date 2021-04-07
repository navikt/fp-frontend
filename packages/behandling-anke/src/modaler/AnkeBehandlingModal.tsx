import React, { FunctionComponent } from 'react';
import { Column, Row } from 'nav-frontend-grid';
import Modal from 'nav-frontend-modal';
import { Hovedknapp } from 'nav-frontend-knapper';
import { Normaltekst } from 'nav-frontend-typografi';

import { Image } from '@fpsak-frontend/shared-components';
import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';
import { createIntl } from '@fpsak-frontend/utils';

import messages from '../../i18n/nb_NO.json';

import styles from './ankeBehandlingModal.less';

const intl = createIntl(messages);

const tekstTilMelding = (erFerdigbehandlet: boolean, venterTrygderett: boolean): string => {
  if (erFerdigbehandlet && venterTrygderett) {
    return 'AnkeVurderingModal.SettVent';
  }
  if (erFerdigbehandlet && !venterTrygderett) {
    return 'AnkeVurderingModal.Ferdigbehandlet';
  }
  return 'AnkeVurderingModal.VedtakOversendt';
};

interface OwnProps {
  visModal?: boolean;
  lukkModal: () => void;
  erFerdigbehandlet: boolean;
  venterTrygderett: boolean;
}

/**
 * AnkeVurderingModal
 *
 * Presentasjonskomponent. Denne komponenten vises ved en ankevurdering hvor saksbehandler
 * i aksjonspunkt '' velger at ytelsesvedtaket skal stadfestes. Ved å trykke på knapp blir saksbehandler
 * tatt tilbake til sokesiden.
 */
const AnkeVurderingModal: FunctionComponent<OwnProps> = ({
  visModal = false,
  lukkModal,
  erFerdigbehandlet,
  venterTrygderett,
}) => (
  <Modal
    className={styles.modal}
    isOpen={visModal}
    contentLabel={intl.formatMessage({ id: 'AnkeVurderingModal.ModalDescription' })}
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
        <Normaltekst>{intl.formatMessage({ id: tekstTilMelding(erFerdigbehandlet, venterTrygderett) })}</Normaltekst>
        <Normaltekst>{intl.formatMessage({ id: 'AnkeVurderingModal.GoToSearchPage' })}</Normaltekst>
      </Column>
      <Column xs="2">
        <Hovedknapp
          mini
          className={styles.button}
          onClick={lukkModal}
          autoFocus
        >
          {intl.formatMessage({ id: 'AnkeVurderingModal.Ok' })}
        </Hovedknapp>
      </Column>
    </Row>
  </Modal>
);

export default AnkeVurderingModal;
