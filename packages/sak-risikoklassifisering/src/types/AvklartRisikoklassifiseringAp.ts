import { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';

import { AksjonspunktKode } from '@navikt/fp-kodeverk';

export type AvklartRisikoklassifiseringAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>;
