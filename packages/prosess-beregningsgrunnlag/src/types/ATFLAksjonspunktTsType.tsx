export type FrilansInntektValues = {
  inntektFrilanser?: string;
};

export type ArbeidstakerInntektValues = {
  [key: string]: string;
};

export type TidsbegrenseArbeidsforholdValues = {
  [key: string]: string;
}

export type ATFLValues = FrilansInntektValues & ArbeidstakerInntektValues & {
  ATFLVurdering: string;
}

export type ATFLTidsbegrensetValues = FrilansInntektValues & TidsbegrenseArbeidsforholdValues & {
  ATFLVurdering: string;
}

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
  ATFLVurdering?: string;
};

export type ATFLDekningsgradBegrunnelseValues = {
  ATFLVurdering?: string;
  begrunnDekningsgradEndring?: string;
};

export type ArbeidsinntektTransformedValues = {
  andelsnr: number;
  inntekt: number;
}

export type ATFLTransformedValues = {
  begrunnelse: string;
  kode: string;
  inntektPrAndelList: ArbeidsinntektTransformedValues[];
  inntektFrilanser: number;
};

export type ATFLTidsbegrensetTransformedValues = {
  begrunnelse: string;
  kode: string;
  fastsatteTidsbegrensedePerioder: TidsbegrensetArbeidsforholdPeriodeTransformedValues[];
  frilansInntekt: number;
};

export default ArbeidstakerFrilansValues;
