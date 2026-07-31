import { FormattedMessage } from 'react-intl';

import { Button, Dialog, Heading } from '@navikt/ds-react';

interface Props {
  text: string;
  cancelEvent: () => void;
  submitCallback: () => void;
  isPending?: boolean;
}

/**
 * MerkSomHasterModal
 *
 * Denne modalen vises når saksbehandler velger å merke en sak som haster i behandlingsmenyen.
 * OK/Avbryt-knappene deaktiveres mens lagringen pågår, slik at man ikke kan trigge en dobbel
 * innsending mot fpsak (f.eks. ved raske dobbeltklikk).
 */
export const MerkSomHasterModal = ({ text, cancelEvent, submitCallback, isPending }: Props) => (
  <Dialog open onOpenChange={cancelEvent} size="small">
    <Dialog.Popup width="small" aria-label={text}>
      <Dialog.Body>
        <Heading size="small" level="2">
          {text}
        </Heading>
      </Dialog.Body>
      <Dialog.Footer>
        <Button
          size="small"
          variant="primary"
          onClick={submitCallback}
          loading={isPending}
          disabled={isPending}
          autoFocus
          type="button"
        >
          <FormattedMessage id="MenyMerkSomHasterIndex.Ok" />
        </Button>
        <Button size="small" variant="secondary" onClick={cancelEvent} disabled={isPending} type="button">
          <FormattedMessage id="MenyMerkSomHasterIndex.Avbryt" />
        </Button>
      </Dialog.Footer>
    </Dialog.Popup>
  </Dialog>
);
