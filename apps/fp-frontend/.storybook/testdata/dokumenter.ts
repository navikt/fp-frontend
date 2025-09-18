import type { Dokument } from '@navikt/fp-types';

export const dokumenter: Dokument[] = [
  {
    journalpostId: '35164101',
    dokumentId: '35164101',
    behandlingUuidList: [],
    tidspunkt: '2025-03-05T17:00:37',
    tittel: 'Inntektsmelding',
    kommunikasjonsretning: 'INN',
    gjelderFor: null,
    behandlinger: null,
    arbeidsgiverReferanse: null,
  },
  {
    journalpostId: '35164102',
    dokumentId: '35164102',
    behandlingUuidList: ['a47091ce-638c-403a-8ef9-b4419b4d4313'],
    tidspunkt: '2025-03-05T17:00:37',
    tittel: 'Søknad for foreldrepenger',
    kommunikasjonsretning: 'INN',
    gjelderFor: 'NAV FAMILIE- OG PENSJONSYTELSER OSLO',
    behandlinger: null,
    arbeidsgiverReferanse: null,
  },
];
