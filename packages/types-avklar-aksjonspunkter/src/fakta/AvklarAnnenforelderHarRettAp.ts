import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type AvklarAnnenforelderHarRettAp = {
  annenforelderHarRett: boolean;
  annenforelderMottarUføretrygd?: boolean;
  annenForelderHarRettEØS?: boolean;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ANNEN_FORELDER_RETT>;
