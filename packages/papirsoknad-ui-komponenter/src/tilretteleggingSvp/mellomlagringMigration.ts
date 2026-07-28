import {
  FRILANS_FIELD,
  SELVSTENDIG_NARINGSDRIVENDE_FIELD,
  TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME,
  TILRETTELEGGING_NAME_PREFIX,
} from './constants';
import type { FormValues } from './types';

type LegacyTilrettelegginger = {
  tilretteleggingArbeidsgiver?: unknown[];
  tilrettelegginger?: unknown[];
  [key: string]: unknown;
};

type LegacyTilretteleggingGruppe = {
  behovsdato?: string;
  tilrettelegginger?: unknown[];
  [key: string]: unknown;
};

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const migrateArbeidsgiverTilrettelegging = (value: unknown): unknown => {
  if (!isRecord(value)) {
    return value;
  }

  const { tilretteleggingArbeidsgiver, tilrettelegginger, ...rest } = value as LegacyTilrettelegginger;

  return {
    ...rest,
    tilrettelegginger: tilrettelegginger ?? tilretteleggingArbeidsgiver ?? [],
  };
};

const migrateArbeidsgiverTilrettelegginger = (value: unknown): unknown =>
  Array.isArray(value) ? value.map(migrateArbeidsgiverTilrettelegging) : value;

const migrateTilretteleggingGruppe = (value: unknown, legacyBehovsdato: unknown): unknown => {
  if (!isRecord(value) && !Array.isArray(value) && legacyBehovsdato === undefined) {
    return value;
  }

  const eksisterende = isRecord(value) ? (value as LegacyTilretteleggingGruppe) : undefined;

  return {
    ...eksisterende,
    behovsdato: typeof legacyBehovsdato === 'string' ? legacyBehovsdato : eksisterende?.behovsdato,
    tilrettelegginger: Array.isArray(value) ? value : (eksisterende?.tilrettelegginger ?? []),
  };
};

const migrateTilretteleggingArbeidsforhold = (value: unknown): FormValues[typeof TILRETTELEGGING_NAME_PREFIX] => {
  if (!isRecord(value)) {
    return {};
  }

  // Når de nye feltnavnene finnes, beholder vi dem og bruker kun legacy-feltene som fallback.
  const {
    behovsdatoSN,
    behovsdatoFrilans,
    tilretteleggingForArbeidsgiver,
    tilretteleggingSelvstendigNaringsdrivende,
    tilretteleggingFrilans,
    ...rest
  } = value;

  return {
    ...rest,
    [TILRETTELEGGING_FOR_ARBEIDSGIVER_FIELD_ARRAY_NAME]:
      migrateArbeidsgiverTilrettelegginger(tilretteleggingForArbeidsgiver),
    [SELVSTENDIG_NARINGSDRIVENDE_FIELD]: migrateTilretteleggingGruppe(
      tilretteleggingSelvstendigNaringsdrivende,
      behovsdatoSN,
    ),
    [FRILANS_FIELD]: migrateTilretteleggingGruppe(tilretteleggingFrilans, behovsdatoFrilans),
  } as FormValues[typeof TILRETTELEGGING_NAME_PREFIX];
};

export const migrerTilretteleggingMellomlagring = (mellomlagretData: Record<string, unknown> = {}): FormValues => ({
  [TILRETTELEGGING_NAME_PREFIX]: migrateTilretteleggingArbeidsforhold(mellomlagretData[TILRETTELEGGING_NAME_PREFIX]),
});
