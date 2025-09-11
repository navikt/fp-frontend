import type { Fødsel } from '@navikt/fp-types';

export const fødsel: Fødsel = {
  søknad: {
    barn: [
      {
        fødselsdato: '2025-03-05',
      },
    ],
    termindato: '2025-03-05',
    antallBarn: 1,
  },
  register: {
    barn: [
      {
        fødselsdato: '2025-03-05',
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
    barn: [
      {
        kilde: 'FOLKEREGISTER',
        barn: {
          fødselsdato: '2025-03-05',
        },
        kanOverstyres: false,
      },
    ],
  },
};
