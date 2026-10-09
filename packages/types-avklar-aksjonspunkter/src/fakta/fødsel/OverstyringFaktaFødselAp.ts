import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type OverstyringFaktaFødselAp = {
  termindato?: string;
  barn?: {
    fødselsdato: string;
    dødsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
