import Personadresse from './personadresseTsType';

export type MedlemskapPeriode = Readonly<{
  fom: string;
  tom: string;
  medlemskapType: string;
  dekningType: string;
  kildeType: string;
  beslutningsdato?: string;
}>

export type PersonopplysningMedlem = Readonly<{
  navn: string;
  personstatus: string;
  region: string;
  adresser: Personadresse[];
}>

export type MedlemPeriode = Readonly<{
  vurderingsdato: string;
  personopplysningBruker: PersonopplysningMedlem;
  personopplysningAnnenPart?: PersonopplysningMedlem;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering: boolean;
  erEosBorger: boolean;
  lovligOppholdVurdering: boolean;
  bosattVurdering: boolean;
  medlemskapManuellVurderingType: string;
  begrunnelse: string;
}>

export type Oppholdstillatelse = Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: string;
}>

type Medlemskap = Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}>

export default Medlemskap;
