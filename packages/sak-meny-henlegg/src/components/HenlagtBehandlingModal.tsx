import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import {
  BodyShort, Modal, Button, Label,
} from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './henlagtBehandlingModal.less';

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
const HenlagtBehandlingModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  showModal,
  closeEvent,
}) => (
  <Modal
    className={styles.modal}
    open={showModal}
    closeButton={false}
    aria-label={intl.formatMessage({ id: 'HenlagtBehandlingModal.ModalDescription' })}
    onClose={closeEvent}
    shouldCloseOnOverlayClick={false}
  >
    <Modal.Content>
      <Row>
        <Column xs="1">
          <Image className={styles.image} alt={intl.formatMessage({ id: 'HenlagtBehandlingModal.Henlagt' })} src={innvilgetImageUrl} />
          <div className={styles.divider} />
        </Column>
        <Column xs="9">
          <Label size="small"><FormattedMessage id="HenlagtBehandlingModal.BehandlingenErHenlagt" /></Label>
          <BodyShort size="small"><FormattedMessage id="HenlagtBehandlingModal.RutetTilForsiden" /></BodyShort>
        </Column>
        <Column xs="2">
          <Button
            variant="primary"
            size="small"
            className={styles.button}
            onClick={closeEvent}
            autoFocus
          >
            {intl.formatMessage({ id: 'HenlagtBehandlingModal.Ok' })}
          </Button>
        </Column>
      </Row>
    </Modal.Content>
  </Modal>
);

export default injectIntl(HenlagtBehandlingModal);
