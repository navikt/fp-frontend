import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak OverstyringAvklarStartdatoForPeriodenDto mangler @NotNull på startdatoFraSøknad.
// Null gir NPE i håndtereren. Fjern MedPåkravdeFelt når det er fikset.
export type OverstyringAvklarStartdatoForPeriodenAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.OVERSTYRING_AV_AVKLART_STARTDATO>,
  'startdatoFraSøknad'
>;
