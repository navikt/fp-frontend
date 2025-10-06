import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSoknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<'6045'>;
