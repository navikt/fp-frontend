import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, Dialog, HStack } from '@navikt/ds-react';

interface Props {
  showModal: boolean;
  closeEvent: () => void;
}

/**
 * HenlagtBehandlingModal
 *
 * Denne modalen vises etter en vilkarsvurdering der behandlingsstatusen
 * er satt til Iverksetter vedtak. Ved å trykke på knapp blir saksbehandler tatt tilbake til sokesiden.
 */
export const HenlagtBehandlingModal = ({ showModal, closeEvent }: Props) => {
  return (
    <Dialog open={showModal} onOpenChange={closeEvent} size="small">
      <Dialog.Popup closeOnOutsideClick={false}>
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <HStack gap="2" align="center">
              <CheckmarkCircleFillIcon aria-hidden width={35} height={35} color="var(--ax-success-600)" />
              <FormattedMessage id="HenlagtBehandlingModal.BehandlingenErHenlagt" />
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <FormattedMessage id="HenlagtBehandlingModal.RutetTilForsiden" />
        </Dialog.Body>
        <Dialog.Footer>
          <Button variant="primary" size="small" onClick={closeEvent} autoFocus type="button">
            <FormattedMessage id="HenlagtBehandlingModal.Ok" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
