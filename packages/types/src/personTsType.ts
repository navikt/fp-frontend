import type { Kjønnkode } from './Kjonnkode.ts';

export type Person = Readonly<{
  navn: string;
  fødselsnummer: string;
  kjønn: Kjønnkode;
  diskresjonskode?: string;
  fødselsdato: string;
  dødsdato: string | null;
  aktørId: string | null;
}>;
