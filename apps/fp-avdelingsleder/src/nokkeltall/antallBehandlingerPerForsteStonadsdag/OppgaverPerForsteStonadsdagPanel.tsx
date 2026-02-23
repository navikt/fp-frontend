import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { oppgaverPerFørsteStønadsdagMånedOptions } from '../../data/fplosAvdelingslederApi';
import { OppgaverPerForsteStonadsdagGraf } from './OppgaverPerForsteStonadsdagGraf';

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const OppgaverPerForsteStonadsdagPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: oppgaverPerForsteStonadsdag } = useQuery(oppgaverPerFørsteStønadsdagMånedOptions(valgtAvdelingEnhet));

  return (
    <VStack gap="space-16">
      <Label>
        <FormattedMessage id="OppgaverPerForsteStonadsdagPanel.FordeltPaForsteStonadsdag" />
      </Label>
      <OppgaverPerForsteStonadsdagGraf height={height} oppgaverPerForsteStonadsdag={oppgaverPerForsteStonadsdag} />
    </VStack>
  );
};
