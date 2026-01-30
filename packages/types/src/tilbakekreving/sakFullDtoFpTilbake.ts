import type { FagsakBehandlingDtoFpTilbake } from './fagsakBehandlingDtoFpTilbake';

type BehandlingTypeFpTilbake = 'BT-007' | 'BT-009' | '-';

type BehandlingOpprettingDtoFpTilbake = {
  behandlingType: BehandlingTypeFpTilbake;
  kanOppretteBehandling: boolean;
};

type HistorikkAktørFpTilbake = 'BESL' | 'SBH' | 'SOKER' | 'ARBEIDSGIVER' | 'VL';

type HistorikkAktørDtoFpTilbake = {
  ident?: string;
  type: HistorikkAktørFpTilbake;
};

type TypeFpTilbake = 'TEKST' | 'LINJESKIFT';

type LinjeFpTilbake = {
  tekst?: string;
  type: TypeFpTilbake;
};

type HistorikkInnslagDokumentLinkDtoFpTilbake = {
  dokumentId: string;
  journalpostId: string;
  tag: string;
  utgått: boolean;
};

export type SkjermlenkeTypeFpTilbake =
  | 'FAKTA_OM_FEILUTBETALING'
  | 'TILBAKEKREVING'
  | 'FORELDELSE'
  | 'VEDTAK'
  | 'FAKTA_OM_VERGE'
  | '-';

export type HistorikkinnslagDtoFpTilbake = {
  behandlingUuid?: string;
  aktør: HistorikkAktørDtoFpTilbake;
  skjermlenke?: SkjermlenkeTypeFpTilbake;
  opprettetTidspunkt: string;
  dokumenter?: Array<HistorikkInnslagDokumentLinkDtoFpTilbake>;
  tittel?: string;
  linjer: Array<LinjeFpTilbake>;
};

export type SakFullDtoFpTilbake = Readonly<{
  saksnummer: string;
  behandlingTypeKanOpprettes: BehandlingOpprettingDtoFpTilbake[];
  behandlinger: FagsakBehandlingDtoFpTilbake[];
  historikkinnslag: HistorikkinnslagDtoFpTilbake[];
}>;
