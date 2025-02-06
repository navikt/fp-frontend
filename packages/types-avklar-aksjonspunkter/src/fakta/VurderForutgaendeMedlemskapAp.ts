import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import { AksjonspunktKode } from '@navikt/fp-kodeverk';

export type VurderForutgaendeMedlemskapAp = {
  avslagskode?: string;
  medlemFom?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FORUTGÅENDE_MEDLEMSKAPSVILKÅR>;
