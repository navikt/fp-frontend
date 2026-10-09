import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type OverstyringAvklarStartdatoForPeriodenAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO>,
  'startdatoFraSøknad'
>;
