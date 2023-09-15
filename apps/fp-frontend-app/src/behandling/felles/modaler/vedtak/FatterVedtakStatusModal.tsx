import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Modal, Button, Label, BodyShort, HStack } from '@navikt/ds-react';
import { VerticalSpacer } from '@navikt/ft-ui-komponenter';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

import styles from './fatterVedtakStatusModal.module.css';

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
const FatterVedtakStatusModal: FunctionComponent<OwnProps> = ({ visModal = false, lukkModal, tekst }) => {
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

export default FatterVedtakStatusModal;
