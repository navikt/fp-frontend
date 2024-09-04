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

type AdressePeriode = Readonly<{
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
export enum MedlemskapAksjonspunktÅrsak {
  BOSATT = 'BOSATT',
  MEDLEMSKAPSPERIODER_FRA_REGISTER = 'MEDLEMSKAPSPERIODER_FRA_REGISTER',
  OPPHOLD = 'OPPHOLD',
  OPPHOLDSRETT = 'OPPHOLDSRETT',
}

export enum MedelemskapsResultat {
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
  årsaker: MedlemskapAksjonspunktÅrsak[];
  resultat?: MedelemskapsResultat;
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
