import { useState } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';

import { LineGraphDotIcon } from '@navikt/aksel-icons';
import { BodyLong, BodyShort, Button, Dialog, HStack, ToggleGroup, VStack } from '@navikt/ds-react';
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

type VisningType = 'intro' | 'aktive' | 'lukkede';

const OppgaverGrafDialogBody = ({
  valgtSakslisteId,
  valgtAvdelingEnhet,
}: {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}) => {
  const køStatistikk =
    useQuery({
      ...oppgaveFilterStatistikkOptions(valgtSakslisteId, valgtAvdelingEnhet),
    }).data ?? [];
  const [visningType, setVisningType] = useState<VisningType>('intro');
  const aktiveOgLedige = 'Aktive og ledige oppgaver';
  const lukkedeOppgaverTittel = 'Lukkede oppgaver';

  return (
    <>
      <HStack justify="end">
        <ToggleGroup
          value={visningType}
          data-color="neutral"
          onChange={value => setVisningType(value as VisningType)}
          size="small"
        >
          <ToggleGroup.Item value="intro" label="Intro" />
          <ToggleGroup.Item value="aktive" label={aktiveOgLedige} />
          <ToggleGroup.Item value="lukkede" label={lukkedeOppgaverTittel} />
        </ToggleGroup>
      </HStack>
      {visningType === 'intro' && <BodyShort size="small">Velg en av grafene.</BodyShort>}
      {visningType === 'aktive' && (
        <>
          <AktiveOgTilgjengeligeOppgaverGraf aktiveOgLedigeTidslinje={køStatistikk} />
        </>
      )}
      {visningType === 'lukkede' && (
        <>
          <BodyLong size="small">
            Dette fossefallsdiagrammet er et ukesdiagram som viser antall lukkede oppgaver per dag. Vi tenker dette gir
            et bilde av aktivitet på køen.
          </BodyLong>
          <LukkedeOppgaverPanel køStatistikk={køStatistikk} />
        </>
      )}
    </>
  );
};
