import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { BodyShort, Modal, Button, Label } from '@navikt/ds-react';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './henlagtBehandlingModal.module.css';

interface Props {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * HenlagtBehandlingModal
 *
 * Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.
 */
export const HenlagtBehandlingModal = ({ showModal, closeEvent }: Props) => {
  const intl = useIntl();

  return (
    <Modal
      className={styles.modal}
      open={showModal}
      aria-label={intl.formatMessage({ id: 'HenlagtBehandlingModal.ModalDescription' })}
      onClose={closeEvent}
    >
      <Modal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <CheckmarkCircleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'HenlagtBehandlingModal.Henlagt' })}
              />
            </FlexColumn>
            <FlexColumn>
              <Label size="small">
                <FormattedMessage id="HenlagtBehandlingModal.BehandlingenErHenlagt" />
              </Label>
              <BodyShort size="small">
                <FormattedMessage id="HenlagtBehandlingModal.RutetTilForsiden" />
              </BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button variant="primary" size="small" onClick={closeEvent} autoFocus type="button">
                {intl.formatMessage({ id: 'HenlagtBehandlingModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Body>
    </Modal>
  );
};
