import type { AksjonspunktKode, AksjonspunktKodeTilbakekreving } from '@navikt/fp-types';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktKode | AksjonspunktKodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
};
