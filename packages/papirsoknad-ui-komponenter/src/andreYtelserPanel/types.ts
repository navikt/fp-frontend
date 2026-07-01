import type { ArbeidType } from '@navikt/fp-types';

import { ANDRE_YTELSER_NAME_PREFIX, ANDRE_YTELSER_PERIODER_NAME, ANDRE_YTELSER_TYPER_NAME } from './constants';

type Periode = {
  periodeFom: string;
  periodeTom: string;
};

export type AndreYtelserFormValue = {
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: ArbeidType[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
};
export type TransformValues = {
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: ArbeidType;
  }[];
};
