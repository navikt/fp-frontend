// eslint-disable-next-line max-len
export const LINK_TIL_BESTE_BEREGNING_REGNEARK =
  'https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn';
/* eslint-disable max-len */
export const SYSTEMRUTINE_URL =
  'https://navno.sharepoint.com/sites/fag-og-ytelser-fagsystemer/SitePages/Saksbehandlingsl%C3%B8sningen-for-foreldrepenger-og-engangst%C3%B8nad.aspx';
export const RETTSKILDE_URL = 'https://lovdata.no/pro/sso/login/nav';

export const AINNTEKT_URL = 'https://arbeid-og-inntekt.nais.adeo.no'; // /?0#!empty';
export const AAREG_URL = 'https://arbeid-og-inntekt.nais.adeo.no/';
export const GOSYS_URL = 'https://gosys.intern.nav.no/gosys/bruker/brukeroversikt.jsf?execution=e3s1';

export const getModiaUrl = (fødselsnummer: string) =>
  `https://app.adeo.no/modiapersonoversikt/person/${fødselsnummer}/meldinger/`;

export const hentDokumentLenke = (saksnummer: string, journalpostId: string, dokumentId: string): string =>
  `/fpsak/api/dokument/hent-dokument?saksnummer=${saksnummer}&journalpostId=${journalpostId}&dokumentId=${dokumentId}`;

export const hentVedtakDokumentLenke = (behandlingUuid: string): string =>
  `/fpsak/api/vedtak/hent-vedtaksdokument?behandlingId=${behandlingUuid}`;
