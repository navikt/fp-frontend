import {
  ArbeidType,
  Avslagsarsak,
  FagsakMarkeringKode,
  FagsakStatus,
  FagsakYtelseType,
  FaktaOmBeregningTilfelle,
  FarSøkerType,
  NaringsvirksomhetType,
  OverforingArsak,
  PeriodeResultatType,
  RevurderingVarslingÅrsak,
  VenteArsakType,
  VilkarType,
  VurderÅrsak,
} from '@navikt/fp-kodeverk';

import type { KodeverkMedNavn } from './kodeverkMedNavnTsType';
import type { KodeverkType } from './kodeverkType';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  OverføringÅrsak: OverforingArsak;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SkjermlenkeType: 'test';
  Venteårsak: VenteArsakType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
};

type AvslagsårsakKodeverk = Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>;
type PeriodeResultatÅrsakKodeverk = KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
};

type KodeverkMedSammeVerditype = {
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak'>]: KodeverkMedNavn<
    K extends keyof KodeverkEnumMap ? KodeverkEnumMap[K] : unknown
  >[];
};

export type AlleKodeverk = KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkReturnType<T extends KodeverkType> = T extends 'Avslagsårsak'
  ? AvslagsårsakKodeverk
  : T extends 'PeriodeResultatÅrsak'
    ? PeriodeResultatÅrsakKodeverk[]
    : KodeverkMedNavn<EnumOrUnknown<T>>[];
