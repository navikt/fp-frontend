import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import type { MedlemskapBekreftetPeriode } from './MedlemskapBekreftetPeriode';

export type AvklarFortsattMedlemskapAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.UTGÅTT_5053>;
