import type { OpptjeningAktivitetType } from '@navikt/fp-kodeverk';

export type OpptjeningAktivitet = {
  aktivitetType: OpptjeningAktivitetType;
  opptjeningFom: string;
  opptjeningTom: string;
  arbeidsgiverReferanse: string | null;
  arbeidsforholdRef: string | null;
  stillingsandel: number;
  naringRegistreringsdato: string | null;
  erGodkjent: boolean | null;
  erEndret: boolean;
  begrunnelse?: string | null;
};

export type FastsattOpptjeningAktivitet = {
  fom: string;
  tom: string;
  klasse: string;
};

export type FastsattOpptjening = {
  opptjeningFom: string;
  opptjeningTom: string;
  opptjeningperiode: {
    måneder: number;
    dager: number;
  };
  fastsattOpptjeningAktivitetList?: FastsattOpptjeningAktivitet[];
};

export type FerdiglignetNæring = {
  år: string;
  beløp: number;
};

export type Opptjening = {
  fastsattOpptjening: FastsattOpptjening;
  opptjeningAktivitetList?: OpptjeningAktivitet[];
  ferdiglignetNæring?: FerdiglignetNæring[] | null;
};
