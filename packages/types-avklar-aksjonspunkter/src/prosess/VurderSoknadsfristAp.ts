import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type VurderSoknadsfristAp = {
  ansesMottattDato?: string;
  harGyldigGrunn?: boolean;
} & AksjonspunktTilBekreftelse<'5043'>;
