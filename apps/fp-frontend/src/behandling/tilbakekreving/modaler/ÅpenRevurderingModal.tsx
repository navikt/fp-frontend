import { useEffect, useState } from 'react';
import { FormattedMessage } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Dialog, HStack } from '@navikt/ds-react';

export const ÅpenRevurderingModal = ({ harÅpenRevurdering }: { harÅpenRevurdering: boolean }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks -- Rapportert fordi den ikkje taklar norske bokstavar i komponentnamn
  const [open, setOpen] = useState(harÅpenRevurdering);

  // eslint-disable-next-line react-hooks/rules-of-hooks -- Rapportert fordi den ikkje taklar norske bokstavar i komponentnamn
  useEffect(() => {
    if (harÅpenRevurdering) {
      setOpen(true);
    }
  }, [harÅpenRevurdering]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <Dialog.Popup width="small" role="alertdialog" closeOnOutsideClick={false}>
        <Dialog.Header withClosebutton={false}>
          <Dialog.Title>
            <HStack gap="space-16" align="center">
              <ExclamationmarkTriangleFillIcon aria-hidden width={35} height={35} color="var(--ax-warning-700)" />
              <FormattedMessage id="ÅpenRevurderingModal.ApenRevurderingHeader" />
            </HStack>
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <BodyShort size="small">
            <FormattedMessage id="ÅpenRevurderingModal.ApenRevurdering" />
          </BodyShort>
        </Dialog.Body>
        <Dialog.Footer>
          <Button size="small" variant="primary" type="button" autoFocus onClick={() => setOpen(false)}>
            <FormattedMessage id="ÅpenRevurderingModal.Ok" />
          </Button>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
