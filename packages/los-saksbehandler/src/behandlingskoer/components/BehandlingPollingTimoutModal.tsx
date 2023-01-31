import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, Label } from '@navikt/ds-react';
import {
  FlexColumn, FlexContainer, FlexRow, FloatRight, Image, VerticalSpacer,
} from '@navikt/ft-ui-komponenter';
import { Modal } from '@navikt/fp-los-felles';

import advarselImageUrl from '../../images/advarsel.svg';

import styles from './behandlingPollingTimoutModal.less';

/**
 * BehandlingPollingTimoutModal
 *
 * Presentasjonskomponent. Modal som vises når en har pollet etter behandlinger et gitt antall ganger (uten oppdateringer)
 */
const BehandlingPollingTimoutModal: FunctionComponent = () => {
  const intl = useIntl();
  return (
    <Modal
      className={styles.modal}
      open
      closeButton={false}
      aria-label={intl.formatMessage({ id: 'BehandlingPollingTimoutModal.TimeoutMelding' })}
      onClose={() => window.location.reload()}
    >
      <FlexContainer>
        <FlexRow>
          <FlexColumn>
            <Image
              className={styles.image}
              alt={intl.formatMessage({ id: 'BehandlingPollingTimoutModal.TimeoutMelding' })}
              src={advarselImageUrl}
            />
          </FlexColumn>
          <FlexColumn className={styles.text}>
            <Label size="small"><FormattedMessage id="BehandlingPollingTimoutModal.TimeoutMelding" /></Label>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
      <VerticalSpacer sixteenPx />
      <FloatRight>
        <Button
          className={styles.submitButton}
          size="small"
          variant="secondary"
          onClick={() => window.location.reload()}
          autoFocus
          type="button"
        >
          {intl.formatMessage({ id: 'BehandlingPollingTimoutModal.Oppfrisk' })}
        </Button>
        <VerticalSpacer sixteenPx />
      </FloatRight>
    </Modal>
  );
};

export default BehandlingPollingTimoutModal;
