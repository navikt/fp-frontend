import { useIntl } from 'react-intl';

import { Dialog } from '@navikt/ds-react';

import { useSnarvegerContext } from './SnarvegerContext';
import { SnarvegerOversikt } from './SnarvegerOversikt';

/**
 * Hjelp-modal som viser alle tastatursnarvegane. Opnast globalt med `?`.
 */
export const SnarvegerHjelpModal = () => {
  const intl = useIntl();
  const { hjelpAapen, settHjelpAapen } = useSnarvegerContext();

  return (
    <Dialog open={hjelpAapen} onOpenChange={() => settHjelpAapen(false)} size="medium">
      <Dialog.Popup width="medium">
        <Dialog.Header>
          <Dialog.Title>{intl.formatMessage({ id: 'Snarveger.HjelpModal.Tittel' })}</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <SnarvegerOversikt />
        </Dialog.Body>
      </Dialog.Popup>
    </Dialog>
  );
};
