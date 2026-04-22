import type { tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto } from '../fpsak.gen';

export type PrivatArbeidsgiver = tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & {
  erPrivatPerson: true;
  fødselsdato: string;
};
export type OrganisasjonArbeidsgiver = Omit<
  tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto,
  'fødselsdato'
> & {
  erPrivatPerson: false;
};

export type ArbeidsgiverOpplysninger = PrivatArbeidsgiver | OrganisasjonArbeidsgiver;

export type ArbeidsgiverOpplysningerPerId = Record<string, ArbeidsgiverOpplysninger>;

export type ArbeidsgiverOpplysningerWrapper = {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
};
