import Kodeverk from './kodeverkTsType';
import Personopplysninger from './personopplysningerTsType';

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

type Medlemskap = Readonly<{
  fom?: string;
  medlemskapPerioder: {
    fom: string;
    tom: string;
    medlemskapType: Kodeverk;
    dekningType: Kodeverk;
    kildeType: Kodeverk;
    beslutningsdato: string;
  }[];
  inntekt: {
    navn: string;
    utbetaler: string;
    fom: string;
    tom: string;
    ytelse: boolean;
    belop: number;
  }[];
  perioder: MedlemPeriode[];
}>

export default Medlemskap;
