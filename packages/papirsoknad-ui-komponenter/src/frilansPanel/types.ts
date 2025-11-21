import { FRILANS_NAME_PREFIX } from './constants';

export type FrilansFormValues = {
  [FRILANS_NAME_PREFIX]: FrilansSubFormValues;
};

type OppdragPeriode = {
  fomDato: string;
  tomDato: string;
  oppdragsgiver: string;
};

export type FrilansSubFormValues = {
  harSøkerPeriodeMedFrilans?: boolean;
  perioder?: {
    periodeFom: string;
    periodeTom?: string;
  }[];
  erNyoppstartetFrilanser?: boolean;
  harInntektFraFosterhjem?: boolean;
  harHattOppdragForFamilie?: boolean;
  oppdragPerioder?: OppdragPeriode[];
};
