import { StonadskontoType, UttakArbeidType } from '@navikt/fp-kodeverk';

export type AktivitetIdentifikator = Readonly<{
  uttakArbeidType: UttakArbeidType;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
}>;

export type AktivitetSaldo = Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>;

export type Stonadskonto = Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
  kontoReduksjoner?: {
    annenForelderEøsUttak: number;
  };
}>;

export type UttakStonadskontoer = Readonly<{
  stonadskontoer: Record<StonadskontoType, Stonadskonto>;
  tapteDagerFpff: number;
}>;
