import type { VergeType } from '@navikt/fp-kodeverk';

import type { OneOf } from './oneOf';

export type Verge = {
  navn: string;
  gyldigFom: string;
  gyldigTom: string | null;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>;

export type OpprettVergeParams = {
  navn: string;
  gyldigFom: string;
  gyldigTom?: string;
  vergeType: VergeType;
} & OneOf<{ fnr: string }, { organisasjonsnummer: string }>;
