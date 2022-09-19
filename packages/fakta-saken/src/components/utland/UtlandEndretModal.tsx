import React, { FunctionComponent } from 'react';
import { FormattedMessage, injectIntl, WrappedComponentProps } from 'react-intl';
import { Modal, BodyShort, Button } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import innvilgetImageUrl from '@fpsak-frontend/assets/images/innvilget_valgt.svg';

import styles from './utlandEndretModal.less';

interface OwnProps {
  visModal: boolean;
  lagreOgLukk: (data?: any) => void;
}

const UtlandEndretModal: FunctionComponent<OwnProps & WrappedComponentProps> = ({
  intl,
  visModal,
  lagreOgLukk,
}) => (
  <Modal
    className={styles.modal}
    open={visModal}
    aria-label={intl.formatMessage({ id: 'UtlandEndretModal.UtlandetEndret' })}
    onClose={lagreOgLukk}
    closeButton={false}
    shouldCloseOnOverlayClick={false}
  >
    <Modal.Content>
      <FlexContainer wrap>
        <FlexRow>
          <FlexColumn className={styles.iconContainer}>
            <Image className={styles.icon} src={innvilgetImageUrl} alt={intl.formatMessage({ id: 'UtlandEndretModal.Ok' })} />
          </FlexColumn>
          <FlexColumn className={styles.fullWidth}>
            <BodyShort size="small" className={styles.modalLabel}>
              <FormattedMessage id="UtlandEndretModal.UtlandEndret" />
            </BodyShort>
          </FlexColumn>
          <FlexColumn className={styles.right}>
            <VerticalSpacer sixteenPx />
            <Button
              size="small"
              variant="primary"
              className={styles.button}
              onClick={lagreOgLukk}
              type="button"
            >
              <FormattedMessage id="UtlandEndretModal.Ok" />
            </Button>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </Modal.Content>
  </Modal>
);

export default injectIntl(UtlandEndretModal);
