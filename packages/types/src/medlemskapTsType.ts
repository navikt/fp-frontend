import Personadresse from './personadresseTsType';

export type RegionPeriode = Readonly<{
  fom: string;
  tom: string | null;
  type: string;
}>;

export type PersonstatusPeriode = Readonly<{
  fom: string;
  tom: string | null;
  type: string;
}>;

export type OppholdstillatelsePeriode = Readonly<{
  fom: string;
  tom: string | null;
  type: string;
}>;

type UtenlandsoppholdPeriode = Readonly<{
  fom: string;
  tom: string | null;
  landkode: string;
}>;

export type AdressePeriode = Readonly<{
  fom: string;
  tom: string | null;
  adresse: Personadresse;
}>;

export type MedlemskapPeriode = Readonly<{
  fom: string;
  tom: string | null;
  erMedlem: boolean;
  lovvalgsland: string | null;
  studieland: string | null;
  medlemskapType: string;
  dekningType: string;
  beslutningsdato: string;
}>;

export enum MedlemskapAvvik {
  BOSATT_UTENLANDSOPPHOLD = 'BOSATT_UTENLANDSOPPHOLD',
  BOSATT_MANGLENDE_BOSTEDSADRESSE = 'BOSATT_MANGLENDE_BOSTEDSADRESSE',
  BOSATT_UTENLANDSADRESSE = 'BOSATT_UTENLANDSADRESSE',
  BOSATT_UGYLDIG_PERSONSTATUS = 'BOSATT_UGYLDIG_PERSONSTATUS',
  TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD = 'TREDJELAND_MANGLENDE_LOVLIG_OPPHOLD',
  EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT = 'EØS_MANGLENDE_ANSETTELSE_MED_INNTEKT',
  MEDL_PERIODER = 'MEDL_PERIODER',
}

export type LegacyMedlemPeriode = Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>;

export type LegacyManuellMedlemskapsBehandling = Readonly<{
  perioder: LegacyMedlemPeriode[];
}>;

export type ManuellBehandlingResultat = Readonly<{
  avslagskode: string | null;
  medlemFom: string | null;
  opphørFom: string | null;
}>;

type Annenpart = {
  adresser: AdressePeriode[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
};

type Medlemskap = Readonly<{
  manuellBehandlingResultat: ManuellBehandlingResultat | null;
  legacyManuellBehandling: LegacyManuellMedlemskapsBehandling | null;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperioder: MedlemskapPeriode[];
  avvik: MedlemskapAvvik[];
  annenpart: Annenpart | null;
}>;

export default Medlemskap;
