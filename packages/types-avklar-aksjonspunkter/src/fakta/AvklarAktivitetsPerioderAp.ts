import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend } from '../AksjonspunktFraBackend';

export type AvklarAktivitetsPerioderAp = AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;

export type OpptjeningAktivitetAp = NonNullable<AvklarAktivitetsPerioderAp['opptjeningsaktiviteter']>[number];
