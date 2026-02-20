import { FormattedMessage, useIntl } from 'react-intl';

import { LineGraphDotIcon } from '@navikt/aksel-icons';
import { Button, Dialog, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengeligeOppgaverGraf, LukkedeOppgaverPanel } from '@navikt/fp-los-felles';
import type { SakslisteDto } from '@navikt/fp-types';

import { oppgaveFilterStatistikkOptions } from '../data/fplosAvdelingslederApi';

interface Props {
  saksliste: SakslisteDto;
  valgtAvdelingEnhet: string;
}

export const OppgaverGrafDialog = ({ valgtAvdelingEnhet, saksliste }: Props) => {
  const intl = useIntl();
  return (
    <Dialog>
      <Dialog.Trigger>
        <Button
          variant="secondary"
          size="small"
          title={intl.formatMessage({ id: 'OppgaverGrafDialog.VisOppgaveGraf' })}
          icon={<LineGraphDotIcon aria-hidden />}
          disabled={saksliste.gjeldendeStatistikk == null}
        ></Button>
      </Dialog.Trigger>
      <Dialog.Popup onClick={e => e.stopPropagation()} width="large">
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
              <FormattedMessage id="Dialog.Lukk" />
            </Button>
          </Dialog.CloseTrigger>
        </Dialog.Footer>
      </Dialog.Popup>
    </Dialog>
  );
};

const OppgaverGrafDialogBody = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
}: {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}) => {
  const oppgaveFilterStatistikk =
    useQuery({
      ...oppgaveFilterStatistikkOptions(valgtSakslisteId, valgtAvdelingEnhet),
    }).data ?? [];
  return (
    <VStack gap="space-32">
      <AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={oppgaveFilterStatistikk} />
      <LukkedeOppgaverPanel køStatistikk={oppgaveFilterStatistikk} />
    </VStack>
  );
};
