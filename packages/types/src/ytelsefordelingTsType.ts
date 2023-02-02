type Ytelsefordeling = Readonly<{
  ikkeOmsorgPerioder?: {
    periodeFom: string;
    periodeTom: string;
  }[];
  overstyrtOmsorg?: boolean;
  bekreftetAleneomsorg?: boolean;
  rettigheterAnnenforelder: {
    bekreftetAnnenforelderRett?: boolean;
    bekreftetAnnenforelderUføretrygd?: boolean;
    skalAvklareAnnenforelderUføretrygd: boolean;
    bekreftetAnnenForelderRettEØS?: boolean;
    skalAvklareAnnenForelderRettEØS: boolean;
  }
  endringsdato?: string;
  gjeldendeDekningsgrad: number;
  førsteUttaksdato: string;
}>

export default Ytelsefordeling;
