import { useIntl } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, HStack, Label, Modal } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';

import styles from './fatterVedtakStatusModal.module.css';

interface Props {
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
export const FatterVedtakStatusModal = ({ visModal = false, lukkModal, tekst }: Props) => {
  const intl = useIntl();
  return (
    <Modal width="small" open={visModal} aria-label={tekst} onClose={lukkModal}>
      <Modal.Body>
        <HStack gap="6">
          <CheckmarkCircleFillIcon className={styles.image} />
          <div>
            <Label size="small">{tekst}</Label>
            <VerticalSpacer fourPx />
            <BodyShort size="small">{intl.formatMessage({ id: 'FatterVedtakStatusModal.GoToSearchPage' })}</BodyShort>
          </div>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            {intl.formatMessage({ id: 'FatterVedtakStatusModal.Ok' })}
          </Button>
        </HStack>
      </Modal.Body>
    </Modal>
  );
};
