import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../../AksjonspunktTilBekreftelse';

// TODO: fp-sak OverstyringFaktaOmFødselDto krever termindato (@NotNull), men frontend krever den bare når barnet
// ikke er født. Avklar med fag om backend skal tillate null eller frontend alltid kreve termindato. Bytt deretter
// til AksjonspunktFraBackend.
export type OverstyringFaktaFødselAp = {
  termindato?: string;
  barn?: {
    fødselsdato: string;
    dødsdato?: string;
  }[];
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
