import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { BekreftetAksjonspunktDto } from '@navikt/fp-types';

export type PapirsøknadAp = AksjonspunktTilBekreftelse<
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER
>;

export type AksjonspunktTilBekreftelse<K extends AksjonspunktKode> = Omit<
  Extract<BekreftetAksjonspunktDto, { '@type': `${K}` }>,
  '@type'
> & {
  kode: K;
};
