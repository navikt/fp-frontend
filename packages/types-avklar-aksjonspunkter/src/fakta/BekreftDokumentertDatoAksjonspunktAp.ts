import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type BekreftDokumentertDatoAksjonspunktAp = {
  omsorgsovertakelseDato: string;
  fodselsdatoer: Record<number, string>;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.AVKLAR_ADOPSJONSDOKUMENTAJON>;
