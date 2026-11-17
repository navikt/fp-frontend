import type { RegistreringArbeidsforholdDto } from '@navikt/fp-types';

import { INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME } from './constants';

type InnerFormValue = Required<RegistreringArbeidsforholdDto>;

export type InntektsgivendeArbeidFormValues = {
  [INNTEKTSGIVENDE_ARBEID_FIELD_ARRAY_NAME]: InnerFormValue[];
};
