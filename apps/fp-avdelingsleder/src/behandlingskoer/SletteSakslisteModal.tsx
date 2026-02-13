import { FormattedMessage } from 'react-intl';

import { Button, Dialog } from '@navikt/ds-react';

import type { SakslisteAvdeling } from '@navikt/fp-types';

interface Props {
  valgtSaksliste: SakslisteAvdeling;
  cancel: () => void;
  submit: (saksliste: SakslisteAvdeling) => void;
}

/**
 * SletteSakslisteModal
 *
 * Modal som lar en avdelingsleder fjerne sakslister.
 */
export const SletteSakslisteModal = ({ valgtSaksliste, cancel, submit }: Props) => {
  return (
    <Dialog size="small" open onOpenChange={cancel}>
      <Dialog.Popup closeOnOutsideClick={false} width="small">
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage
              id="SletteSakslisteModal.SletteSaksliste"
              values={{ sakslisteNavn: valgtSaksliste.navn }}
            />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Footer>
          <Button size="small" variant="secondary" onClick={cancel} type="button">
            <FormattedMessage id="Label.Nei" />
          </Button>
          <Button size="small" variant="primary" onClick={() => submit(valgtSaksliste)} autoFocus type="button">
            <FormattedMessage id="Label.Ja" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
