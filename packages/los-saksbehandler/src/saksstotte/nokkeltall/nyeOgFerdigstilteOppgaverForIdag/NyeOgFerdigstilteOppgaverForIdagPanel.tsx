import React, { useMemo } from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Heading, VStack } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';
import { KodeverkType } from '@navikt/ft-kodeverk';

import { NyeOgFerdigstilteOppgaver } from '../../../typer/nyeOgFerdigstilteOppgaverTsType';
import useLosKodeverk from '../../../data/useLosKodeverk';
import { NyeOgFerdigstilteOppgaverForIdagGraf } from './NyeOgFerdigstilteOppgaverForIdagGraf';

export const getNyeOgFerdigstilteForIDag = (
  nyeOgFerdigstilte: NyeOgFerdigstilteOppgaver[] = [],
): NyeOgFerdigstilteOppgaver[] => {
  const iDag = dayjs();
  return nyeOgFerdigstilte.filter(oppgave => iDag.isSame(dayjs(oppgave.dato, ISO_DATE_FORMAT), 'day'));
};

interface Props {
  height: number;
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

export const NyeOgFerdigstilteOppgaverForIdagPanel = ({ height, nyeOgFerdigstilteOppgaver }: Props) => {
  const behandlingTyper = useLosKodeverk(KodeverkType.BEHANDLING_TYPE);

  const filtrerteNyeOgFerdigstilteOppgaver = useMemo(
    () => getNyeOgFerdigstilteForIDag(nyeOgFerdigstilteOppgaver),
    [nyeOgFerdigstilteOppgaver],
  );

  return (
    <VStack gap="1">
      <Heading size="xsmall">
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
