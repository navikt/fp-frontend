import type { Fødsel } from '@navikt/fp-types';

export const fødsel: Fødsel = {
  søknad: {
    barn: [
      {
        fødselsdato: '2025-03-05',
        dødsdato: null,
      },
    ],
    termindato: '2025-03-05',
    utstedtdato: null,
    antallBarn: 1,
  },
  register: {
    barn: [
      {
        fødselsdato: '2025-03-05',
        dødsdato: null,
      },
    ],
  },
  gjeldende: {
    fødselDokumetasjonStatus: 'DOKUMENTERT',
    termin: {
      kilde: 'SØKNAD',
      termindato: '2025-03-05',
    },
    antallBarn: {
      kilde: 'SØKNAD',
      antall: 1,
    },
    utstedtdato: null,
    barn: [
      {
        kilde: 'FOLKEREGISTER',
        barn: {
          fødselsdato: '2025-03-05',
          dødsdato: null,
        },
        kanOverstyres: false,
      },
    ],
  },
};
