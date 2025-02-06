import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

export type VurderMedlemskapAp = {
  avslagskode?: string;
  opphørFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_MEDLEMSKAPSVILKÅRET>;
