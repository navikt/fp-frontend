export const LINK_TIL_BESTE_BEREGNING_REGNEARK =
  'https://navno.sharepoint.com/:x:/s/fag-og-ytelser-familie-foreldrepenger/EaB60qfvI_JNlSDbhFXp6FoBIw3G260Wp6zOm78U6aFrng?e=3Jy3sn';
export const SYSTEMRUTINE_URL = 'https://navno.sharepoint.com/sites/fag-og-ytelser-familie-foreldrepenger';
export const RETTSKILDE_URL = 'https://lovdata.no/pro/sso/login/nav';

export const AINNTEKT_URL = 'https://arbeid-og-inntekt.nais.adeo.no'; // /?0#!empty';
export const AAREG_URL = 'https://arbeid-og-inntekt.nais.adeo.no/';

export const FOLKETRYGDLOVEN_KAP14_13_URL = 'https://lovdata.no/nav/folketrygdloven/kap14/%C2%A714-13';

export const getGosysUrl = (fødselsnummer: string) => {
  const { host } = window.location;
  const envPrefix = host.includes('dev') ? '-q2.dev' : '';
  return `https://gosys${envPrefix}.intern.nav.no/gosys/bruker/brukeroversikt.jsf?fodselsnummer=${fødselsnummer}`;
};

export const getModiaUrl = (fødselsnummer: string) =>
  `https://app.adeo.no/modiapersonoversikt/person/${fødselsnummer}/meldinger/`;

export const hentDokumentLenke = (saksnummer: string, journalpostId: string, dokumentId: string): string =>
  `/fpsak/api/dokument/hent-dokument?saksnummer=${saksnummer}&journalpostId=${journalpostId}&dokumentId=${dokumentId}`;

export const hentVedtakDokumentLenke = (behandlingUuid: string): string =>
  `/fpsak/api/vedtak/hent-vedtaksdokument?behandlingId=${behandlingUuid}`;
