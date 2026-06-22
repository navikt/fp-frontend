import { FormattedMessage } from 'react-intl';

import { Dialog } from '@navikt/ds-react';

import { useSnarvegerContext } from './SnarvegerContext';
import { SnarvegerOversikt } from './SnarvegerOversikt';

/**
 * Hjelp-modal som viser alle tastatursnarvegane. Opnast globalt med `?`.
 */
export const SnarvegerHjelpModal = () => {
  const { snarveiModalÅpen, settSnarveiModalÅpen } = useSnarvegerContext();

  return (
    <Dialog open={snarveiModalÅpen} onOpenChange={settSnarveiModalÅpen} size="medium">
      <Dialog.Popup width="medium">
        <Dialog.Header>
        <Dialog.Title>
          <FormattedMessage id="Snarveger.HjelpModal.Tittel" />
        </Dialog.Title>
      </Dialog.Header>
        <Dialog.Body>
          <SnarvegerOversikt />
        </Dialog.Body>
      </Dialog.Popup>
    </Dialog>
  );
};
