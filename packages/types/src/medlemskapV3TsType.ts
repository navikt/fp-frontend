import Personadresse from './personadresseTsType';


type Aksjonspunkt = Readonly<{
  årsaker: string[],
}>;

type RegionPeriode = Readonly<{
  fom: string,
  tom: string,
  type: string
}>

type PersonstatusPeriode = Readonly<{
  fom: string,
  tom: string,
  type: string,
}>;

type OppholdstillatelsePeriode = Readonly<{
  fom: string;
  tom: string;
  oppholdstillatelseType: string;
}>;

type UtenlandsoppholdPeriode = Readonly<{
  fom: string,
  tom: string,
  landkode: string
}>

type AdressePeriode = Readonly<{
  fom: string,
  tom: string,
  adresse: Personadresse
}>

type MedlemskapPeriode = Readonly<{
  fom: string,
  tom: string,
  medlemskapType: string,
  dekningType: string,
  beslutningsdato: string
}>;

type MedlemskapV3 = Readonly<{
  aksjonspunkt: Aksjonspunkt,
  regioner: RegionPeriode[],
  personstatuser: PersonstatusPeriode[],
  utenlandsopphold: UtenlandsoppholdPeriode[],
  adresser: AdressePeriode[],
  oppholdstillatelser: OppholdstillatelsePeriode[],
  medlemskapsperiode: MedlemskapPeriode[]
}>;

export default MedlemskapV3;
