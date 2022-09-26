import React, { FunctionComponent } from 'react';
import { useIntl } from 'react-intl';
import { Modal, Button, BodyShort } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image,
} from '@navikt/ft-ui-komponenter';

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
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image className={styles.image} src={innvilgetImageUrl} />
            </FlexColumn>
            <FlexColumn>
              <BodyShort size="small">{intl.formatMessage({ id: tekstTilMelding(erFerdigbehandlet, venterTrygderett) })}</BodyShort>
              <BodyShort size="small">{intl.formatMessage({ id: 'AnkeVurderingModal.GoToSearchPage' })}</BodyShort>
            </FlexColumn>
            <FlexColumn className={styles.button}>
              <Button
                variant="primary"
                size="small"
                onClick={lukkModal}
                autoFocus
                type="button"
              >
                {intl.formatMessage({ id: 'AnkeVurderingModal.Ok' })}
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};
export default AnkeBehandlingModal;
