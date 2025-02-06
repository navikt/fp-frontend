import { AksjonspunktKode } from '@navikt/fp-kodeverk';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OpptjeningAktivitetAp = {
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  erGodkjent: boolean;
  begrunnelse: string;
};

export type AvklarAktivitetsPerioderAp = {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;
