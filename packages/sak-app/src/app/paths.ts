import { Location, Search } from 'history';

import { buildPath, formatQueryString, parseQueryString } from '@fpsak-frontend/utils';
import { skjermlenkeCodes } from '@fpsak-frontend/konstanter';

const FPSAK = 'fpsak';
const FPLOS = 'fplos';

const DEFAULT_FAKTA = 'default';
const DEFAULT_PROSESS_STEG = 'default';

type QueryParams = {
  punkt?: string;
  fakta?: string;
  stotte?: string;
  risiko?: boolean;
}

const DEV_LOGIN_URL = 'http://localhost:8080/fpsak/jetty/login';

export const fagsakPath = '/fagsak/:saksnummer(\\d+)/';
export const aktoerPath = '/aktoer/:aktoerId(\\d+)';
export const behandlingerPath = `${fagsakPath}behandling/`;
export const behandlingPath = `${behandlingerPath}:behandlingUuid(\\d+)/`;

export const pathToFagsak = (saksnummer: string): string => buildPath(fagsakPath, { saksnummer });
export const pathToBehandlinger = (saksnummer: string): string => buildPath(behandlingerPath, { saksnummer });
export const pathToBehandling = (saksnummer: string, behandlingUuid: string): string => buildPath(behandlingPath, { saksnummer, behandlingUuid });
export const pathToMissingPage = (): string => '/404';

export const pathToAnnenPart = (saksnummer: string, behandlingUuid: string)
  : string => `/${FPSAK}/fagsak/${saksnummer}/behandling/${behandlingUuid}/?punkt=${DEFAULT_PROSESS_STEG}&fakta=${DEFAULT_FAKTA}`;

const emptyQueryString = (queryString: string): boolean => queryString === '?' || !queryString;

const updateQueryParams = (queryString: string, nextParams: QueryParams): Search => {
  const prevParams = emptyQueryString(queryString) ? {} : parseQueryString(queryString);
  return formatQueryString({
    ...prevParams,
    ...nextParams,
  });
};

export const getLocationWithQueryParams = (location: Location, queryParams: QueryParams): Location => ({
  ...location,
  search: updateQueryParams(location.search, queryParams),
});

export const getSupportPanelLocationCreator = (location: Location) => (
  supportPanel: string,
): Location => getLocationWithQueryParams(location, { stotte: supportPanel });
export const getProsessStegLocation = (location: Location) => (prosessSteg?: string): Location => getLocationWithQueryParams(location, { punkt: prosessSteg });
export const getFaktaLocation = (location: Location) => (fakta?: string): Location => getLocationWithQueryParams(location, { fakta });
export const getRiskPanelLocationCreator = (location: Location) => (
  isRiskPanelOpen: boolean,
): Location => getLocationWithQueryParams(location, { risiko: isRiskPanelOpen });

export const getLocationWithDefaultProsessStegAndFakta = (location: Location): Location => (
  getLocationWithQueryParams(location, { punkt: DEFAULT_PROSESS_STEG, fakta: DEFAULT_FAKTA })
);

export const getPathToFplos = (href: string): string => {
  const hostAndContextPath = href.substr(0, href.lastIndexOf(FPSAK) + FPSAK.length);
  return hostAndContextPath.replace(new RegExp(FPSAK, 'g'), FPLOS);
};

export const createLocationForSkjermlenke = (behandlingLocation: Location, skjermlenkeCode: string): Location | undefined => {
  const skjermlenke = skjermlenkeCodes[skjermlenkeCode];
  if (!skjermlenke) {
    return undefined;
  }
  return getLocationWithQueryParams(behandlingLocation, { punkt: skjermlenke.punktNavn, fakta: skjermlenke.faktaNavn });
};

// Kan gå inn på url som ser sånn ut "http://localhost:9000/fpsak/fagsak/", men
// da vil ein automatisk redirecte til http://localhost:9000/fpsak/fagsak/behandling/*"
export const erUrlUnderBehandling = (location: Location): boolean => !location.pathname.includes('behandling/');

export const erBehandlingValgt = (location: Location): boolean => location.pathname.includes('behandling') && !location.pathname.endsWith('behandling/');

export const redirectToLogin = () => {
  if (process.env.NODE_ENV === 'development') {
    window.location.assign(DEV_LOGIN_URL);
  }
  return undefined;
};
