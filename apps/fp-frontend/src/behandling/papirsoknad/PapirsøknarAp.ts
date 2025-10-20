import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { FaresignalVurdering } from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';

export type PapirsøknarAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: FaresignalVurdering;
} & AksjonspunktTilBekreftelse<
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_ENGANGSSTØNAD
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIR_ENDRINGSØKNAD_FORELDREPENGER
  | AksjonspunktKode.REGISTRER_PAPIRSØKNAD_SVANGERSKAPSPENGER
>;
