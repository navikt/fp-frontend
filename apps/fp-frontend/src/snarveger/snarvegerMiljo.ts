const PROD_HOSTNAME_DEL = 'intern.nav.no';

/**
 * Tastatursnarvegane er berre tilgjengelege i ikkje-prod-miljø.
 *
 * Prod er https://fpsak.intern.nav.no. Dev (t.d. fpsak.intern.dev.nav.no) og localhost
 * inneheld ikkje delstrengen 'intern.nav.no', og får difor snarvegane.
 */
export const snarvegerErTilgjengelig = (hostname = globalThis.location.hostname): boolean =>
  !hostname.includes(PROD_HOSTNAME_DEL);
