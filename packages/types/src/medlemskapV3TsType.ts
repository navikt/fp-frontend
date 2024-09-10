import Personadresse from './personadresseTsType';

type RegionPeriode = Readonly<{
  fom: string;
  tom: string;
  type: string;
}>;

type PersonstatusPeriode = Readonly<{
  fom: string;
  tom: string;
  type: string;
}>;

type OppholdstillatelsePeriode = Readonly<{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}>;

type UtenlandsoppholdPeriode = Readonly<{
  fom: string;
  tom: string;
  landkode: string;
}>;

export type AdressePeriode = Readonly<{
  fom: string;
  tom: string;
  adresse: Personadresse;
}>;

type MedlemskapPeriode = Readonly<{
  fom: string;
  tom: string;
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

export type MedlemskapResultat = {
  avslagskode: string | null;
  medlemFom?: string | null;
  opphørFom?: string | null;
};

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

export type ManuellMedlemskapsBehandling = Readonly<{
  avvik: MedlemskapAvvik[];
  resultat?: MedlemskapResultat;
}>;

type Annenpart = {
  adresser: AdressePeriode[];
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
};

type MedlemskapV3 = Readonly<{
  manuellBehandling?: ManuellMedlemskapsBehandling | null;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling | null;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}>;

export default MedlemskapV3;
