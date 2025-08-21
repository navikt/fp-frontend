import type { FagsakSøkDto } from './apiDtoGenerert.ts';
//
// export type FagsakEnkel = Readonly<{
//   saksnummer: string;
//   fagsakYtelseType: FagsakYtelseType;
//   status: FagsakStatus;
//   aktørId: string;
//   barnFødt: string;
//   opprettet: string;
//   endret?: string;
//   person: Person;
// }>;

export type FagsakEnkel = FagsakSøkDto;
