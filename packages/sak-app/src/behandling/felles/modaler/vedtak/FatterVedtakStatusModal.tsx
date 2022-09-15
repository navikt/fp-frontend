import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Modal, Button, Label } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './fatterVedtakStatusModal.less';

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
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={visModal}
      closeButton={false}
      aria-label={tekst}
      onClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
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
            <Label size="small">
              {tekst}
            </Label>
            <Label size="small">{intl.formatMessage({ id: 'FatterVedtakStatusModal.GoToSearchPage' })}</Label>
          </Column>
          <Column xs="2">
            <Button
              size="small"
              variant="primary"
              className={styles.button}
              onClick={lukkModal}
              autoFocus
            >
              {intl.formatMessage({ id: 'FatterVedtakStatusModal.Ok' })}
            </Button>
          </Column>
        </Row>
      </Modal.Content>
    </Modal>
  );
};

export default FatterVedtakStatusModal;
