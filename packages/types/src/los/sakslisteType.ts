import type {
  oppgave_Periodefilter,
  tjenester_avdelingsleder_saksliste_dto_SakslisteLagreDto,
  tjenester_avdelingsleder_saksliste_dto_SorteringDto,
  tjenester_felles_dto_KøSorteringFeltDto,
  tjenester_felles_dto_SakslisteDto,
  tjenester_felles_dto_SakslisteDto_AndreKriterieDto,
  tjenester_felles_dto_SakslisteDto_StatistikkDto,
} from './fplosDtoGenerert.ts';

export type AnnetKriterie = tjenester_felles_dto_SakslisteDto_AndreKriterieDto;

export type KøSorteringFelt = tjenester_felles_dto_KøSorteringFeltDto;

export type Statistikk = tjenester_felles_dto_SakslisteDto_StatistikkDto;

export type Sortering = tjenester_avdelingsleder_saksliste_dto_SorteringDto;

export type Periodefilter = oppgave_Periodefilter;

export type SakslisteAvdeling = tjenester_felles_dto_SakslisteDto;

export type SakslisteDto = tjenester_avdelingsleder_saksliste_dto_SakslisteLagreDto;
