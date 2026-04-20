import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { BarChartIcon, LineGraphDotIcon } from '@navikt/aksel-icons';
import { BodyShort, Button, Dialog, HStack, ToggleGroup, VStack } from '@navikt/ds-react';
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
          title={intl.formatMessage({ id: 'OppgaverGrafDialog.VisOppgaveGraf' }, { sakslisteNavn: saksliste.navn })}
          icon={<LineGraphDotIcon aria-hidden />}
          disabled={saksliste.gjeldendeStatistikk === undefined}
        ></Button>
      </Dialog.Trigger>
      <Dialog.Popup onClick={e => e.stopPropagation()} width="large">
        <Dialog.Header>
          <Dialog.Title>{saksliste.navn}</Dialog.Title>
        </Dialog.Header>
        <Dialog.Body>
          <VStack gap="space-16">
            <OppgaverGrafDialogBody valgtSakslisteId={saksliste.sakslisteId} valgtAvdelingEnhet={valgtAvdelingEnhet} />
          </VStack>
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

type VisningType = 'aktive' | 'lukkede';

const OppgaverGrafDialogBody = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
}: {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}) => {
  const intl = useIntl();
  const { data: køStatistikk, isPending } = useQuery({
    ...oppgaveFilterStatistikkOptions(valgtSakslisteId, valgtAvdelingEnhet),
  });
  const [visningType, setVisningType] = useState<VisningType>();

  return (
    <>
      <HStack>
        <ToggleGroup
          value={visningType}
          data-color="neutral"
          onChange={value => setVisningType(value as VisningType)}
          size="small"
        >
          <ToggleGroup.Item
            icon={<LineGraphDotIcon aria-hidden />}
            value={'aktive' satisfies VisningType}
            label={intl.formatMessage({ id: 'OppgaverGrafDialog.AktiveOgLedige' })}
          />
          <ToggleGroup.Item
            icon={<BarChartIcon aria-hidden />}
            value={'lukkede' satisfies VisningType}
            label={intl.formatMessage({ id: 'OppgaverGrafDialog.LukkedeOppgaver' })}
          />
        </ToggleGroup>
      </HStack>
      {visningType === undefined && (
        <BodyShort size="small">
          <FormattedMessage id="OppgaverGrafDialog.VelgGraf" />
        </BodyShort>
      )}
      {visningType === 'aktive' && <AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={køStatistikk ?? []} />}
      {visningType === 'lukkede' && <LukkedeOppgaverPanel køStatistikk={køStatistikk} isPending={isPending} />}
    </>
  );
};
