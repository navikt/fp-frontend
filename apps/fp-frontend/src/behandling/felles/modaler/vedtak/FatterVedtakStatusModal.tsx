import { FormattedMessage } from 'react-intl';

import { CheckmarkCircleFillIcon } from '@navikt/aksel-icons';
import { Button, Dialog, HStack } from '@navikt/ds-react';

interface Props {
  visModal?: boolean;
  lukkModal: () => void;
  tekst: string;
}

/**
 * FatterVedtakStatusModal
 *
 * Denne modalen viser en modal etter at en saksbehandler har sendt et forslag på vedtak til beslutter
 * ved totrinnskontroll. Ved å trykke på knapp blir saksbehandler tatt tilbake til søkesiden.
 */
export const FatterVedtakStatusModal = ({ visModal = false, lukkModal, tekst }: Props) => {
  return (
    <Dialog open={visModal} size="small">
      <Dialog.Popup closeOnOutsideClick={false}>
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <HStack gap="space-8" align="center">
              <CheckmarkCircleFillIcon aria-hidden width={35} height={35} color="var(--ax-success-600)" />
              {tekst}
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <FormattedMessage id="FatterVedtakStatusModal.GoToSearchPage" />
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="primary" onClick={lukkModal} autoFocus type="button">
            <FormattedMessage id="FatterVedtakStatusModal.Ok" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
