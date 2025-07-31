import {
  AdresseType,
  AktivitetskravPermisjonType,
  AktivitetStatus,
  AnkeOmgjorArsak,
  Arbeidskategori,
  ArbeidType,
  Avslagsarsak,
  BehandlingArsakType,
  BehandlingResultatType,
  BehandlingStatus,
  BehandlingType,
  FagsakMarkeringKode,
  FagsakStatus,
  FagsakYtelseType,
  FaktaOmBeregningTilfelle,
  FamilieHendelseType,
  FaresignalVurdering,
  FarSøkerType,
  FordelingPeriodeKilde,
  ForeldreType,
  GraderingAvslagÅrsak,
  HistorikkAktor,
  InnsynResultatType,
  KlageAvvistÅrsak,
  KlageHjemmel,
  KlageMedholdÅrsak,
  KonsekvensForYtelsen,
  Landkode,
  ManuellBehandlingÅrsak,
  MedlemskapDekningType,
  MedlemskapManuellVurderingType,
  MedlemskapType,
  MorsAktivitet,
  NaringsvirksomhetType,
  NaturalYtelseType,
  OmsorgsovertakelseVilkårType,
  OppgaveType,
  OppholdArsakType,
  OppholdstillatelseType,
  OpptjeningAktivitetType,
  OverforingArsak,
  PeriodeResultatÅrsak,
  PermisjonsbeskrivelseType,
  PersonstatusType,
  Region,
  RelasjonsRolleType,
  RevurderingVarslingÅrsak,
  SivilstandType,
  SkjermlenkeType,
  StonadskontoType,
  UtsettelseÅrsak,
  UttakArbeidType,
  UttakPeriodeType,
  UttakUtsettelseType,
  VenteArsakType,
  VilkarType,
  VurderÅrsak,
} from '@navikt/fp-kodeverk';

import type { VergeType } from './vergeTsType';

//Mapping mellom KodeverkType og enums/union-types med verdier
type KodeverkEnumMap = {
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjorArsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
  Avslagsårsak: Avslagsarsak;
  BehandlingResultatType: BehandlingResultatType;
  BehandlingStatus: BehandlingStatus;
  BehandlingType: BehandlingType;
  BehandlingÅrsakType: BehandlingArsakType;
  FamilieHendelseType: FamilieHendelseType;
  FaresignalVurdering: FaresignalVurdering;
  FagsakStatus: FagsakStatus;
  FagsakYtelseType: FagsakYtelseType;
  FagsakMarkering: FagsakMarkeringKode;
  FaktaOmBeregningTilfelle: FaktaOmBeregningTilfelle;
  FarSøkerType: FarSøkerType;
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktor;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdArsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverforingArsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StonadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkarType;
  VirksomhetType: NaringsvirksomhetType;
  VurderÅrsak: VurderÅrsak;
};

export type KodeverkType = keyof KodeverkEnumMap;

type AvslagsårsakKodeverk = Record<VilkarType, KodeverkMedNavn<'Avslagsårsak'>[]>;
export type PeriodeResultatÅrsakKodeverk = KodeverkMedNavn<'PeriodeResultatÅrsak'> & {
  lovHjemmel: string;
  sortering: string;
  utfallType: string;
  gyldigForLovendringer: string[];
  uttakTyper: string[];
  valgbarForKonto: string[];
  synligForRolle: string[];
};
export type GraderingAvslagÅrsakKodeverk = KodeverkMedNavn<'GraderingAvslagÅrsak'> & {
  lovHjemmel: string;
};

type KodeverkMedSammeVerditype = {
  [K in Exclude<KodeverkType, 'Avslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'>]: KodeverkMedNavn<
    K extends KodeverkType ? K : unknown
  >[];
};

export type AlleKodeverk = KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
