import type { tjenester_behandling_uttak_dto_SaldoerDto_SaldoVisningStønadskontoType as StønadskontoType } from '../fpsak.gen';

// Den genererte StønadskontoType dekker bare kontoene som vises i saldo. Kodeverket fra backend har alle.
export type StønadskontoTypeKodeverk =
  | StønadskontoType
  | 'TILLEGG_FLERBARN'
  | 'TILLEGG_PREMATUR'
  | 'UFØREDAGER'
  | 'TETTE_SAKER_MOR'
  | 'TETTE_SAKER_FAR'
  | 'BARE_FAR_RETT'
  | 'FAR_RUNDT_FØDSEL';
