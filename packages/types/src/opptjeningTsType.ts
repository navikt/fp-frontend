import Kodeverk from './kodeverkTsType';

export type OpptjeningAktivitet = {
  aktivitetType: Kodeverk;
  originalFom?: string;
  originalTom?: string;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string;
  arbeidsforholdRef: string;
  stillingsandel: number;
  naringRegistreringsdato: string;
  erManueltOpprettet: boolean;
  erGodkjent: boolean;
  erEndret: boolean;
  begrunnelse?: string;
  erPeriodeEndret: boolean;
};

export type OpptjeningAktivitetNew = {
  aktivitetType: Kodeverk;
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
  type: Kodeverk;
  klasse: Kodeverk;
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
  opptjeningAktivitetList?: OpptjeningAktivitet[] | OpptjeningAktivitetNew[];
}

export default Opptjening;
