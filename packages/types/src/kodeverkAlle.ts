import type { AdresseType } from './adresseType';
import type { AktivitetskravPermisjonType } from './aktivitetskravPermisjonType';
import type { AktivitetStatus } from './aktivitetStatus';
import type { AnkeOmgjorArsak } from './ankeOmgjorArsak';
import type { Arbeidskategori } from './arbeidskategori';
import type { ArbeidType } from './arbeidType';
import type { Avslagsarsak } from './avslagsarsakCodes';
import type { BehandlingArsakType } from './behandlingArsakType';
import type { BehandlingResultatType } from './behandlingResultatType';
import type { BehandlingStatus } from './behandlingStatus';
import type { BehandlingType } from './behandlingType';
import type { FagsakMarkeringType } from './fagsakMarkeringType';
import type { FagsakStatus } from './fagsakStatus';
import type { FagsakYtelseType } from './fagsakYtelseType';
import type { FaktaOmBeregningTilfelle } from './faktaOmBeregningTilfelle';
import type { FamilieHendelseType } from './familieHendelseType';
import type { FaresignalVurdering } from './faresignalVurdering';
import type { FarSøkerType } from './farSøkerType';
import type { FordelingPeriodeKilde } from './fordelingPeriodeKilde';
import type { ForeldreType } from './foreldreType';
import type { GraderingAvslagÅrsak } from './graderingAvslagÅrsak';
import type { HistorikkAktor } from './historikkAktor';
import type { InnsynResultatType } from './innsynResultatType';
import type { Inntektskategori } from './inntektskategorier';
import type { KlageAvvistÅrsak } from './klageAvvistÅrsak';
import type { KlageHjemmel } from './klageHjemmel';
import type { KlageMedholdÅrsak } from './klageMedholdÅrsak';
import type { KonsekvensForYtelsen } from './konsekvensForYtelsen';
import type { Landkode } from './landkode';
import type { ManuellBehandlingÅrsak } from './manuellBehandlingÅrsak';
import type { MedlemskapDekningType } from './medlemskapDekningType';
import type { MedlemskapManuellVurderingType } from './medlemskapManuellVurderingType';
import type { MedlemskapType } from './medlemskapType';
import type { MorsAktivitet } from './morsAktivitet';
import type { NaturalYtelseType } from './naturalYtelseType';
import type { OmsorgsovertakelseVilkårType } from './omsorgsovertakelseVilkårType';
import type { OppgaveType } from './oppgaveType';
import type { OppholdÅrsakType } from './oppholdÅrsakType';
import type { OppholdstillatelseType } from './oppholdstillatelseType';
import type { OpptjeningAktivitetType } from './opptjeningAktivitetType';
import type { OverføringÅrsak } from './overføringÅrsak';
import type { PeriodeResultatÅrsak } from './periodeResultatÅrsak';
import type { PermisjonsbeskrivelseType } from './permisjonsbeskrivelseType';
import type { PersonstatusType } from './personstatusType';
import type { Region } from './region';
import type { RelasjonsRolleType } from './relasjonsRolleType';
import type { RevurderingVarslingÅrsak } from './revurderingVarslingÅrsak';
import type { SivilstandType } from './sivilstandType';
import type { SkjermlenkeType } from './skjermlenkeType';
import type { StønadskontoType } from './stønadskontoType';
import type { UtsettelseÅrsak } from './utsettelseÅrsak';
import type { UttakArbeidType } from './uttakArbeidType';
import type { UttakPeriodeType } from './uttakPeriodeType';
import type { UttakUtsettelseType } from './uttakUtsettelseType';
import type { VenteArsakType } from './venteArsakType';
import type { VergeType } from './vergeTsType';
import type { VilkårType } from './vilkårType';
import type { VirksomhetType } from './virksomhetType';
import type { VurderÅrsak } from './vurderÅrsak';

//Mapping mellom KodeverkType og union-types med verdier
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
  FagsakMarkering: FagsakMarkeringType;
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
  LineærAvslagsårsak: Avslagsarsak;
  ManuellBehandlingÅrsak: ManuellBehandlingÅrsak;
  MedlemskapDekningType: MedlemskapDekningType;
  MedlemskapManuellVurderingType: MedlemskapManuellVurderingType;
  MedlemskapType: MedlemskapType;
  MorsAktivitet: MorsAktivitet;
  NaturalYtelseType: NaturalYtelseType;
  InnsynResultatType: InnsynResultatType;
  OmsorgsovertakelseVilkårType: OmsorgsovertakelseVilkårType;
  OppholdÅrsak: OppholdÅrsakType;
  OppgaveType: OppgaveType;
  OppholdstillatelseType: OppholdstillatelseType;
  OpptjeningAktivitetType: OpptjeningAktivitetType;
  OverføringÅrsak: OverføringÅrsak;
  PermisjonsbeskrivelseType: PermisjonsbeskrivelseType;
  PeriodeResultatÅrsak: PeriodeResultatÅrsak;
  PersonstatusType: PersonstatusType;
  Region: Region;
  RelasjonsRolleType: RelasjonsRolleType;
  RevurderingVarslingÅrsak: RevurderingVarslingÅrsak;
  SivilstandType: SivilstandType;
  SkjermlenkeType: SkjermlenkeType;
  StønadskontoType: StønadskontoType;
  UtsettelseÅrsak: UtsettelseÅrsak;
  UttakArbeidType: UttakArbeidType;
  UttakPeriodeType: UttakPeriodeType;
  UttakUtsettelseType: UttakUtsettelseType;
  Venteårsak: VenteArsakType;
  VergeType: VergeType;
  VilkårType: VilkårType;
  VirksomhetType: VirksomhetType;
  VurderÅrsak: VurderÅrsak;
  Inntektskategori: Inntektskategori;
};

export type KodeverkType = keyof KodeverkEnumMap;

type AvslagsårsakKodeverk = Record<VilkårType | '-', KodeverkMedNavn<'Avslagsårsak'>[]>; // TODO [JOHANNES] -- mildertidig (?) hack

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

type LineærAvslagsårsakKodeverk = KodeverkMedNavn<'LineærAvslagsårsak'> & {
  lovHjemmel: string;
};

type KodeverkMedSammeVerditype = {
  [K in Exclude<
    KodeverkType,
    'Avslagsårsak' | 'LineærAvslagsårsak' | 'PeriodeResultatÅrsak' | 'GraderingAvslagÅrsak'
  >]: KodeverkMedNavn<K extends KodeverkType ? K : unknown>[];
};

export type AlleKodeverk = KodeverkMedSammeVerditype & {
  Avslagsårsak: AvslagsårsakKodeverk;
  GraderingAvslagÅrsak: GraderingAvslagÅrsakKodeverk[];
  PeriodeResultatÅrsak: PeriodeResultatÅrsakKodeverk[];
  LineærAvslagsårsak: LineærAvslagsårsakKodeverk[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
  kodeverk: string;
}>;
