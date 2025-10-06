import type { FaresignalVurdering } from '@navikt/fp-types';
import type { AksjonspunktTilBekreftelse } from '@navikt/fp-types-avklar-aksjonspunkter';

export type AvklartRisikoklassifiseringAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: FaresignalVurdering;
} & AksjonspunktTilBekreftelse<'5095'>;
