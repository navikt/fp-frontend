import type { Opptjening } from '@navikt/fp-types';

export const opptjening: Opptjening = {
  fastsattOpptjening: {
    opptjeningFom: '2024-04-12',
    opptjeningTom: '2025-02-11',
    opptjeningperiode: {
      måneder: 10,
      dager: 4,
    },
    fastsattOpptjeningAktivitetList: [
      {
        fom: '2024-04-12',
        tom: '2025-02-11',
        klasse: 'BEKREFTET_GODKJENT',
      },
    ],
  },
  opptjeningAktivitetList: [
    {
      aktivitetType: 'FRILANS',
      opptjeningFom: '2023-03-05',
      opptjeningTom: '9999-12-31',
      arbeidsgiverReferanse: null,
      arbeidsforholdRef: null,
      stillingsandel: 0,
      naringRegistreringsdato: null,
      erGodkjent: null,
      erEndret: false,
      begrunnelse: null,
    },
    {
      aktivitetType: 'ARBEID',
      opptjeningFom: '2024-03-05',
      opptjeningTom: '9999-12-31',
      arbeidsgiverReferanse: '992257822',
      arbeidsforholdRef: 'c33a8ee0-84cb-4705-a249-40cf52b51b48',
      stillingsandel: 75.0,
      naringRegistreringsdato: null,
      erGodkjent: true,
      erEndret: false,
      begrunnelse: null,
    },
  ],
  ferdiglignetNæring: null,
};
