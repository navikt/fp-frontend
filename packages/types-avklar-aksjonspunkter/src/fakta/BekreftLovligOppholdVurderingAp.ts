import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';
import type { MedlemskapBekreftetPeriode } from './MedlemskapBekreftetPeriode';

export type BekreftLovligOppholdVurderingAp = {
  bekreftedePerioder: MedlemskapBekreftetPeriode[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_LOVLIG_OPPHOLD>;
