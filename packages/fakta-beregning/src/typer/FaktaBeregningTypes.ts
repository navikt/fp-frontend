import FaktaOmBeregning, {
  Aksjonspunkt, ArbeidsgiverOpplysningerPerId,
  Beregningsgrunnlag, KodeverkMedNavn,
  KortvarigAndel,
  KunYtelse, RefusjonskravSomKommerForSentListe, VurderBesteberegning,
  VurderMottarYtelse
} from "@fpsak-frontend/types";

export type FaktaStateProps = {
  beregningsgrunnlag: Beregningsgrunnlag;
  kortvarigeArbeidsforhold: KortvarigAndel[];
  vurderFaktaAP: Aksjonspunkt;
  kunYtelse: KunYtelse;
  tilfeller: string[]
  vurderMottarYtelse: VurderMottarYtelse;
  vurderBesteberegning: VurderBesteberegning;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
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
