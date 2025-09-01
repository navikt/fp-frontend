import type {
  foreldrepenger_behandlingslager_behandling_verge_VergeType,
  foreldrepenger_domene_person_verge_dto_VergeDto,
} from './apiDtoGenerert.ts';

// NOTE [JOHANNES] -- siden denne ikke kommer fra backend velger jeg å endre null felter til undefined siden det er mer kompatibelt med form.
export type Verge = Omit<
  foreldrepenger_domene_person_verge_dto_VergeDto,
  'gyldigTom' | 'fnr' | 'organisasjonsnummer'
> & {
  gyldigTom?: string;
  fnr?: string;
  organisasjonsnummer?: string;
};

export type VergeType = foreldrepenger_behandlingslager_behandling_verge_VergeType;
