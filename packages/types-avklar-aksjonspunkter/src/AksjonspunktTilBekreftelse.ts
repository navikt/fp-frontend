import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AksjonspunktKodeTilbakekreving } from '@navikt/fp-types';

export type AksjonspunktTilBekreftelse<T extends AksjonspunktKode | AksjonspunktKodeTilbakekreving> = {
  kode: T;
  begrunnelse?: string;
};
