import dayjs from 'dayjs';

import type { OrganisasjonArbeidsgiver, PrivatArbeidsgiver } from '@navikt/fp-types';

export const lagArbeidsgiver = (referanse: string, navn: string): OrganisasjonArbeidsgiver => ({
  erPrivatPerson: false,
  referanse,
  identifikator: referanse,
  navn,
});

export const lagPrivatArbeidsgiver = (referanse: string, navn: string, fødselsdato: string): PrivatArbeidsgiver => ({
  erPrivatPerson: true,
  referanse,
  navn,
  fødselsdato,
  identifikator: dayjs(fødselsdato, 'DDMMYY').format('DDMMYY') + '00000',
});
