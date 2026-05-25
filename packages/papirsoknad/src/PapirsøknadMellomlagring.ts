import type { FagsakYtelseType, FamilieHendelseType, ForeldreType } from '@navikt/fp-types';

/**
 * Kontrakt for mellomlagret papirsøknad-data.
 *
 * Metadata-feltene (fagsakYtelseType, familieHendelseType, foreldreType) identifiserer skjematype.
 * Øvrige felter er rå form-verdier som varierer per skjema.
 */
export interface PapirsøknadMellomlagring {
  fagsakYtelseType: FagsakYtelseType;
  familieHendelseType: FamilieHendelseType;
  foreldreType?: ForeldreType;
  [key: string]: unknown;
}

/**
 * Type guard som verifiserer at et parset JSON-objekt har påkrevde metadata-felter.
 */
export const isPapirsøknadMellomlagring = (data: Record<string, unknown>): data is PapirsøknadMellomlagring =>
  typeof data['fagsakYtelseType'] === 'string' && typeof data['familieHendelseType'] === 'string';
