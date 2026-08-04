import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';

export type AvklartRisikoklassifiseringAp = AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_FARESIGNALER>;
