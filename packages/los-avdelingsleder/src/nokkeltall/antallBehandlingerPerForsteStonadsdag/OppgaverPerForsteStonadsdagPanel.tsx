import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { oppgaverPerFørsteStønadsdagOptions } from '../../data/fplosAvdelingslederApi';
import { OppgaverPerForsteStonadsdagGraf } from './OppgaverPerForsteStonadsdagGraf';

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const OppgaverPerForsteStonadsdagPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: oppgaverPerForsteStonadsdag } = useQuery(oppgaverPerFørsteStønadsdagOptions(valgtAvdelingEnhet));

  return (
    <VStack gap="4">
      <Label size="small">
        <FormattedMessage id="OppgaverPerForsteStonadsdagPanel.FordeltPaForsteStonadsdag" />
      </Label>
      <OppgaverPerForsteStonadsdagGraf height={height} oppgaverPerForsteStonadsdag={oppgaverPerForsteStonadsdag} />
    </VStack>
  );
};
