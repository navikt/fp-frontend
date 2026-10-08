import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

export type OverstyringFaktaFødselAp = {
  termindato: string | null;
  barn:
    | {
        fødselsdato: string;
        dødsdato?: string;
      }[]
    | null;
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
