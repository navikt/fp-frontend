import { VilkarType, KodeverkType } from '@navikt/fp-kodeverk';

import KodeverkMedNavn from './kodeverkMedNavnTsType';

type Avslagsårsak = Record<VilkarType, KodeverkMedNavn[]>;
type AlleKodeverkMedSammeVerditype = Record<KodeverkType, KodeverkMedNavn[]>;

type Modify<T, R> = Omit<T, keyof R> & R;
export type AlleKodeverk = Modify<
  AlleKodeverkMedSammeVerditype,
  {
    Avslagsårsak: Avslagsårsak;
  }
>;
