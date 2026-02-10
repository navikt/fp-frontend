import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';

import { useLosKodeverk } from '../../../data/useLosKodeverk';
import { AndreKriterieValgKnapp } from './AndreKriterieValgKnapp';

export const AndreKriterierVelger = () => {
  const andreKriterierTyper = useLosKodeverk('AndreKriterierType').filter(akt => akt.kode !== 'TIL_BESLUTTER');
  const half = Math.ceil(andreKriterierTyper.length / 2);

  return (
    <VStack gap="space-16" padding="space-20">
      <Label size="small">
        <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
      </Label>
      <HStack gap="space-32">
        <VStack gap="space-8">
          {andreKriterierTyper.slice(0, half).map(akt => (
            <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
          ))}
        </VStack>
        <VStack gap="space-8">
          {andreKriterierTyper.slice(half).map(akt => (
            <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
};
