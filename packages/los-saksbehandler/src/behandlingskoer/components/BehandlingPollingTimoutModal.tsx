import React, { FunctionComponent } from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, Label, Modal as NavModal } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import styles from './behandlingPollingTimoutModal.module.css';

/**
 * BehandlingPollingTimoutModal
 *
 * Presentasjonskomponent. Modal som vises når en har pollet etter behandlinger et gitt antall ganger (uten oppdateringer)
 */
const BehandlingPollingTimoutModal: FunctionComponent = () => {
  const intl = useIntl();
  return (
    <NavModal
      className={styles.modal}
      open
      aria-label={intl.formatMessage({ id: 'BehandlingPollingTimoutModal.TimeoutMelding' })}
      onClose={() => window.location.reload()}
    >
      <NavModal.Body>
        <FlexContainer>
          <FlexRow>
            <FlexColumn>
              <ExclamationmarkTriangleFillIcon
                className={styles.image}
                title={intl.formatMessage({ id: 'BehandlingPollingTimoutModal.TimeoutMelding' })}
              />
            </FlexColumn>
            <FlexColumn className={styles.text}>
              <Label size="small">
                <FormattedMessage id="BehandlingPollingTimoutModal.TimeoutMelding" />
              </Label>
            </FlexColumn>
          </FlexRow>
        </FlexContainer>
      </NavModal.Body>
      <NavModal.Footer>
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
      </NavModal.Footer>
    </NavModal>
  );
};

export default BehandlingPollingTimoutModal;
