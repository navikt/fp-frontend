import type { AksjonspunktTilBekreftelse } from '../AksjonspunktTilBekreftelse';

export type OpptjeningAktivitetAp = {
  arbeidsgiverReferanse?: string;
  arbeidsforholdRef?: string;
  erGodkjent: boolean;
  begrunnelse: string;
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
};

export type AvklarAktivitetsPerioderAp = {
  opptjeningsaktiviteter?: OpptjeningAktivitetAp[];
} & AksjonspunktTilBekreftelse<'5051'>;
