import { FormattedMessage } from 'react-intl';

import { LineGraphDotIcon } from '@navikt/aksel-icons';
import { Button, Dialog } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengeligeOppgaverGraf } from '@navikt/fp-los-felles';

import { oppgaveFilterStatistikkOptions } from '../data/fplosAvdelingslederApi.ts';
import type { SakslisteAvdeling } from '../typer/sakslisteAvdelingTsType.ts';

interface Props {
  saksliste: SakslisteAvdeling;
  valgtAvdelingEnhet: string;
}

export const OppgaverGrafDialog = ({ valgtAvdelingEnhet, saksliste }: Props) => {
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button
          variant="secondary"
          size="small"
          icon={<LineGraphDotIcon title="Vis oppgave graf" fontSize="1.5rem" />}
          iconPosition="right"
          disabled={saksliste.gjeldendeStatistikk == null}
        ></Button>
      </Dialog.Trigger>
      <Dialog.Popup onClick={(e) => e.stopPropagation()}>
        <Dialog.Header>
          <Dialog.Title>
            <FormattedMessage id="OppgaverGrafDialog.Overskrift" />
          </Dialog.Title>
          <Dialog.Description>{saksliste.navn}</Dialog.Description>
        </Dialog.Header>
        <Dialog.Body>
          <OppgaverGrafDialogBody valgtSakslisteId={saksliste.sakslisteId} valgtAvdelingEnhet={valgtAvdelingEnhet} />
        </Dialog.Body>
        <Dialog.Footer>
          <Dialog.CloseTrigger>
            <Button>
              <FormattedMessage id="OppgaverGrafDialog.Lukk" />
            </Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};

const OppgaverGrafDialogBody = ({ valgtSakslisteId, valgtAvdelingEnhet }: { valgtSakslisteId: number; valgtAvdelingEnhet: string }) => {
  const aktiveOgLedigeTidslinje =
    useQuery({
      ...oppgaveFilterStatistikkOptions(valgtSakslisteId, valgtAvdelingEnhet),
    }).data ?? [];
  return <AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />;
};
