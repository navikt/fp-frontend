export type AnnenforelderUttakEøsPeriode = Readonly<{
  fom: string;
  tom: string;
  trekkonto: 'FELLESPERIODE' | 'MØDREKVOTE' | 'FEDREKVOTE';
  trekkdager: number;
}>;
