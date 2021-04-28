import { Kodeverk } from '@fpsak-frontend/types';

export type FordelBeregningsgrunnlagGenerellAndelValues = {
  andel?: string;
  aktivitetStatus?: string;
  andelsnr?: number;
  andelsnrRef?: number;
  nyAndel: boolean;
  kilde: string;
  lagtTilAvSaksbehandler: boolean;
  inntektskategori?: string;
  forrigeInntektskategori?: string;

}

export type FordelBeregningsgrunnlagArbeidAndelValues = {
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsforholdId?: string;
  arbeidsperiodeFom?: string;
  arbeidsperiodeTom?: string;
  eksternArbeidsforholdId?: string;
  arbeidsforholdType?: Kodeverk;
}

export type BGFordelArbeidsforhold = {
  andelsnr: number;
  nyttArbeidsforhold: boolean;
  beregningsperiodeTom: string;
  beregningsperiodeFom: string;
  arbeidsgiverNavn?: string;
  arbeidsgiverId?: string;
  arbeidsgiverIdVisning?: string;
  eksternArbeidsforholdId?: string;
  refusjonPrAar?: number;
  belopFraInntektsmeldingPrMnd?: number;
  organisasjonstype?: Kodeverk;
  naturalytelseBortfaltPrÅr?: number;
  naturalytelseTilkommetPrÅr?: number;
  startdato?: string;
  opphoersdato?: string;
  arbeidsforholdId?: string;
  arbeidsforholdType?: Kodeverk;
}

export type FordelBeregningsgrunnlagAndelValues = FordelBeregningsgrunnlagGenerellAndelValues & FordelBeregningsgrunnlagArbeidAndelValues & {
  andelIArbeid?: string;
  fordelingForrigeBehandling: string;
  fastsattBelop: string;
  readOnlyBelop?: string;
  refusjonskrav?: string;
  skalKunneEndreRefusjon?: boolean;
  belopFraInntektsmelding: number;
  skalRedigereInntekt: boolean;
  refusjonskravFraInntektsmelding: number;
  nyttArbeidsforhold?: boolean;
  beregningsgrunnlagPrAar?: string;
  forrigeRefusjonPrAar?: number;
  forrigeArbeidsinntektPrAar?: number;
  beregningsperiodeFom?: string;
  beregningsperiodeTom?: string;
}

export type AksjonspunktValues = {
  begrunnelseFordeling?: string;
}

export type FordelErrorMessageLabel = {
  id: string;
}

export type FordelErrorMessage = FordelErrorMessageLabel | any;

export type FordelBeregningsgrunnlagValues = {
  [key: string]: FordelBeregningsgrunnlagAndelValues[];
}

type FordelBeregningsgrunnlagMedAksjonspunktValues = AksjonspunktValues | FordelBeregningsgrunnlagValues;

export type PeriodeTsType = {
  fom: string;
  tom: string;
};

export type FordelingFieldError = {
  refusjonskrav?: string;
  fastsattBelop?: string;
  andel?: string;
  inntektskategori?: string;
};

export default FordelBeregningsgrunnlagMedAksjonspunktValues;
