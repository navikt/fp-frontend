import Kodeverk from './kodeverkTsType';
import Personadresse from './personadresseTsType';

export type MedlemskapPeriode = Readonly<{
  fom: string;
  tom: string;
  medlemskapType: Kodeverk;
  dekningType: Kodeverk;
  kildeType: Kodeverk;
  beslutningsdato?: string;
}>

export type PersonopplysningMedlem = Readonly<{
  navn: string;
  personstatus: Kodeverk;
  region: Kodeverk;
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
  medlemskapManuellVurderingType: Kodeverk;
  begrunnelse: string;
}>

export type Oppholdstillatelse = Readonly<{
  fom?: string;
  tom: string;
  oppholdstillatelseType: Kodeverk;
}>

type Medlemskap = Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  perioder: MedlemPeriode[];
  opphold: Oppholdstillatelse[];
}>

export default Medlemskap;
