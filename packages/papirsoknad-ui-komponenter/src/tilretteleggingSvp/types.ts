import {
  BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME,
  FRILANS_FIELD_ARRAY_NAME,
  SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME,
  TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME,
  TILRETTELEGGING_NAME_PREFIX,
} from './constants';

export type Tilrettelegging = {
  tilretteleggingType: string;
  dato: string;
  stillingsprosent?: string;
};

type VirtuellFeilType = {
  notRegisteredInput?: boolean;
};

export type FormValues = {
  [TILRETTELEGGING_NAME_PREFIX]: {
    sokForArbeidsgiver?: boolean;
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]?: {
      behovsdato?: string;
      organisasjonsnummer?: string;
      [BEHOV_FOR_TILRETTELEGGING_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    behovsdatoFrilans?: string;
    [FRILANS_FIELD_ARRAY_NAME]?: Tilrettelegging[];
    sokForSelvstendigNaringsdrivende?: boolean;
    behovsdatoSN?: string;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD_ARRAY_NAME]?: Tilrettelegging[];
  } & VirtuellFeilType;
};

export type TilretteleggingArbeidsforhold = {
  '@type': string;
  behovsdato?: string;
  organisasjonsnummer?: string;
  tilrettelegginger?: Tilrettelegging[];
};
