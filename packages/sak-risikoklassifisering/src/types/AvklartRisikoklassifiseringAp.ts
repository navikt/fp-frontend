import { AksjonspunktTilBekreftelse } from '@navikt/fp-types';

import { RisikoklassifiseringAksjonspunktCode } from '../RisikoklassifiseringAksjonspunktCode';

export type AvklartRisikoklassifiseringAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<RisikoklassifiseringAksjonspunktCode.VURDER_FARESIGNALER>;
