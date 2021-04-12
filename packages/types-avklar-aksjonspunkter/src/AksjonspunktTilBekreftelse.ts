import AksjonspunktCode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import AksjonspunktKodeTilbakekreving from '@fpsak-frontend/kodeverk/src/aksjonspunktCodesTilbakekreving';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktCode | AksjonspunktKodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
}

export default AksjonspunktTilBekreftelse;
