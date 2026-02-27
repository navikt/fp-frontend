import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';

import { AndreKriterieValgKnapp } from './AndreKriterieValgKnapp';
import { useAktuelleAndreKriterier } from './useAktuelleAndreKriterier';

export const AndreKriterierVelger = () => {
  const aktuelleKriterier = useAktuelleAndreKriterier();
  const half = Math.ceil(aktuelleKriterier.length / 2);

  return (
    <VStack gap="space-16" padding="space-20">
      <Label size="small">
        <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
      </Label>
      <HStack gap="space-32">
        <VStack gap="space-8">
          {aktuelleKriterier.slice(0, half).map(akt => (
            <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
          ))}
        </VStack>
        <VStack gap="space-8">
          {aktuelleKriterier.slice(half).map(akt => (
            <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
};
