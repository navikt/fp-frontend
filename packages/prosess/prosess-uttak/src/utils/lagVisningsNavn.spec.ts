import { expect, it } from 'vitest';

import type { ArbeidsgiverOpplysninger } from '@navikt/fp-types';

import { lagVisningsNavn } from './lagVisningsNavn';

describe('lagVisningsNavn', () => {
  it('skal returnere navn på person', () => {
    const navn = lagVisningsNavn({
      erPrivatPerson: true,
      identifikator: '123',
      navn: 'Espen Utvikler',
      referanse: '123',
      fødselsdato: '1990-01-01',
    });
    expect(navn).toEqual('Espen...(01.01.1990)');
  });

  const bedrift: ArbeidsgiverOpplysninger = {
    erPrivatPerson: false,
    identifikator: '123456789',
    navn: 'BARNEHAGEN AS',
    referanse: '123',
  };

  it('skal returnere navn på bedrift', () => {
    const navn = lagVisningsNavn(bedrift);
    expect(navn).toEqual('BARNEHAGEN AS (123456789)');
  });

  it('skal returnere navn på bedrift med ektern arbeidsforholdId', () => {
    const navn = lagVisningsNavn(bedrift, 'eksterArbeidsforholdId-123');
    expect(navn).toEqual('BARNEHAGEN AS (123456789)...-123');
  });
});
