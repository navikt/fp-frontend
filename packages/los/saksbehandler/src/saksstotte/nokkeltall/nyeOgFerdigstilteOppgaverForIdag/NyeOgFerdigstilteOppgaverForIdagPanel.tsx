import { FormattedMessage } from 'react-intl';

import { Heading, VStack } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import dayjs from 'dayjs';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { NyeOgFerdigstilteOppgaver } from '../../../typer/nyeOgFerdigstilteOppgaverTsType';
import { NyeOgFerdigstilteOppgaverForIdagGraf } from './NyeOgFerdigstilteOppgaverForIdagGraf';

interface Props {
  height: number;
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

export const NyeOgFerdigstilteOppgaverForIdagPanel = ({ height, nyeOgFerdigstilteOppgaver }: Props) => {
  const behandlingTyper = useLosKodeverk('BehandlingType');

  const filtrerteNyeOgFerdigstilteOppgaver = getNyeOgFerdigstilteForIDag(nyeOgFerdigstilteOppgaver);

  return (
    <VStack gap="space-4">
      <Heading size="xsmall" level="2">
        <FormattedMessage id="NyeOgFerdigstilteOppgaverForIdagPanel.IDag" />
      </Heading>
      <NyeOgFerdigstilteOppgaverForIdagGraf
        height={height}
        nyeOgFerdigstilteOppgaver={filtrerteNyeOgFerdigstilteOppgaver}
        behandlingTyper={behandlingTyper}
      />
    </VStack>
  );
};

const getNyeOgFerdigstilteForIDag = (
  nyeOgFerdigstilte: NyeOgFerdigstilteOppgaver[] = [],
): NyeOgFerdigstilteOppgaver[] => {
  const iDag = dayjs();
  return nyeOgFerdigstilte.filter(oppgave => iDag.isSame(dayjs(oppgave.dato, ISO_DATE_FORMAT), 'day'));
};
