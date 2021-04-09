import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktCode> = {
  kode: T;
  begrunnelse?: string;
}

export default AksjonspunktTilBekreftelse;
