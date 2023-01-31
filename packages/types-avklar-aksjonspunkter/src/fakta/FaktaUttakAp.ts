import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

type FaktaUttakAp = {
  bekreftedePerioder: {
    bekreftetPeriode: {
      tom: string;
      fom: string;
      uttakPeriodeType: string;
      utsettelseÅrsak: string;
      overføringÅrsak: string;
      oppholdÅrsak: string;
      resultat: string;
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
      morsAktivitet: string;
      periodeKilde?: string;
      mottattDato: string;
    };
    orginalFom?: string;
    orginalTom?: string;
    originalResultat?: string;
    originalArbeidstidsprosent?: number;
    originalBegrunnelse?: string;
  }[];
  slettedePerioder: {
    fom: string;
    tom: string;
    uttakPeriodeType: string;
    begrunnelse?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.AVKLAR_UTTAK
  | AksjonspunktCode.AVKLAR_FAKTA_UTTAK_GRADERING_UKJENT_AKTIVITET
  | AksjonspunktCode.AVKLAR_FAKTA_UTTAK_GRADERING_AKTIVITET_UTEN_BEREGNINGSGRUNNLAG
  | AksjonspunktCode.AVKLAR_FØRSTE_UTTAKSDATO
  | AksjonspunktCode.OVERSTYR_AVKLAR_FAKTA_UTTAK
  | AksjonspunktCode.MANUELL_AVKLAR_FAKTA_UTTAK>

export default FaktaUttakAp;
