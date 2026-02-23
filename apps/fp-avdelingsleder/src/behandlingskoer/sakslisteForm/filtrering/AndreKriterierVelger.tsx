import { useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';

import type { FormValues } from '../UtvalgskriterierForSakslisteForm';
import { AndreKriterieValgKnapp } from './AndreKriterieValgKnapp';
import { useAktuelleAndreKriterier } from './useAktuelleAndreKriterier';

export const AndreKriterierVelger = () => {
  const { watch, setValue } = useFormContext<FormValues>();
  const aktuelleKriterier = useAktuelleAndreKriterier();
  const half = Math.ceil(aktuelleKriterier.length / 2);

  useEffect(() => {
    const aktuelleKoder = new Set(aktuelleKriterier.map(k => k.kode));
    const andreKriterie = watch('andreKriterie');
    const nyInkluder = andreKriterie.inkluder.filter(k => aktuelleKoder.has(k));
    const nyEkskluder = andreKriterie.ekskluder.filter(k => aktuelleKoder.has(k));

    if (
      nyInkluder.length !== andreKriterie.inkluder.length ||
      nyEkskluder.length !== andreKriterie.ekskluder.length
    ) {
      setValue('andreKriterie', { inkluder: nyInkluder, ekskluder: nyEkskluder }, { shouldDirty: true });
    }
  }, [aktuelleKriterier]);

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
