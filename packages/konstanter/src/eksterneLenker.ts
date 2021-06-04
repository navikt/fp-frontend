export const RETTSKILDE_URL = 'https://lovdata.no/pro/sso/login/nav';
// eslint-disable-next-line max-len
export const LINK_TIL_BESTE_BEREGNING_REGNEARK = 'https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn';
/* eslint-disable max-len */
export const SYSTEMRUTINE_URL = 'https://navno.sharepoint.com/sites/fag-og-ytelser-fagsystemer/SitePages/Saksbehandlingsl%C3%B8sningen-for-foreldrepenger-og-engangst%C3%B8nad.aspx';

export const hentDokumentLenke = (
  saksnummer: string,
  journalpostId: string,
  dokumentId: string,
): string => (`/fpsak/api/dokument/hent-dokument?saksnummer=${saksnummer}&journalpostId=${journalpostId}&dokumentId=${dokumentId}`);

export const hentVedtakDokumentLenke = (
  dokumentId: string,
): string => (`/fpsak/api/vedtak/hent-vedtaksdokument?behandlingId=${dokumentId}`);
