import type { SvpTilretteleggingType } from '@navikt/fp-types';

import {
  FRILANS_FIELD,
  SELVSTENDIG_NARINGSDRIVENDE_FIELD,
  TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME,
  TILRETTELEGGING_NAME_PREFIX,
} from './constants';

export type Tilrettelegging = {
  tilretteleggingType: SvpTilretteleggingType;
  dato: string;
  stillingsprosent?: number;
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
      tilrettelegginger: Tilrettelegging[];
    }[];
    sokForFrilans?: boolean;
    [FRILANS_FIELD]?: {
      behovsdato?: string;
      tilrettelegginger: Tilrettelegging[];
    };
    sokForSelvstendigNaringsdrivende?: boolean;
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD]?: {
      behovsdato?: string;
      tilrettelegginger: Tilrettelegging[];
    };
  } & VirtuellFeilType;
};
