import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type BekreftOmsorgVurderingAp = AksjonspunktFraBackend<typeof AksjonspunktKode.AVKLAR_LØPENDE_OMSORG>;
