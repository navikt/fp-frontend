import type { MottakerType } from './mottakerTyper';

// TODO: Kommer fra kontrakter.simulering
export type SimuleringPeriode = Readonly<{
  fom: string;
  tom: string;
}>;

export type SimuleringResultatRad = Readonly<{
  feltnavn: string;
  resultaterPerMåned: {
    periode: SimuleringPeriode;
    beløp: number;
  }[];
}>;

export type SimuleringResultatPerFagområde = Readonly<{
  fagOmrådeKode: string;
  rader: SimuleringResultatRad[];
}>;

export type Mottaker = Readonly<{
  mottakerType: MottakerType;
  mottakerNummer: string;
  mottakerIdentifikator: string;
  nesteUtbPeriode: SimuleringPeriode;
  resultatPerFagområde: SimuleringResultatPerFagområde[];
  resultatOgMotregningRader: SimuleringResultatRad[];
}>;

export type DetaljertSimuleringResultat = Readonly<{
  periode: SimuleringPeriode;
  sumEtterbetaling: number;
  sumFeilutbetaling: number;
  sumInntrekk: number;
  ingenPerioderMedAvvik: boolean;
  perioderPerMottaker: Mottaker[];
}>;

export type SimuleringResultat = Readonly<{
  simuleringResultat: DetaljertSimuleringResultat;
  simuleringResultatUtenInntrekk: DetaljertSimuleringResultat;
  slåttAvInntrekk: boolean;
}>;
