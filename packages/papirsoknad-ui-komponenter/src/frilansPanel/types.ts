import type { FrilansOppdragperiodeDto } from '@navikt/fp-types';

import { FRILANS_NAME_PREFIX } from './constants';

export type FrilansFormValues = {
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
};

type OppdragPeriode = Required<FrilansOppdragperiodeDto>;

export type FrilansSubFormValues = {
  harSøkerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
};
