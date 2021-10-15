import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type OpptjeningAktivitetAp = {
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  erGodkjent: boolean;
  begrunnelse: string;
}

export type AvklarAktivitetsPerioderAp = {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;

export default AvklarAktivitetsPerioderAp;
