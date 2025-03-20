import type { Inntektsmelding } from '@navikt/fp-types';

export const alleInntektsmeldinger: Inntektsmelding[] = [
  {
    inntektPrMnd: 20000.0,
    refusjonPrMnd: 41666.0,
    arbeidsgiverIdent: '992257822',
    eksternArbeidsforholdId: null,
    internArbeidsforholdId: 'c33a8ee0-84cb-4705-a249-40cf52b51b48',
    kontaktpersonNavn: 'Corpolarsen',
    kontaktpersonNummer: '41925090',
    journalpostId: '35164102',
    dokumentId: '12345678',
    motattDato: '2025-03-05',
    innsendingstidspunkt: '2025-03-05T16:43:02.948918',
    årsak: null,
    begrunnelse: null,
    saksbehandlersVurdering: null,
    kildeSystem: 'FS22',
    startDatoPermisjon: '2025-02-12',
    aktiveNaturalytelser: [],
    refusjonsperioder: [],
    innsendingsårsak: 'NY',
    tilknyttedeBehandlingIder: ['a47091ce-638c-403a-8ef9-b4419b4d4313'],
  },
];
