import type { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type KontrollerBesteberegningAP = AksjonspunktTilBekreftelse<AksjonspunktKode.UTGÅTT_5048>;

export type ManuellKontrollBesteberegningAP = AksjonspunktTilBekreftelse<AksjonspunktKode.MANUELL_KONTROLL_AV_BESTEBEREGNING>;

// eslint-disable-next-line @typescript-eslint/no-redundant-type-constituents
export type BesteberegningAP = ManuellKontrollBesteberegningAP | KontrollerBesteberegningAP;
