import { ANDRE_YTELSER_NAME_PREFIX, ANDRE_YTELSER_PERIODER_NAME, ANDRE_YTELSER_TYPER_NAME } from './constants';

type Periode = {
  periodeFom: string;
  periodeTom: string;
};

export type AndreYtelserFormValue = {
  [ANDRE_YTELSER_NAME_PREFIX]: {
    [ANDRE_YTELSER_TYPER_NAME]: string[];
    [ANDRE_YTELSER_PERIODER_NAME]: {
      [key: string]: Periode[];
    };
  };
};
export type TransformValues = {
  [ANDRE_YTELSER_NAME_PREFIX]: {
    periodeFom: string;
    periodeTom: string;
    ytelseType: string;
  }[];
};
