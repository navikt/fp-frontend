import AksjonspunktCode from '@navikt/fp-kodeverk/src/aksjonspunktCodes';
import AksjonspunktKodeTilbakekreving from '@navikt/fp-kodeverk/src/aksjonspunktCodesTilbakekreving';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktCode | AksjonspunktKodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
}

export default AksjonspunktTilBekreftelse;
