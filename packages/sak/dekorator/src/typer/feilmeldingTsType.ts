/**
 * Vilkårleg JSON frå backend som blir vist i feilmeldingsdetaljar-modalen.
 * Strukturen er ukjend, so modalen renderer alle JSON-former rekursivt.
 */
export type Feilmeldingsdetaljer =
  string | number | boolean | null | { [nøkkel: string]: Feilmeldingsdetaljer } | Feilmeldingsdetaljer[];

export type Feilmelding = {
  melding: string;
  tilleggsInfo?: Feilmeldingsdetaljer;
};
