import type { AktivitetskravPermisjonType } from './index';
import type { AnkeOmgjørÅrsak } from './index';
import type { NaturalYtelseType } from './arbeidOgInntektsmeldingTsType';
import type { Arbeidskategori } from './arbeidskategori';
import type { BehandlingResultatType, KonsekvensForYtelsen } from './behandlingsresultat';
import type { VirksomhetType } from './index';
import type { FordelingPeriodeKilde } from './index';
import type { foreldrepenger_behandlingslager_geografisk_Region as Region } from './fpsak.gen';
import type { HistorikkAktør } from './index';
import type {
  AktivitetStatus,
  ArbeidType,
  Avslagsarsak,
  BehandlingArsakType,
  BehandlingStatus,
  BehandlingType,
  FagsakMarkeringType,
  FagsakStatus,
  FagsakYtelseType,
  FaktaOmBeregningTilfelle,
  FamilieHendelseType,
  FaresignalVurdering,
  ForeldreType,
  GraderingAvslagÅrsak,
  InnsynResultatType,
  Inntektskategori,
  KlageAvvistÅrsak,
  KlageHjemmel,
  KlageMedholdÅrsak,
  Landkode,
  ManuellBehandlingÅrsak,
  MedlemskapDekningType,
  MorsAktivitet,
  OppgaveType,
  OppholdÅrsakType,
  OpptjeningAktivitetType,
  OverføringÅrsak,
  PeriodeResultatÅrsak,
  PermisjonsbeskrivelseType,
  PersonstatusType,
  RelasjonsRolleType,
  RevurderingVarslingÅrsak,
  SivilstandType,
  StønadskontoType,
  UtsettelseÅrsak,
  UttakArbeidType,
  UttakPeriodeType,
  UttakUtsettelseType,
  VenteArsakType,
  VurderÅrsak,
} from './index';
import type { MedlemskapManuellVurderingType, MedlemskapType, OppholdstillatelseType } from './index';
import type { OmsorgsovertakelseVilkårType } from './index';
import type { AdresseType } from './index';
import type { SkjermlenkeType } from './skjermlenkeType';
import type { VergeType } from './index';
import type { VilkårType } from './index';

//Mapping mellom KodeverkType og union-types med verdier
type KodeverkEnumMap = {
  AdresseType: AdresseType;
  AktivitetskravPermisjonType: AktivitetskravPermisjonType;
  AktivitetStatus: AktivitetStatus;
  AnkeOmgjørÅrsak: AnkeOmgjørÅrsak;
  Arbeidskategori: Arbeidskategori;
  ArbeidType: ArbeidType;
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
  FordelingPeriodeKilde: FordelingPeriodeKilde;
  ForeldreType: ForeldreType;
  HistorikkAktør: HistorikkAktør;
  GraderingAvslagÅrsak: GraderingAvslagÅrsak;
  KlageHjemmel: KlageHjemmel;
  KlageAvvistÅrsak: KlageAvvistÅrsak;
  KlageMedholdÅrsak: KlageMedholdÅrsak;
  KonsekvensForYtelsen: KonsekvensForYtelsen;
  Landkoder: Landkode;
  Avslagsårsak: Avslagsarsak;
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

export type AlleKodeverk = {
  [K in KodeverkType]: KodeverkMedNavn<K extends KodeverkType ? K : unknown>[];
};

type EnumOrUnknown<T extends KodeverkType> = T extends keyof KodeverkEnumMap ? KodeverkEnumMap[T] : unknown;

export type KodeverkMedNavn<T extends KodeverkType> = Readonly<{
  kode: EnumOrUnknown<T>;
  navn: string;
}>;
