import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengligeOppgaverGrafModal } from '@navikt/fp-los-felles';

import { oppgaveKøStatistikkOptions } from '../data/fplosAvdelingslederApi.ts';

interface Props {
  valgtSakslisteId: number;
}

export const GrafModul = ({ valgtSakslisteId }: Props) => {
  const aktiveOgLedigeTidslinje =
    useQuery({
      ...oppgaveKøStatistikkOptions(valgtSakslisteId),
    }).data ?? [];

  return <AktiveOgTilgjengligeOppgaverGrafModal aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />;
};
