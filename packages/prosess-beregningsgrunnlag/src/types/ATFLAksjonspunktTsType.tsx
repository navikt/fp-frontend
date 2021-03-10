export type FrilansInntektValues = {
  inntektFrilanser?: string;
};

export type ArbeidstakerInntektValues = {
  [key: string]: string;
};

export type TidsbegrenseArbeidsforholdInntektMap = {
  [key: string]: string;
};

export type TidsbegrenseArbeidsforholdTabellCelle = {
  erTidsbegrenset: boolean;
  isEditable: boolean;
  tabellInnhold: string;
  inputfieldKey: string;
}

export type TidsbegrenseArbeidsforholdTabellData = {
  [key: string]: TidsbegrenseArbeidsforholdTabellCelle[];
}

export type TidsbegrenseArbeidsforholdValues = {
  [key: string]: string;
}

export type TidsbegrensetArbeidsforholdInntektTransformedValues = {
  andelsnr: number;
  bruttoFastsattInntekt: number;
}

export type TidsbegrensetArbeidsforholdPeriodeTransformedValues = {
  periodeFom: string;
  periodeTom: string;
  fastsatteTidsbegrensedeAndeler: TidsbegrensetArbeidsforholdInntektTransformedValues[];
}

export type ArbeidstakerFrilansValues = FrilansInntektValues & {
  ATFLVurdering: string;
};

export type ArbeidsinntektTransformedValues = {
  andelsnr: number;
  inntekt: number;
}

export type ArbeidstakerFrilansTransformedValues = {
  begrunnelse: string;
  kode: string;
  inntektPrAndelList: ArbeidsinntektTransformedValues[];
  inntektFrilanser: number;
};

export default ArbeidstakerFrilansValues;
