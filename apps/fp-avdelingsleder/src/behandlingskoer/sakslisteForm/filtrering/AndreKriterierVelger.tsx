import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';
import { FormattedMessage } from 'react-intl';

import { HStack, Label, VStack } from '@navikt/ds-react';
import { useQuery } from '@tanstack/react-query';

import { kriterieFilterOptions } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';
import { AndreKriterieValgKnapp } from './AndreKriterieValgKnapp';

export const AndreKriterierVelger = () => {
  const { control, setValue } = useFormContext<FormValues>();
  const fagsakYtelseTyper = useWatch({ control, name: 'fagsakYtelseTyper' });
  const behandlingTyper = useWatch({ control, name: 'behandlingTyper' });
  const andreKriterie = useWatch({ control, name: 'andreKriterie' });
  const kriterieFilter = useQuery(kriterieFilterOptions()).data;

  const andreKriterierTyper = useLosKodeverk('AndreKriterierType').filter(akt => akt.kode !== 'TIL_BESLUTTER');

  const filtrerteAndreKriterierTyper = andreKriterierTyper.filter(akt => {
    if (!kriterieFilter) {
      return true;
    }

    const filter = kriterieFilter[akt.kode];

    const matcherYtelseType =
      fagsakYtelseTyper.length === 0 || filter.valgbarForYtelseTyper.some(yt => fagsakYtelseTyper.includes(yt));
    const matcherBehandlingType =
      behandlingTyper.length === 0 || filter.valgbarForBehandlingTyper.some(bt => behandlingTyper.includes(bt));

    return matcherYtelseType && matcherBehandlingType;
  });

  useEffect(() => {
    const tillatteKriterier = new Set(filtrerteAndreKriterierTyper.map(akt => akt.kode));

    const inkluder = andreKriterie.inkluder.filter(kode => kode === 'TIL_BESLUTTER' || tillatteKriterier.has(kode));
    const ekskluder = andreKriterie.ekskluder.filter(kode => kode === 'TIL_BESLUTTER' || tillatteKriterier.has(kode));

    if (inkluder.length !== andreKriterie.inkluder.length || ekskluder.length !== andreKriterie.ekskluder.length) {
      setValue('andreKriterie', { inkluder, ekskluder }, { shouldDirty: true });
    }
  }, [filtrerteAndreKriterierTyper, andreKriterie, setValue]);

  const half = Math.ceil(filtrerteAndreKriterierTyper.length / 2);

  return (
    <VStack gap="space-16" padding="space-20">
      <Label size="small">
        <FormattedMessage id="AndreKriterierVelger.AndreKriterier" />
      </Label>
      <HStack gap="space-32">
        <VStack gap="space-8">
          {filtrerteAndreKriterierTyper.slice(0, half).map(akt => (
            <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
          ))}
        </VStack>
        <VStack gap="space-8">
          {filtrerteAndreKriterierTyper.slice(half).map(akt => (
            <AndreKriterieValgKnapp key={akt.kode} andreKriterierType={akt} />
          ))}
        </VStack>
      </HStack>
    </VStack>
  );
};
