import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Button, BodyShort, Modal } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '../../../images/innvilget_valgt.svg';

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
const KlageBehandlingModal: FunctionComponent<OwnProps> = ({
  visModal = false,
  lukkModal,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={visModal}
      aria-label={intl.formatMessage({ id: 'KlageVurderingModal.ModalDescription' })}
      onClose={lukkModal}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} src={innvilgetImageUrl} />
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{intl.formatMessage({ id: 'KlageVurderingModal.VedtakOversendt' })}</BodyShort>
              <BodyShort size="small">{intl.formatMessage({ id: 'KlageVurderingModal.GoToSearchPage' })}</BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button
                variant="primary"
                size="small"
                onClick={lukkModal}
                autoFocus
                type="button"
              >
                {intl.formatMessage({ id: 'KlageVurderingModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

export default KlageBehandlingModal;
