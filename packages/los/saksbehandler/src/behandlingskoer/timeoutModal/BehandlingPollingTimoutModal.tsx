import { FormattedMessage, useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { Button, HStack, Label, Modal as NavModal } from '@navikt/ds-react';

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
      onClose={() => globalThis.location.reload()}
    >
      <NavModal.Header>
        <HStack gap="space-16" align="center">
          <ExclamationmarkTriangleFillIcon color="var(--ax-warning-600)" fontSize="2rem" aria-hidden />
          <Label size="medium">
            <FormattedMessage id="BehandlingPollingTimoutModal.TimeoutMelding" />
          </Label>
        </HStack>
      </NavModal.Header>
      <NavModal.Footer>
        <Button size="small" variant="primary" onClick={() => globalThis.location.reload()} autoFocus type="button">
          <FormattedMessage id="BehandlingPollingTimoutModal.Fortsett" />
        </Button>
      </NavModal.Footer>
    </NavModal>
  );
};
