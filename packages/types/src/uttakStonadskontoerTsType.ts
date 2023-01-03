export type AktivitetIdentifikator = Readonly<{
  uttakArbeidType: string;
  arbeidsforholdId?: string;
  arbeidsgiverReferanse: string;
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
  kontoUtvidelser?: {
    prematurdager: number;
    flerbarnsdager: number;
  };
}>

enum Test {
  FELLESPERIODE = 'FELLESPERIODE',
  MODREKVOTE = 'MØDREKVOTE',
  FEDREKVOTE = 'FEDREKVOTE',
  FORELDREPENGER = 'FORELDREPENGER',
  UTEN_AKTIVITETSKRAV = 'UTEN_AKTIVITETSKRAV',
  MINSTERETT = 'MINSTERETT',
  FLERBARNSDAGER = 'FLERBARNSDAGER',
  FORELDREPENGER_FOR_FODSEL = 'FORELDREPENGER_FØR_FØDSEL',
  UDEFINERT = '-',
}

type UttakStonadskontoer = Readonly<{
  stonadskontoer: Record<Test, Stonadskonto>;
  tapteDagerFpff: number;
}>

export default UttakStonadskontoer;
