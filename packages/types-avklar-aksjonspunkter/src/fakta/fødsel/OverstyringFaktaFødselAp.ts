import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type OverstyringFaktaFødselAp = {
  termindato: string | undefined;
  barn: {
    fodselsdato: string;
    dodsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
