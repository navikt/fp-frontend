import { AksjonspunktKode, AksjonspunktKodeTilbakekreving } from '@navikt/fp-kodeverk';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktKode | AksjonspunktKodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
};
