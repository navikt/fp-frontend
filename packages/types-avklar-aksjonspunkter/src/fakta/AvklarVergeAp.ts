import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak AvklarVergeDto mangler @NotNull på navn og gyldigFom. Manglende gyldigFom gir exception
// i DatoIntervallEntitet, og navn kan bli lagret som null. Fjern MedPåkravdeFelt når det er fikset.
export type AvklarVergeAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.AVKLAR_VERGE>,
  'navn' | 'gyldigFom'
>;
