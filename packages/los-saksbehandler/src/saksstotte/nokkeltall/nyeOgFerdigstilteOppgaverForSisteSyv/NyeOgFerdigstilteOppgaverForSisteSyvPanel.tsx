import React from 'react';
import dayjs from 'dayjs';
import { FormattedMessage } from 'react-intl';
import { Heading, VStack } from '@navikt/ds-react';
import { ISO_DATE_FORMAT } from '@navikt/ft-utils';

import { NyeOgFerdigstilteOppgaver } from '../../../typer/nyeOgFerdigstilteOppgaverTsType';
import { NyeOgFerdigstilteOppgaverForSisteSyvGraf } from './NyeOgFerdigstilteOppgaverForSisteSyvGraf';

export const getNyeOgFerdigstilteForSisteSyvDager = (
  nyeOgFerdigstilte: NyeOgFerdigstilteOppgaver[] = [],
): NyeOgFerdigstilteOppgaver[] => {
  const iDag = dayjs().startOf('day');
  return nyeOgFerdigstilte.filter(oppgave => iDag.isAfter(dayjs(oppgave.dato, ISO_DATE_FORMAT)));
};

interface Props {
  height: number;
  nyeOgFerdigstilteOppgaver?: NyeOgFerdigstilteOppgaver[];
}

export const NyeOgFerdigstilteOppgaverForSisteSyvPanel = ({ height, nyeOgFerdigstilteOppgaver }: Props) => {
  return (
    <VStack gap="1">
      <Heading size="xsmall">
        <FormattedMessage id="NyeOgFerdigstilteOppgaverForSisteSyvPanel.SisteSyv" />
      </Heading>
      <NyeOgFerdigstilteOppgaverForSisteSyvGraf
        height={height}
        nyeOgFerdigstilteOppgaver={getNyeOgFerdigstilteForSisteSyvDager(nyeOgFerdigstilteOppgaver)}
      />
    </VStack>
  );
};
