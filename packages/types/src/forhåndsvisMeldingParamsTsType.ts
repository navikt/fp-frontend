type ForhåndsvisMeldingParams = Readonly<{
  ytelseType: {
    kode: string,
    kodeverk: string,
  };
  fagsakYtelseType: string;
  behandlingUuid: string;
  vedtaksbrev?: string;
  automatiskVedtaksbrev?: boolean;
  fritekst?: string;
  dokumentMal?: string;
  tittel?: string;
  gjelderVedtak?: boolean;
}>;

export default ForhåndsvisMeldingParams;
