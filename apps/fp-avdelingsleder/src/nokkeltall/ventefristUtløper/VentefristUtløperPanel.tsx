import { FormattedMessage } from 'react-intl';

import { Label, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { behandlingerFristUtløptOptions } from '../../data/fplosAvdelingslederApi';
import { VentefristUtløperGraf } from './VentefristUtløperGraf';

interface Props {
  height: number;
  valgtAvdelingEnhet: string;
}

export const VentefristUtløperPanel = ({ height, valgtAvdelingEnhet }: Props) => {
  const { data: behandlingerPaVent } = useQuery(behandlingerFristUtløptOptions(valgtAvdelingEnhet));

  return (
    <VStack gap="space-16">
      <Label>
        <FormattedMessage id="VentefristUtløperPanel.SattPaVent" />
      </Label>
      <VentefristUtløperGraf height={height} behandlingerPaVent={behandlingerPaVent} />
    </VStack>
  );
};
