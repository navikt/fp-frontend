import type {
  foreldrepenger_behandlingslager_behandling_verge_VergeType,
  foreldrepenger_domene_person_verge_dto_VergeDto,
} from './apiDtoGenerert';

// NOTE [JOHANNES] -- backend returnerer strengt tatt 'null's.
// Men for å slippe refaktorere form logikken (hvor undefined er naturlig å bruke) er relevant felter overskrevet.
export type Verge = foreldrepenger_domene_person_verge_dto_VergeDto;
export type VergeType = foreldrepenger_behandlingslager_behandling_verge_VergeType;
