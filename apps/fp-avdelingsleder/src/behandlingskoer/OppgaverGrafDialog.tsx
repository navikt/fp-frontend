import { FormattedMessage } from 'react-intl';

import { LineGraphDotIcon } from '@navikt/aksel-icons';
import { Button, Dialog } from '@navikt/ds-react';

import { OppgaverGrafDialogBody } from './OppgaverGrafDialogBody.tsx';

interface Props {
  sakslisteNavn?: string;
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
  harStatistikk?: boolean;
}

export const OppgaverGrafDialog = ({ sakslisteNavn, valgtSakslisteId, valgtAvdelingEnhet, harStatistikk }: Props) => {
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button
          variant="secondary"
          size="small"
          icon={<LineGraphDotIcon title="a11y-title" fontSize="1.5rem" />}
          iconPosition="right"
          disabled={!harStatistikk}
        ></Button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="AktiveOgTilgjengligeOppgaverGraf.Overskrift" />
          </Dialog.Title>
          <Dialog.Description>{sakslisteNavn}</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <OppgaverGrafDialogBody valgtSakslisteId={valgtSakslisteId} valgtAvdelingEnhet={valgtAvdelingEnhet} />
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button>Lukk</Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};
