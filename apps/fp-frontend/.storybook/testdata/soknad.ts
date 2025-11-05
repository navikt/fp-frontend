import type { Soknad } from '@navikt/fp-types';

export const soknad: Soknad = {
  mottattDato: '2025-03-05',

  manglendeVedlegg: [],
  søknadsfrist: {
    gjeldendeMottattDato: '2025-05-31',
    utledetSøknadsfrist: '2025-05-31',
    søknadsperiodeStart: '2025-02-12',
    søknadsperiodeSlutt: '2025-10-07',
    dagerOversittetFrist: 0,
  },
};
