import { finnIntlAvvik } from '@navikt/fp-utils-test';

import nb from './nb_NO.json';

describe('intl', () => {
  it('skal ha samsvar mellom nøkler i koden og i nb_NO.json', () => {
    expect(
      finnIntlAvvik(nb, {
        // Sendes inn som panelTekstKode fra fp-frontend
        ignorer: ['Behandlingspunkt.Soknadsfristvilkaret'],
      }),
    ).toEqual({ manglerIFil: [], ubrukteNøkler: [] });
  });
});
