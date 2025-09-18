import type { InntektArbeidYtelse } from '@navikt/fp-types';

export const inntektArbeidYtelse: InntektArbeidYtelse = {
  relatertTilgrensendeYtelserForSoker: [
    {
      relatertYtelseNavn: 'Foreldrepenger',
      tilgrensendeYtelserListe: [
        {
          periodeFraDato: '2025-03-05',
          periodeTilDato: '2025-03-05',
          statusNavn: 'Under behandling',
          saksNummer: '1',
        },
      ],
    },
    {
      relatertYtelseNavn: 'Engangsstønad',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Sykepenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Dagpenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Arbeidsavklaringspenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Svangerskapspenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Omsorgspenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Opplæringspenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Pleiepenger sykt barn',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Pleiepenger nærstående',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'FRISINN',
      tilgrensendeYtelserListe: [],
    },
  ],
  relatertTilgrensendeYtelserForAnnenForelder: [
    {
      relatertYtelseNavn: 'Foreldrepenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Engangsstønad',
      tilgrensendeYtelserListe: [],
    },
  ],
  innvilgetRelatertTilgrensendeYtelserForAnnenForelder: [
    {
      relatertYtelseNavn: 'Foreldrepenger',
      tilgrensendeYtelserListe: [],
    },
    {
      relatertYtelseNavn: 'Engangsstønad',
      tilgrensendeYtelserListe: [],
    },
  ],
};
