import { FormattedMessage } from 'react-intl';

import { LineGraphDotIcon } from '@navikt/aksel-icons';
import { Button, Dialog } from '@navikt/ds-react';

import type { OppgaveFilterStatistikk } from '../typer/oppgaveFilterStatistikk.ts';
import { AktiveOgTilgjengligeOppgaverGraf } from './AktiveOgTilgjengligeOppgaverGraf.tsx';

interface Props {
  aktiveOgLedigeTidslinje: OppgaveFilterStatistikk[];
  utenTittel?: boolean;
}

export const AktiveOgTilgjengligeOppgaverGrafDialog = ({ aktiveOgLedigeTidslinje, utenTittel = false }: Props) => {
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button
          variant="secondary"
          size="small"
          icon={<LineGraphDotIcon title="a11y-title" fontSize="1.5rem" />}
          iconPosition="right"
        >
          {utenTittel ? null : <FormattedMessage id="AktiveOgTilgjengligeOppgaverGraf.Overskrift" />}
        </Button>
      </Dialog.Trigger>
      <Dialog.Popup>
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="AktiveOgTilgjengligeOppgaverGraf.Overskrift" />
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <AktiveOgTilgjengligeOppgaverGraf aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />
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
