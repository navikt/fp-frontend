import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

export type BekreftSvangerskapspengerAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>,
  'bekreftetSvpArbeidsforholdList'
>;
