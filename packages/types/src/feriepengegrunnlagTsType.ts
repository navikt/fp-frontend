import Kodeverk from './kodeverkTsType';

export type FeriepengegrunnlagAndel = Readonly<{
  aktivitetStatus: Kodeverk;
  opptjeningsår: number;
  årsbeløp: number;
  erBrukerMottaker: boolean;
  ytelseperiodeFom?: string;
  ytelseperiodeTom?: string;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;

}>

type Feriepengegrunnlag = Readonly<{
  feriepengeperiodeFom: string;
  feriepengeperiodeTom: string;
  andeler: FeriepengegrunnlagAndel[];
}>

export default Feriepengegrunnlag;
