import type { KodeverkType, VilkarType } from '@navikt/fp-kodeverk';

import type { KodeverkMedNavn } from './kodeverkMedNavnTsType';

type AvslagsårsakKodeverk = Record<VilkarType, KodeverkMedNavn[]>;
type PeriodeResultatÅrsakKodeverk = KodeverkMedNavn & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
};

type KodeverkMedSammeVerditype = Record<
  Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>,
  KodeverkMedNavn[]
>;

export type AlleKodeverk = KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
};

export type KodeverkReturnType<T extends KodeverkType> = T extends KodeverkType.AVSLAGSARSAK
  ? AvslagsårsakKodeverk
  : T extends KodeverkType.PERIODE_RESULTAT_AARSAK
    ? PeriodeResultatÅrsakKodeverk[]
    : KodeverkMedNavn[];
