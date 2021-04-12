import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import { Kodeverk } from '@fpsak-frontend/types';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type FaktaUttakAp = {
  bekreftedePerioder: {
    bekreftetPeriode: {
      tom: string;
      fom: string;
      uttakPeriodeType: Kodeverk;
      utsettelseÅrsak: Kodeverk;
      overføringÅrsak: Kodeverk;
      oppholdÅrsak: Kodeverk;
      resultat: Kodeverk | string;
      dokumentertePerioder: {
        fom: string;
        tom: string;
      }[];
      arbeidstidsprosent: number;
      begrunnelse: string;
      arbeidsgiver: {
        identifikator: string;
        aktørId: {
          aktørId: string;
        };
      };
      arbeidsgiverReferanse: string;
      erArbeidstaker?: boolean;
      erFrilanser: boolean;
      erSelvstendig: boolean;
      samtidigUttak: boolean;
      samtidigUttaksprosent: string;
      flerbarnsdager: boolean;
      morsAktivitet: Kodeverk;
      periodeKilde?: Kodeverk;
      mottattDato: string;
    };
    orginalFom?: string;
    orginalTom?: string;
    originalResultat?: Kodeverk;
    originalArbeidstidsprosent?: number;
    originalBegrunnelse?: string;
  }[];
  slettedePerioder: {
    fom: string;
    tom: string;
    uttakPeriodeType: Kodeverk;
    begrunnelse?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_UTTAK
  | AksjonspunktKode.ANNEN_FORELDER_IKKE_RETT_OG_LØPENDE_VEDTAK
  | AksjonspunktKode.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | AksjonspunktKode.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | AksjonspunktKode.AVKLAR_FØRSTE_UTTAKSDATO
  | AksjonspunktKode.OVERSTYR_AVKLAR_FAKTA_UTTAK
  | AksjonspunktKode.MANUELL_AVKLAR_FAKTA_UTTAK>

export default FaktaUttakAp;
