import Kodeverk from './kodeverkTsType';

export type TidligereUtbetalinger = Readonly<{
  fom: string;
  tom?: string;
  erTildeltRefusjon: boolean;
}>;

export type RefusjonTilVurderingAndel = Readonly<{
  aktivitetStatus: Kodeverk;
  tidligereUtbetalinger?: TidligereUtbetalinger[];
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
