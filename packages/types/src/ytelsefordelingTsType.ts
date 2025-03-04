export type Ytelsefordeling = Readonly<{
  overstyrtOmsorg?: boolean;
  bekreftetAleneomsorg?: boolean;
  rettigheterAnnenforelder: {
    bekreftetAnnenforelderRett?: boolean;
    bekreftetAnnenforelderUføretrygd?: boolean;
    skalAvklareAnnenforelderUføretrygd: boolean;
    bekreftetAnnenForelderRettEØS?: boolean;
    skalAvklareAnnenForelderRettEØS: boolean;
  };
  førsteUttaksdato: string;
}>;
