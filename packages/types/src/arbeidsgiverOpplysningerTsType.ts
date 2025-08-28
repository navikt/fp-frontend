import type { tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto } from './apiDtoGenerert.ts';

// export type ArbeidsgiverOpplysninger = Readonly<
//   | {
//       erPrivatPerson: true;
//       identifikator: string;
//       navn: string;
//       referanse: string;
//       fødselsdato: string;
//     }
//   | {
//       erPrivatPerson: false;
//       identifikator: string;
//       referanse: string;
//       navn: string;
//     }
// >;

// TODO: Hvordan løse?

export type ArbeidsgiverOpplysninger =
  | (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
  | (tjenester_behandling_arbeidsforhold_ArbeidsgiverOpplysningerDto & { erPrivatPerson: false });

export type ArbeidsgiverOpplysningerPerId = Record<string, ArbeidsgiverOpplysninger>;

export type ArbeidsgiverOpplysningerWrapper = {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
};
