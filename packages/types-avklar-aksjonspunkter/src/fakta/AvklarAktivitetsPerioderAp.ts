import { AksjonspunktCode } from '@navikt/fp-kodeverk';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type OpptjeningAktivitetAp = {
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  erGodkjent: boolean;
  begrunnelse: string;
}

export type AvklarAktivitetsPerioderAp = {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<AksjonspunktCode.VURDER_PERIODER_MED_OPPTJENING>;

export default AvklarAktivitetsPerioderAp;
