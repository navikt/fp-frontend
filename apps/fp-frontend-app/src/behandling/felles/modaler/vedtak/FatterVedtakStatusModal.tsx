import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal, VStack } from '@navikt/ds-react';

import styles from './fatterVedtakStatusModal.module.css';

interface Props {
  visModal?: boolean;
  lukkModal: () => void;
  tekst: string;
}

/**
 * FatterVedtakStatusModal
 *
 * Denne modalen viser en modal etter at en saksbehandler har sendt et forslag på vedtak til beslutter
 * ved totrinnskontroll. Ved å trykke på knapp blir saksbehandler tatt tilbake til søkesiden.
 */
export const FatterVedtakStatusModal = ({ visModal = false, lukkModal, tekst }: Props) => {
  return (
    <Modal width="small" open={visModal} aria-label={tekst} onClose={lukkModal}>
      <Modal.Body>
        <HStack gap="space-24">
          <CheckmarkCircleFillIcon className={styles.image} />
          <VStack gap="space-4">
            <Label size="small">{tekst}</Label>
            <BodyShort size="small">
              <FormattedMessage id="FatterVedtakStatusModal.GoToSearchPage" />
            </BodyShort>
          </VStack>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            <FormattedMessage id="FatterVedtakStatusModal.Ok" />
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
