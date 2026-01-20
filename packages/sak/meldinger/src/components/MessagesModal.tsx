import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, Dialog, HStack } from '@navikt/ds-react';

interface Props {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * MessagesModal
 *
 * Denne modalen vises etter at et brev har blitt bestilt.
 * Ved å trykke på knapp blir fritekst-feltet tømt.
 */
export const MessagesModal = ({ showModal, closeEvent }: Props) => {
  return (
    <Dialog open={showModal} onOpenChange={closeEvent} size="small">
      <Dialog.Popup width="small">
        <Dialog.Header>
          <Dialog.Title>
            <HStack gap="space-8" align="center">
              <CheckmarkCircleFillIcon aria-hidden width={35} height={35} color="var(--ax-success-600)" />
              <FormattedMessage id="MessagesModal.text" />
            </HStack>
          </Dialog.Title>
        </Dialog.Header>

        <Dialog.Footer>
          <Button size="small" variant="primary" onClick={closeEvent} autoFocus type="button">
            <FormattedMessage id="MessagesModal.OK" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
