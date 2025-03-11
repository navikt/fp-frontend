import type { Ytelsefordeling } from '@navikt/fp-types';

export const ytelseFordeling: Ytelsefordeling = {
  overstyrtOmsorg: null,
  bekreftetAleneomsorg: null,
  rettigheterAnnenforelder: {
    bekreftetAnnenforelderRett: null,
    bekreftetAnnenForelderRettEØS: null,
    skalAvklareAnnenForelderRettEØS: false,
    bekreftetAnnenforelderUføretrygd: null,
    skalAvklareAnnenforelderUføretrygd: false,
  },
  førsteUttaksdato: '2025-02-12',
};
