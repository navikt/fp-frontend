import { AksjonspunktTilBekreftelse } from '@navikt/ft-types';

import { RisikoklassifiseringAksjonspunktCode } from '../RisikoklassifiseringAksjonspunktCode';

export type AvklartRisikoklassifiseringAp = {
  harInnvirketBehandlingen?: boolean;
  faresignalVurdering?: string;
} & AksjonspunktTilBekreftelse<RisikoklassifiseringAksjonspunktCode.VURDER_FARESIGNALER>;
