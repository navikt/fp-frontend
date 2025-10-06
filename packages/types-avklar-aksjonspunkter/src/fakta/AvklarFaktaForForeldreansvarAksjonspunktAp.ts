import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarFaktaForForeldreansvarAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  foreldreansvarDato: string;
} & AksjonspunktTilBekreftelse<'5054'>;
