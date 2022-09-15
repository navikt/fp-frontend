import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Column, Row } from 'nav-frontend-grid';
import { Modal, Button, BodyShort } from '@navikt/ds-react';
import { Image } from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './ankeBehandlingModal.less';

const tekstTilMelding = (erFerdigbehandlet: boolean, venterTrygderett: boolean): string => {
  if (erFerdigbehandlet && venterTrygderett) {
    return 'AnkeVurderingModal.SettVent';
  }
  if (erFerdigbehandlet && !venterTrygderett) {
    return 'AnkeVurderingModal.Ferdigbehandlet';
  }
  return 'AnkeVurderingModal.VedtakOversendt';
};

interface OwnProps {
  visModal?: boolean;
  lukkModal: () => void;
  erFerdigbehandlet: boolean;
  venterTrygderett: boolean;
}

/**
 * AnkeBehandlingModal
 *
 * Denne komponenten vises ved en ankevurdering hvor saksbehandler i aksjonspunkt '' velger at
 * ytelsesvedtaket skal stadfestes. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.
 */
const AnkeBehandlingModal: FunctionComponent<OwnProps> = ({
  visModal = false,
  lukkModal,
  erFerdigbehandlet,
  venterTrygderett,
}) => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open={visModal}
      aria-label={intl.formatMessage({ id: 'AnkeVurderingModal.ModalDescription' })}
      onClose={lukkModal}
      closeButton={false}
      shouldCloseOnOverlayClick={false}
    >
      <Modal.Content>
        <Row className="">
          <Column xs="1">
            <Image className={styles.image} src={innvilgetImageUrl} />
            <div className={styles.divider} />
          </Column>
          <Column xs="9">
            <BodyShort size="small">{intl.formatMessage({ id: tekstTilMelding(erFerdigbehandlet, venterTrygderett) })}</BodyShort>
            <BodyShort size="small">{intl.formatMessage({ id: 'AnkeVurderingModal.GoToSearchPage' })}</BodyShort>
          </Column>
          <Column xs="2">
            <Button
              variant="primary"
              size="small"
              className={styles.button}
              onClick={lukkModal}
              autoFocus
            >
              {intl.formatMessage({ id: 'AnkeVurderingModal.Ok' })}
            </Button>
          </Column>
        </Row>
      </Modal.Content>
    </Modal>
  );
};
export default AnkeBehandlingModal;
