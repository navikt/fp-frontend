export type FrilansInntektValues = {
  inntektFrilanser?: string;
};

export type ArbeidstakerFrilansValues = FrilansInntektValues & {
  ATFLVurdering: string;
};

export default ArbeidstakerFrilansValues;
