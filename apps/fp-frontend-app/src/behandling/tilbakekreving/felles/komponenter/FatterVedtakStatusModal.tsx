import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Button, BodyShort, Modal } from '@navikt/ds-react';
import { FlexColumn, FlexContainer, FlexRow, Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '../../../../images/innvilget_valgt.svg';

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
    <Modal
      className={styles.modal}
      open={visModal}
      closeButton={false}
      aria-label={tekst}
      onClose={lukkModal}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} alt={tekst} src={innvilgetImageUrl} />
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{tekst}</BodyShort>
              <BodyShort size="small">{intl.formatMessage({ id: 'FatterVedtakStatusModal.GoToSearchPage' })}</BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
                {intl.formatMessage({ id: 'FatterVedtakStatusModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

export default FatterVedtakStatusModal;
