import Arbeidsgiver from './arbeidsgiverTsType';
import Kodeverk from './kodeverkTsType';

export type AktivitetIdentifikator = Readonly<{
  uttakArbeidType: Kodeverk;
  arbeidsgiver: Arbeidsgiver;
  arbeidsforholdId: string;
}>

export type AktivitetSaldo = Readonly<{
  aktivitetIdentifikator: AktivitetIdentifikator;
  saldo: number;
}>

export type Stonadskonto = Readonly<{
  stonadskontotype: string;
  maxDager: number;
  saldo: number;
  aktivitetSaldoDtoList: AktivitetSaldo[];
  gyldigForbruk: boolean;
  kontoUtvidelser: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>

type UttakStonadskontoer = Readonly<{
  maksDatoUttak: string;
  stonadskontoer: { [key: string]: Stonadskonto };
  tapteDagerFpff: number;
}>

export default UttakStonadskontoer;
