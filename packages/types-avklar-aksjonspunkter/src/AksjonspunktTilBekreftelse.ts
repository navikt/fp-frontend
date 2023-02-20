import { AksjonspunktCode, AksjonspunktCodeTilbakekreving } from '@navikt/fp-kodeverk';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktCode | AksjonspunktCodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
}

export default AksjonspunktTilBekreftelse;
