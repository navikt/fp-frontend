import { useEffect } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { kriterieFilterOptions } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

export const useAktuelleAndreKriterier = (): LosKodeverkMedNavn<'AndreKriterierType'>[] => {
  const { control, getValues, setValue } = useFormContext<FormValues>();

  const fagsakYtelseTyper = useWatch({ control, name: 'fagsakYtelseTyper' });
  const behandlingTyper = useWatch({ control, name: 'behandlingTyper' });

  const alleAndreKriterierTyper = useLosKodeverk('AndreKriterierType').filter(akt => akt.kode !== 'TIL_BESLUTTER');

  const { data: kriterieFilter } = useQuery(kriterieFilterOptions());

  const aktuelleKriterier = !kriterieFilter
    ? alleAndreKriterierTyper
    : alleAndreKriterierTyper.filter(akt => {
        const filter = kriterieFilter[akt.kode];

        if (!filter) {
          return true;
        }

        const ytelseMatch =
          !filter.valgbarForYtelseTyper ||
          filter.valgbarForYtelseTyper.length === 0 ||
          fagsakYtelseTyper.length === 0 ||
          fagsakYtelseTyper.some(v => filter.valgbarForYtelseTyper!.includes(v));

        const behandlingMatch =
          !filter.valgbarForBehandlingTyper ||
          filter.valgbarForBehandlingTyper.length === 0 ||
          behandlingTyper.length === 0 ||
          behandlingTyper.some(v => filter.valgbarForBehandlingTyper!.includes(v));

        return ytelseMatch && behandlingMatch;
      });

  useEffect(() => {
    const aktuelleKoder = new Set(aktuelleKriterier.map(k => k.kode));
    const andreKriterie = getValues('andreKriterie');
    const nyInkluder = andreKriterie.inkluder.filter(k => aktuelleKoder.has(k));
    const nyEkskluder = andreKriterie.ekskluder.filter(k => aktuelleKoder.has(k));

    if (nyInkluder.length !== andreKriterie.inkluder.length || nyEkskluder.length !== andreKriterie.ekskluder.length) {
      setValue('andreKriterie', { inkluder: nyInkluder, ekskluder: nyEkskluder }, { shouldDirty: true });
    }
  }, [aktuelleKriterier]);

  return aktuelleKriterier;
};
