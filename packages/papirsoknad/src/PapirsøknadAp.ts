import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';

export type PapirsøknadAp = AksjonspunktTilBekreftelse<
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER
>;
