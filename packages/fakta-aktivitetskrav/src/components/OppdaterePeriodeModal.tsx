import React, { FunctionComponent } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import {
  Button, BodyShort, Modal, Heading,
} from '@navikt/ds-react';

import advarselImageUrl from '@fpsak-frontend/assets/images/advarsel.svg';

import {
  FlexColumn, FlexContainer, FlexRow, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';

import styles from './oppdaterePeriodeModal.less';

interface OwnProps {
  cancel: () => void;
  submit: () => void;
}

const OppdaterePeriodeModal: FunctionComponent<OwnProps> = ({
  cancel,
  submit,
}) => {
  const intl = useIntl();
  return (
    <Modal
      closeButton={false}
      open
      aria-label={intl.formatMessage({ id: 'OppdaterePeriodeModal.OppdaterePerioden' })}
      onClose={cancel}
    >
      <Modal.Content>
        <Heading size="small">
          <FormattedMessage id="OppdaterePeriodeModal.OppdaterePerioden" />
        </Heading>
        <VerticalSpacer sixteenPx />
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <Image
                alt={intl.formatMessage({ id: 'OppdaterePeriodeModal.Nullstilles' })}
                src={advarselImageUrl}
                className={styles.image}
              />
            </FlexColumn>
            <FlexColumn className={styles.text}>
              <BodyShort size="small">
                <FormattedMessage id="OppdaterePeriodeModal.Nullstilles" />
              </BodyShort>
            </FlexColumn>
          </FlexRow>
          <VerticalSpacer sixteenPx />
          <FlexRow>
            <FlexColumn>
              <Button
                size="small"
                variant="secondary"
                onClick={submit}
                autoFocus
                type="button"
              >
                <FormattedMessage id="OppdaterePeriodeModal.Oppdater" />
              </Button>
            </FlexColumn>
            <FlexColumn>
              <Button
                size="small"
                variant="tertiary"
                onClick={cancel}
                type="button"
              >
                <FormattedMessage id="OppdaterePeriodeModal.Avbryt" />
              </Button>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </Modal.Content>
    </Modal>
  );
};

export default OppdaterePeriodeModal;
