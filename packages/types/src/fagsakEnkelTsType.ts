import type { FagsakStatus, FagsakYtelseType } from '@navikt/fp-kodeverk';

import type { Person } from './personTsType';

export type FagsakEnkel = Readonly<{
  saksnummer: string;
  fagsakYtelseType: FagsakYtelseType;
  status: FagsakStatus;
  aktørId: string;
  barnFødt: string;
  opprettet: string;
  endret?: string;
  person: Person;
}>;
