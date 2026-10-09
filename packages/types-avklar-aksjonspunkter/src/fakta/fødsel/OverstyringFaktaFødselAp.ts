import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../../AksjonspunktFraBackend';

export type OverstyringFaktaFødselAp = AksjonspunktFraBackend<typeof AksjonspunktKode.OVERSTYRING_AV_FAKTA_OM_FØDSEL>;
