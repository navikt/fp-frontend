export type GenererHtmlDokument = Readonly<{
  behandlingUuid: string;
  dokumentMal: string;
  automatiskVedtaksbrev: boolean;
}>;

export type OverstyrtDokument = Readonly<{
  opprinneligHtml: string;
  redigertHtml: string | null;
}>;
