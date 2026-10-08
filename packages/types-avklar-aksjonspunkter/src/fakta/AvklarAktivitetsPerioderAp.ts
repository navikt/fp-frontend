import { AksjonspunktKode } from '@navikt/fp-kodeverk';
import type { OpptjeningAktivitetType } from '@navikt/fp-types';

import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OpptjeningAktivitetAp = {
  arbeidsgiverReferanse?: string;
  arbeidsforholdRef?: string;
  erGodkjent: boolean;
  begrunnelse: string;
  aktivitetType: OpptjeningAktivitetType;
  opptjeningFom: string;
  opptjeningTom: string;
};

export type AvklarAktivitetsPerioderAp = {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<typeof AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;
