import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktFraBackend, MedPåkravdeFelt } from '../AksjonspunktFraBackend';

// TODO: begrunnelse er valgfri i fp-sak BekreftArbeidMedPermisjonUtenSluttdatoDto og brukes bare i historikkinnslaget.
// Avklar om den skal være påkrevd. I så fall: legg til @NotNull i backend. Hvis ikke: fjern MedPåkravdeFelt her.
export type VurderArbeidsforholdPermisjonAp = MedPåkravdeFelt<
  AksjonspunktFraBackend<typeof AksjonspunktKode.VURDER_PERMISJON_UTEN_SLUTTDATO>,
  'begrunnelse'
>;
