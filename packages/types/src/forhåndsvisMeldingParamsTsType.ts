export type ForhåndsvisMeldingParams = Readonly<{
  behandlingUuid: string;
  dokumentMal?: string;
  arsakskode?: string;
  automatiskVedtaksbrev?: boolean;
  tittel?: string;
  fritekst?: string;
}>;
