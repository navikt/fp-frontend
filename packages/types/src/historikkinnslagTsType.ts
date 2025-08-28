import type {
  tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto,
  tjenester_behandling_historikk_HistorikkinnslagDto,
} from './apiDtoGenerert.ts';

// export type Historikkinnslag = Readonly<{
//   aktør: HistorikkUtfører;
//   opprettetTidspunkt: string;
//   behandlingUuid: string | null;
//   skjermlenke: SkjermlenkeType | null;
//   dokumenter: HistorikkInnslagDokumentLink[] | null;
//   tittel: string | null;
//   linjer: Linje[];
// }>;

export type Historikkinnslag = tjenester_behandling_historikk_HistorikkinnslagDto;

export type HistorikkInnslagDokumentLink = tjenester_behandling_historikk_HistorikkInnslagDokumentLinkDto;
