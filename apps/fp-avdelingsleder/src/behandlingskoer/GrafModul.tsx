import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengligeOppgaverGrafDialog } from '@navikt/fp-los-felles';

import { oppgaveKøStatistikkOptions } from '../data/fplosAvdelingslederApi.ts';

interface Props {
  valgtSakslisteId: number;
}

export const GrafModul = ({ valgtSakslisteId }: Props) => {
  const aktiveOgLedigeTidslinje =
    useQuery({
      ...oppgaveKøStatistikkOptions(valgtSakslisteId),
    }).data ?? [];

  return <AktiveOgTilgjengligeOppgaverGrafDialog aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} utenTittel={true} />;
};
