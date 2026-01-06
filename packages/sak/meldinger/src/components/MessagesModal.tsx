import { FormattedMessage } from 'react-intl';
import { Button, Dialog, HStack } from '@navikt/ds-react';
import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';

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
    <Dialog open={showModal} onOpenChange={closeEvent}>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>
            <HStack gap="2" align="center">
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
