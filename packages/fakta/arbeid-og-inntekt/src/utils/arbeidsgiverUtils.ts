import type { ArbeidsgiverOpplysninger } from '@navikt/fp-types';

import type { AGOpplysninger } from '../types/arbeidsforholdOgInntekt';

export const lagArbeidsgiver = (arbeidsgiverIdent: string, ago: ArbeidsgiverOpplysninger): AGOpplysninger => ({
  arbeidsgiverIdent,
  arbeidsgiverNavn: ago.navn,
  ...(ago.erPrivatPerson
    ? { erPrivatPerson: true, arbeidsgiverFødselsdato: ago.fødselsdato }
    : { erPrivatPerson: false }),
});

export const harMatchendeArbeidsgiverIdent =
  <T extends { arbeidsgiverIdent: string }, U extends { arbeidsgiverIdent: string }>(item: T) =>
  (b: U): boolean =>
    b.arbeidsgiverIdent === item.arbeidsgiverIdent;
