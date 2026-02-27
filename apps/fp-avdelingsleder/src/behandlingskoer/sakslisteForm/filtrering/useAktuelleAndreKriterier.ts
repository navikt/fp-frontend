import { useEffect, useMemo } from 'react';
import { useFormContext, useWatch } from 'react-hook-form';

import { useQuery } from '@tanstack/react-query';

import type { LosKodeverkMedNavn } from '@navikt/fp-types';

import { kriterieFilterOptions } from '../../../data/fplosAvdelingslederApi';
import { useLosKodeverk } from '../../../data/useLosKodeverk';
import type { FormValues } from '../UtvalgskriterierForSakslisteForm';

const erAktuell = (valgte: string[], tillatte: string[] | undefined): boolean =>
  tillatte === undefined || tillatte.length === 0 || valgte.length === 0 || valgte.some(v => tillatte.includes(v));

export const useAktuelleAndreKriterier = (): LosKodeverkMedNavn<'AndreKriterierType'>[] => {
  const { control, getValues, setValue } = useFormContext<FormValues>();

  const fagsakYtelseTyper = useWatch({ control, name: 'fagsakYtelseTyper' });
  const behandlingTyper = useWatch({ control, name: 'behandlingTyper' });

  const andreKriterierTyper = useLosKodeverk('AndreKriterierType');
  const alleAndreKriterierTyper = useMemo(
    () => andreKriterierTyper.filter(akt => akt.kode !== 'TIL_BESLUTTER'),
    [andreKriterierTyper],
  );

  const { data: kriterieFilter } = useQuery(kriterieFilterOptions());

  const aktuelleKriterier = useMemo(
    () =>
      kriterieFilter
        ? alleAndreKriterierTyper.filter(akt => {
            const filter = kriterieFilter[akt.kode];

            if (!filter) {
              return true;
            }

            const ytelseMatch = erAktuell(fagsakYtelseTyper, filter.valgbarForYtelseTyper);
            const behandlingMatch = erAktuell(behandlingTyper, filter.valgbarForBehandlingTyper);

            return ytelseMatch && behandlingMatch;
          })
        : alleAndreKriterierTyper,
    [fagsakYtelseTyper, behandlingTyper, kriterieFilter, alleAndreKriterierTyper],
  );

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
