import AksjonspunktKode from '@fpsak-frontend/kodeverk/src/aksjonspunktCodes';
import Kodeverk from '@fpsak-frontend/types/src/kodeverkTsType';

import AksjonspunktTilBekreftelse from '../AksjonspunktTilBekreftelse';

export type OpptjeningAktivitetAp = {
  aktivitetType: Kodeverk;
  originalFom: string;
  originalTom: string;
  opptjeningFom: string;
  opptjeningTom: string;
  oppdragsgiverOrg?: string;
  arbeidsgiverReferanse: string;
  arbeidsgiverIdentifikator?: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erManueltOpprettet: boolean;
  erGodkjent: boolean;
  erEndret: boolean;
}

export type AvklarAktivitetsPerioderAp = {
  opptjeningAktivitetList: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<AksjonspunktKode.VURDER_PERIODER_MED_OPPTJENING>;

export default AvklarAktivitetsPerioderAp;
