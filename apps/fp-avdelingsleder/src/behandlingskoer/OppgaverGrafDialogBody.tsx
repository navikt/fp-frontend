import { useQuery } from '@tanstack/react-query';

import { AktiveOgTilgjengligeOppgaverGraf } from '@navikt/fp-los-felles';

import { oppgaveFilterStatistikkOptions } from '../data/fplosAvdelingslederApi.ts';

interface Props {
  valgtSakslisteId: number;
  valgtAvdelingEnhet: string;
}

export const OppgaverGrafDialogBody = ({ valgtSakslisteId, valgtAvdelingEnhet }: Props) => {
  const aktiveOgLedigeTidslinje =
    useQuery({
      ...oppgaveFilterStatistikkOptions(valgtSakslisteId, valgtAvdelingEnhet),
    }).data ?? [];
  return <AktiveOgTilgjengligeOppgaverGraf aktiveOgLedigeTidslinje={aktiveOgLedigeTidslinje} />;
};
