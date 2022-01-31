export type OpptjeningAktivitet = {
  aktivitetType: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
};

export type FastsattOpptjeningAktivitet = {
  fom: string;
  tom: string;
  type: string;
  klasse: string;
  aktivitetReferanse: string;
  arbeidsgiverNavn: string;
};

export type FastsattOpptjening = {
  opptjeningFom: string;
  opptjeningTom: string;
  opptjeningperiode: {
    måneder: number;
    dager: number;
  };
  fastsattOpptjeningAktivitetList?: FastsattOpptjeningAktivitet[];
}

type Opptjening = {
  fastsattOpptjening: FastsattOpptjening;
  opptjeningAktivitetList?: OpptjeningAktivitet[];
}

export default Opptjening;
