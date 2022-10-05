export const getHref = (fpsakUrl: string, saksnummer: number, fagsystemInternId?: string) => (fagsystemInternId
  ? `${fpsakUrl}/fagsak/${saksnummer}/behandling/${fagsystemInternId}/?punkt=default&fakta=default` : `${fpsakUrl}/fagsak/${saksnummer}/`);

export const åpneFagsak = (
  fpsakUrl: string,
  system: string,
  saksnummer: number,
  behandlingId?: string,
) => {
  if (system === 'FPSAK' || system === 'FPTILBAKE') {
    window.location.assign(getHref(fpsakUrl, saksnummer, behandlingId));
  } else {
    throw new Error('Fagsystemet for oppgaven er ukjent');
  }
};
