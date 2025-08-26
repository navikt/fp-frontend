import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type OverstyringFaktaFødselAp = {
  termindato: string | undefined;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
