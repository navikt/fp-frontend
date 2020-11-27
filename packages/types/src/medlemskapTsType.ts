import Kodeverk from './kodeverkTsType';
import Personopplysninger from './personopplysningerTsType';

export type MedlemskapPeriode = Readonly<{
  fom: string;
  tom: string;
  medlemskapType: Kodeverk;
  dekningType: Kodeverk;
  kildeType: Kodeverk;
  beslutningsdato: string;
}>

export type MedlemPeriode = Readonly<{
  vurderingsdato: string;
  personopplysninger: Personopplysninger;
  aksjonspunkter: string[];
  årsaker: string[];
  oppholdsrettVurdering: boolean;
  erEosBorger: boolean;
  lovligOppholdVurdering: boolean;
  bosattVurdering: boolean;
  medlemskapManuellVurderingType: Kodeverk;
  begrunnelse: string;
}>

export type MedlemInntekt = Readonly<{
  utbetaler: string;
  fom: string;
  tom: string;
  ytelse: boolean;
  belop: number;
}>

type Medlemskap = Readonly<{
  fom?: string;
  medlemskapPerioder: MedlemskapPeriode[];
  inntekt: MedlemInntekt[];
  perioder: MedlemPeriode[];
}>

export default Medlemskap;
