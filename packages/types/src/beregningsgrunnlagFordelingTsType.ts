import Kodeverk from './kodeverkTsType';

export type TidligereUtbetaliger = Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>;

export type RefusjonTilVurderingAndel = Readonly<{
  aktivitetStatus: Kodeverk;
  tidligereUtbetalinger?: TidligereUtbetaliger[];
  nyttRefusjonskravFom: string;
  fastsattNyttRefusjonskravFom?: string;
  tidligsteMuligeRefusjonsdato: string;
  arbeidsgiver?: {
    arbeidsgiverOrgnr?: string;
    arbeidsgiverAktørId?: string;
  }
  arbeidsgiverNavn?: string;
  internArbeidsforholdRef?: string;
  eksternArbeidsforholdRef?: string;
  skalKunneFastsetteDelvisRefusjon: boolean;
  fastsattDelvisRefusjonPrMnd?: number;
  maksTillattDelvisRefusjonPrMnd?: number;
}>

type RefusjonTilVurdering = Readonly<{
  andeler: RefusjonTilVurderingAndel[];
}>

export default RefusjonTilVurdering;
