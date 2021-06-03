import {
  Aksjonspunkt, AlleKodeverk, ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag, FaktaOmBeregning,
  KortvarigAndel,
  KunYtelse, RefusjonskravSomKommerForSentListe, VurderBesteberegning,
  VurderMottarYtelse,
} from '@fpsak-frontend/types';
import AndelFieldValue from "./FieldValues";

export type TidsbegrensetandelValues = {
  [key: string]: boolean;
}

export type VurderMilitærValues = {
  vurderMilitær?: boolean;
}

export type NyIArbeidslivetValues = {
  erSNNyIArbeidslivet?: boolean;
}

export type LønnsendringValues = {
  lonnsendringField?: boolean
}

export type NyoppstartetFLValues = {
  NyoppstartetFLField?: boolean
}
export type VurderBesteberegningMedKunYtelseValues = {
  besteberegningField: boolean;
}

export type VurderBesteberegningValues = {
  vurderbesteberegningField?: boolean;
}

export type VurderEtterlønnSluttpakkeValues = {
  vurderEtterlønnSluttpakke?: boolean;
}

export type ErOverstyringValues = {
  manuellOverstyringRapportertInntekt?: boolean;
}

export type VurderOgFastsettATFLValues = ErOverstyringValues & {
  inntektFieldArray?: AndelFieldValue[];
}

export type GenerellAndelInfo = {
  andel: string;
  aktivitetStatus: string;
  andelsnr?: number;
  nyAndel: boolean;
  inntektskategori: string;
  lagtTilAvSaksbehandler: boolean;
}

export type BrukersAndelValues = GenerellAndelInfo & {
  fastsattBelop: string;
}

export type KunYtelseValues = VurderBesteberegningMedKunYtelseValues | {
  brukersAndelBG?: BrukersAndelValues[];
}

export type VurderMottarYtelseValues = {
  [key: string]: boolean;
}

export type VurderRefusjonValues = {
  [key: string]: boolean;
}

export type TilfellerValues = VurderMilitærValues | NyIArbeidslivetValues
  | LønnsendringValues | NyoppstartetFLValues | KunYtelseValues |
  VurderEtterlønnSluttpakkeValues | VurderBesteberegningValues | VurderOgFastsettATFLValues |{
  tidsbegrensetValues?: TidsbegrensetandelValues;
  vurderMottarYtelseValues?: VurderMottarYtelseValues;
  vurderRefusjonValues?: VurderRefusjonValues;
}

export type FaktaOmBeregningValues = TilfellerValues & {
  tilfeller: string[];
  kortvarigeArbeidsforhold: KortvarigAndel[];
  faktaOmBeregning: FaktaOmBeregning;
  beregningsgrunnlag: Beregningsgrunnlag;
  vurderMottarYtelse: VurderMottarYtelse;
  kunYtelse: KunYtelse;
}

export type FaktaOmBeregningAksjonspunktValues = FaktaOmBeregningValues & {
  aksjonspunkter: Aksjonspunkt[];
  begrunnelseFaktaTilfeller?: string;
}

export type FaktaStateProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  kortvarigeArbeidsforhold: KortvarigAndel[];
  vurderFaktaAP: Aksjonspunkt;
  kunYtelse: KunYtelse;
  tilfeller: string[]
  vurderMottarYtelse: VurderMottarYtelse;
  vurderBesteberegning: VurderBesteberegning;
  alleKodeverk: AlleKodeverk;
  aksjonspunkter: Aksjonspunkt[];
  faktaOmBeregning: FaktaOmBeregning;
  arbeidsgiverOpplysningerPerId: ArbeidsgiverOpplysningerPerId;
  refusjonskravSomKommerForSentListe: RefusjonskravSomKommerForSentListe[];
  erOverstyrt: boolean;
}

export type FaktaValues = {

}

type FaktaOgAksjonspunktBeregningValues = {
  aksjonspunkter: Aksjonspunkt[];
  begrunnelseFaktaTilfeller: string;

}
