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

export enum MedlemskapResultat {
  SØKER_ER_MEDLEM = 'SØKER_ER_MEDLEM',
  SØKER_ER_IKKE_MEDLEM = 'SØKER_ER_IKKE_MEDLEM',
  SØKER_ER_UTVANDRET = 'SØKER_ER_UTVANDRET',
  SØKER_HAR_IKKE_LOVLIG_OPPHOLD = 'SØKER_HAR_IKKE_LOVLIG_OPPHOLD',
  SØKER_HAR_IKKE_OPPHOLDSRETT = 'SØKER_HAR_IKKE_OPPHOLDSRETT',
  SØKER_ER_IKKE_BOSATT = 'SØKER_ER_IKKE_BOSATT',
}

type MedlemPeriode = Readonly<{
  vurderingsdato: string;
  oppholdsrettVurdering?: boolean;
  erEosBorger?: boolean;
  lovligOppholdVurdering?: boolean;
  bosattVurdering?: boolean;
  medlemskapManuellVurderingType?: string;
  begrunnelse?: string;
}>;

export type LegacyManuellMedlemskapsBehandling = Readonly<{
  perioder: MedlemPeriode[];
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
  manuellBehandling?: ManuellMedlemskapsBehandling;
  legacyManuellBehandling?: LegacyManuellMedlemskapsBehandling;
  regioner: RegionPeriode[];
  personstatuser: PersonstatusPeriode[];
  utenlandsopphold: UtenlandsoppholdPeriode[];
  adresser: AdressePeriode[];
  oppholdstillatelser: OppholdstillatelsePeriode[];
  medlemskapsperiode: MedlemskapPeriode[];
  annenpart?: Annenpart;
}>;

export default MedlemskapV3;
