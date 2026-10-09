import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

type FatterVedtakDto = AksjonspunktFraBackend<typeof AksjonspunktKode.FATTER_VEDTAK>;

// '5005' er FATTER_VEDTAK i fptilbake, som tar imot samme form.
export type FatterVedtakAp = Omit<FatterVedtakDto, 'kode'> & {
  kode: typeof AksjonspunktKode.FATTER_VEDTAK | '5005';
};
