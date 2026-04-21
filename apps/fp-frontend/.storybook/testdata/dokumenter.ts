import type { Dokument } from '@navikt/fp-types';

export const dokumenter: Dokument[] = [
  {
    journalpostId: '0000',
    dokumentId: '00000',
    behandlingUuidList: [],
    tidspunkt: '2025-03-07T17:00:37',
    tittel: 'Inntektsmelding',
    kommunikasjonsretning: 'INN',
    gjelderFor: 'NAV FAMILIE- OG PENSJONSYTELSER OSLO',
  },
  {
    journalpostId: '1111',
    dokumentId: '11111',
    behandlingUuidList: ['a47091ce-638c-403a-8ef9-b4419b4d4313'],
    tidspunkt: '2025-03-05T17:00:37',
    tittel: 'Søknad for foreldrepenger',
    kommunikasjonsretning: 'INN',
  },
];
