import {
  Aksjonspunkt, AlleKodeverk, ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag, FaktaOmBeregning,
  KortvarigAndel,
  KunYtelse, RefusjonskravSomKommerForSentListe, VurderBesteberegning,
  VurderMottarYtelse,
} from '@fpsak-frontend/types';

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
export type VurderBesteberegningValues = {
  besteberegningField: boolean;
}

export type GenerellAndelInfo = {
  andel: string;
  aktivitetStatus: string;
  andelsnr?: number;
  nyAndel: boolean;
  inntektskategori: string;
  lagtTilAvSaksbehandler: boolean;
}

export type KunYtelseValues = VurderBesteberegningValues | {
  besteberegningField?: boolean;
  brukersAndelBG?: GenerellAndelInfo & {
    fastsattBelop: string;
  }
}

export type TilfellerValues = VurderMilitærValues | NyIArbeidslivetValues
  | LønnsendringValues | NyoppstartetFLValues | {
  tidsbegrensetValues?: TidsbegrensetandelValues;
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
