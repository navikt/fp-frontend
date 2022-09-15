import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Button, BodyShort, Modal } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './klageBehandlingModal.less';

interface OwnProps {
  visModal?: boolean;
  lukkModal: () => void;
}

/**
 * KlageBehandlingModal
 *
 * Denne komponenten vises ved en klagevurdering hvor saksbehandler
 * i aksjonspunkt '' velger at ytelsesvedtaket skal stadfestes. Ved å trykke på knapp blir saksbehandler
 * tatt tilbake til sokesiden.
 */
const KlageBehandlingModal: FunctionComponent<OwnProps> = ({
  visModal = false,
  lukkModal,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={visModal}
      aria-label={intl.formatMessage({ id: 'KlageVurderingModal.ModalDescription' })}
      onClose={lukkModal}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Row className="">
          <Column xs="1">
            <Image className={styles.image} src={innvilgetImageUrl} />
            <div className={styles.divider} />
          </Column>
          <Column xs="9">
            <BodyShort size="small">{intl.formatMessage({ id: 'KlageVurderingModal.VedtakOversendt' })}</BodyShort>
            <BodyShort size="small">{intl.formatMessage({ id: 'KlageVurderingModal.GoToSearchPage' })}</BodyShort>
          </Column>
          <Column xs="2">
            <Button
              variant="primary"
              size="small"
              className={styles.button}
              onClick={lukkModal}
              autoFocus
            >
              {intl.formatMessage({ id: 'KlageVurderingModal.Ok' })}
            </Button>
          </Column>
        </Row>
      </Modal.Content>
    </Modal>
  );
};

export default KlageBehandlingModal;
