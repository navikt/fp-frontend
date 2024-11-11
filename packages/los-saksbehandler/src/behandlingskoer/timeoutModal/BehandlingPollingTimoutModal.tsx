import React from 'react';
import { useIntl, FormattedMessage } from 'react-intl';
import { Button, HStack, Label, Modal as NavModal } from '@navikt/ds-react';
import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';

import styles from './behandlingPollingTimoutModal.module.css';

/**
 * BehandlingPollingTimoutModal
 *
 * Presentasjonskomponent. Modal som vises når en har pollet etter behandlinger et gitt antall ganger (uten oppdateringer)
 */
export const BehandlingPollingTimoutModal = () => {
  const intl = useIntl();
  return (
    <NavModal
      open
      aria-label={intl.formatMessage({ id: 'BehandlingPollingTimoutModal.TimeoutMelding' })}
      onClose={() => window.location.reload()}
    >
      <NavModal.Body>
        <HStack gap="4" align="center">
          <ExclamationmarkTriangleFillIcon
            className={styles.image}
            title={intl.formatMessage({ id: 'BehandlingPollingTimoutModal.TimeoutMelding' })}
          />
          <Label size="small">
            <FormattedMessage id="BehandlingPollingTimoutModal.TimeoutMelding" />
          </Label>
        </HStack>
      </NavModal.Body>
      <NavModal.Footer>
        <Button size="small" variant="secondary" onClick={() => window.location.reload()} autoFocus type="button">
          <FormattedMessage id="BehandlingPollingTimoutModal.Oppfrisk" />
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};
