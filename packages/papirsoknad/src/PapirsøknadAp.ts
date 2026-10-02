import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { BekreftetAksjonspunktDto } from '@navikt/fp-types';

export type PapirsøknadAp = AksjonspunktTilBekreftelse<
  | typeof AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD
  | typeof AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER
  | typeof AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
  | typeof AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER
>;

export type PapirsøknadKode = PapirsøknadAp['@type'];

export type AksjonspunktTilBekreftelse<K extends AksjonspunktKode> = Extract<
  BekreftetAksjonspunktDto,
  { '@type': `${K}` }
>;
