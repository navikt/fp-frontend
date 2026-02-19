import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OverstyringAvklarStartdatoForPeriodenAp = {
  startdatoFraSøknad: string;
  opprinneligDato?: string;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO>;
