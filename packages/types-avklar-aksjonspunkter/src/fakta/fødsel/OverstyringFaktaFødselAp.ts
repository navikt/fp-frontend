import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type OverstyringFaktaFødselAp = {
  termindato: string | undefined;
  erBarnFødt: boolean;
  barn?: {
    fødselsdato: string;
    dødsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
