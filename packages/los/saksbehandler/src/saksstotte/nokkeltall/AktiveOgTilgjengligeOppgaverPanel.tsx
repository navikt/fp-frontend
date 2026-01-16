import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengligeOppgaverGraf } from '@navikt/fp-los-felles';

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

  return <AktiveOgTilgjengligeOppgaverGraf aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />;
};
