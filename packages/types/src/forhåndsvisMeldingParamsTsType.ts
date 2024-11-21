export type ForhåndsvisMeldingParams = Readonly<{
  fagsakYtelseType?: string;
  behandlingUuid?: string;
  automatiskVedtaksbrev?: boolean;
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak?: boolean;
}>;
