import { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from './constants';

export type InnerFormValue = {
  arbeidsgiver?: string;
  periodeFom?: string;
  periodeTom?: string;
  land?: string;
};

export type InntektsgivendeArbeidFormValues = {
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]?: InnerFormValue[];
};
