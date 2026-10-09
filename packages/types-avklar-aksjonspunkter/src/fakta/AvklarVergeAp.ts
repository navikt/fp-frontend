import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type AvklarVergeAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.AVKLAR_VERGE>,
  'navn' | 'gyldigFom'
>;
