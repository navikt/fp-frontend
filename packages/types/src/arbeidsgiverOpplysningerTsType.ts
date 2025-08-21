import type { ArbeidsgiverOpplysningerDto } from './apiDtoGenerert.ts';

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
  | (ArbeidsgiverOpplysningerDto & { erPrivatPerson: true; fødselsdato: string })
  | (ArbeidsgiverOpplysningerDto & { erPrivatPerson: false });

export type ArbeidsgiverOpplysningerPerId = Record<string, ArbeidsgiverOpplysninger>;

export type ArbeidsgiverOpplysningerWrapper = {
  arbeidsgivere: ArbeidsgiverOpplysningerPerId;
};
