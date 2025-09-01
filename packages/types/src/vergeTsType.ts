import type {
  foreldrepenger_behandlingslager_behandling_verge_VergeType,
  foreldrepenger_domene_person_verge_dto_VergeDto,
} from './apiDtoGenerert.ts';

// NOTE [JOHANNES] -- backend returnerer strengt tatt 'null's.
// Men for å slippe refaktorere form logikken (hvor undefined er naturlig å bruke) er relevant felter overskrevet.
export type Verge = Omit<
  foreldrepenger_domene_person_verge_dto_VergeDto,
  'gyldigTom' | 'fnr' | 'organisasjonsnummer'
> & {
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
};

export type VergeType = foreldrepenger_behandlingslager_behandling_verge_VergeType;
