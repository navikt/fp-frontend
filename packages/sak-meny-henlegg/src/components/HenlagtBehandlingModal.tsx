import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  BodyShort, Modal, Button, Label,
} from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '../images/innvilget_valgt.svg';

import styles from './henlagtBehandlingModal.module.css';

interface OwnProps {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * HenlagtBehandlingModal
 *
 * Presentasjonskomponent. Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.
 */
const HenlagtBehandlingModal: FunctionComponent<OwnProps> = ({
  showModal,
  closeEvent,
}) => {
  const intl = useIntl();

  return (
    <Modal
      className={styles.modal}
      open={showModal}
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'HenlagtBehandlingModal.ModalDescription' })}
      onClose={closeEvent}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} alt={intl.formatMessage({ id: 'HenlagtBehandlingModal.Henlagt' })} src={innvilgetImageUrl} />
            </FlexColumn>
            <FlexColumn>
              <Label size="small"><FormattedMessage id="HenlagtBehandlingModal.BehandlingenErHenlagt" /></Label>
              <BodyShort size="small"><FormattedMessage id="HenlagtBehandlingModal.RutetTilForsiden" /></BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button
                variant="primary"
                size="small"
                onClick={closeEvent}
                autoFocus
                type="button"
              >
                {intl.formatMessage({ id: 'HenlagtBehandlingModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

export default HenlagtBehandlingModal;
