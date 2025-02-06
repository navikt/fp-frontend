import { useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Modal } from '@navikt/ds-react';

import styles from './klageBehandlingModal.module.css';

interface Props {
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
export const KlageBehandlingModal = ({ visModal = false, lukkModal }: Props) => {
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
