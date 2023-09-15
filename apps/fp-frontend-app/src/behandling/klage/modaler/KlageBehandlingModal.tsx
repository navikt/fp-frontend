import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Button, BodyShort, Modal, HStack } from '@navikt/ds-react';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

import styles from './klageBehandlingModal.module.css';

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
const KlageBehandlingModal: FunctionComponent<OwnProps> = ({ visModal = false, lukkModal }) => {
  const intl = useIntl();
  return (
    <Modal
      width="small"
      open={visModal}
      aria-label={intl.formatMessage({ id: 'KlageVurderingModal.ModalDescription' })}
      onClose={lukkModal}
    >
      <Modal.Body>
        <HStack gap="4">
          <CheckmarkCircleFillIcon className={styles.image} />
          <div>
            <BodyShort size="small">{intl.formatMessage({ id: 'KlageVurderingModal.VedtakOversendt' })}</BodyShort>
            <BodyShort size="small">{intl.formatMessage({ id: 'KlageVurderingModal.GoToSearchPage' })}</BodyShort>
          </div>
          <Button variant="primary" size="small" onClick={lukkModal} autoFocus type="button">
            {intl.formatMessage({ id: 'KlageVurderingModal.Ok' })}
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};

export default KlageBehandlingModal;
