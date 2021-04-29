import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type VurderRefusjonAndelTransformedValues = {
  arbeidsgiverOrgnr?: string;
  arbeidsgiverAktoerId?: string;
  internArbeidsforholdRef?: string;
  fastsattRefusjonFom: string;
  delvisRefusjonPrMndFørStart?: number;
};

type VurderRefusjonTransformedValues = {
  fastsatteAndeler: VurderRefusjonAndelTransformedValues[];
};

type VurderRefusjonBeregningsgrunnlagAP = VurderRefusjonTransformedValues & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_REFUSJON_BERGRUNN>;

export default VurderRefusjonBeregningsgrunnlagAP;
