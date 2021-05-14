import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type BeregningAktivitetTransformedValues = {
  opptjeningAktivitetType: string;
  fom: string;
  tom?: string;
  oppdragsgiverOrg?: string;
  arbeidsgiverIdentifikator?: string;
  arbeidsforholdRef?: string;
  skalBrukes: boolean;
}

export type BeregningAktiviteterTransformedValues = {
  beregningsaktivitetLagreDtoList: BeregningAktivitetTransformedValues[];
}

export type OverstyrBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues &
  AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_BEREGNINGSAKTIVITETER>;

export type AvklarBeregningsaktiviteterAP = BeregningAktiviteterTransformedValues & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_AKTIVITETER>;

type BeregningAktivitetAP = AvklarBeregningsaktiviteterAP | OverstyrBeregningsaktiviteterAP;

export default BeregningAktivitetAP;
