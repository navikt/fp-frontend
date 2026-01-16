import { FormattedMessage } from 'react-intl';

import { Heading, HStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengligeOppgaverGrafModal } from '@navikt/fp-los-felles';

import { oppgaveKøStatistikkOptions } from '../../data/fplosSaksbehandlerApi.ts';

interface Props {
  valgtSakslisteId: number;
}

export const AktiveOgTilgjengligeOppgaverPanel = ({ valgtSakslisteId }: Props) => {
  // Må flyttes opp trolig hvis dette skal være felles?
  const aktiveOgLedigeTidslinje =
    useQuery({
      ...oppgaveKøStatistikkOptions(valgtSakslisteId),
    }).data ?? [];

  return (
    <HStack justify="space-between">
      <Heading size="xsmall" level="4">
        <FormattedMessage id="AktiveOgTilgjengligeOppgaverGraf.Overskrift" />
      </Heading>
      <AktiveOgTilgjengligeOppgaverGrafModal aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />
    </HStack>
  );
};;
