import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: fp-sak BekreftSvangerskapspengerDto mangler @NotNull på bekreftetSvpArbeidsforholdList.
// Null gir NPE i oppdatereren. Fjern MedPåkravdeFelt når det er fikset.
export type BekreftSvangerskapspengerAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_SVP_TILRETTELEGGING>,
  'bekreftetSvpArbeidsforholdList'
>;
