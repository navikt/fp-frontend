import AksjonspunktTilBekreftelse from "../AksjonspunktTilBekreftelse";
import {AksjonspunktCode} from "@navikt/fp-kodeverk";

type VurderMedlemskap = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_MEDLEMSKAPSVILKÅRET>;

export default VurderMedlemskap;
