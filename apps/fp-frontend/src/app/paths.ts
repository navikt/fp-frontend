import { buildPath, formatQueryString, parseQueryString } from '@navikt/ft-utils';
import type { Location, Search } from 'history';

import { skjermlenkeCodes } from '@navikt/fp-konstanter';
import type { SkjermlenkeType, SkjermlenkeTypeFpTilbake } from '@navikt/fp-types';

export const JOURNALFØRING_PATH = 'journalforing';
export const UTBETALINGSDATA_PATH = 'utbetalingsdata';

const DEFAULT_FAKTA = 'default';
const DEFAULT_PROSESS_STEG = 'default';

type QueryParams = {
  punkt?: string;
  fakta?: string;
  stotte?: string;
  risiko?: boolean;
};

export const utbetalingsdataIs15RoutePath = `/${UTBETALINGSDATA_PATH}`;
export const fagsakRoutePath = '/fagsak/:saksnummer//*';
export const aktoerRoutePath = '/aktoer/:aktoerId';
export const behandlingerRoutePath = '/behandling//*';
export const behandlingRoutePath = '/:behandlingUuid/';
const fagsakPath = '/fagsak/:saksnummer/';
const behandlingerPath = `${fagsakPath}behandling/`;
const behandlingPath = `${behandlingerPath}:behandlingUuid(.*)/`;

export const pathToFagsak = (saksnummer: string): string => buildPath(fagsakPath, { saksnummer });
export const pathToBehandlinger = (saksnummer: string): string => buildPath(behandlingerPath, { saksnummer });
export const pathToBehandling = (saksnummer: string, behandlingUuid?: string): string =>
  buildPath(behandlingPath, { saksnummer, behandlingUuid });
export const pathToMissingPage = (): string => '/404';

export const pathToAnnenPart = (saksnummer: string, behandlingUuid: string): string =>
  `/fagsak/${saksnummer}/behandling/${behandlingUuid}/?punkt=${DEFAULT_PROSESS_STEG}&fakta=${DEFAULT_FAKTA}`;

const emptyQueryString = (queryString: string): boolean => queryString === '?' || !queryString;

const updateQueryParams = (queryString: string, nextParams: QueryParams): Search => {
  const prevParams = emptyQueryString(queryString) ? {} : parseQueryString(queryString);
  return formatQueryString({
    ...prevParams,
    ...nextParams,
  });
};

export const getFagsakHref = (saksnummer: string, behandlingUuid?: string) =>
  behandlingUuid
    ? `/fagsak/${saksnummer}/behandling/${behandlingUuid}/?punkt=default&fakta=default`
    : `/fagsak/${saksnummer}/`;

const getLocationWithQueryParams = (location: Location, queryParams: QueryParams): Location => ({
  ...location,
  search: updateQueryParams(location.search, queryParams),
});

export const getSupportPanelLocationCreator =
  (location: Location) =>
  (supportPanel: string): Location =>
    getLocationWithQueryParams(location, { stotte: supportPanel });
export const getProsessStegLocation =
  (location: Location) =>
  (prosessSteg?: string): Location =>
    getLocationWithQueryParams(location, { punkt: prosessSteg });
export const getFaktaLocation =
  (location: Location) =>
  (fakta?: string): Location =>
    getLocationWithQueryParams(location, { fakta });
export const getRiskPanelLocationCreator =
  (location: Location) =>
  (isRiskPanelOpen: boolean): Location =>
    getLocationWithQueryParams(location, { risiko: isRiskPanelOpen });

export const getLocationWithDefaultProsessStegAndFakta = (location: Location): Location =>
  getLocationWithQueryParams(location, { punkt: DEFAULT_PROSESS_STEG, fakta: DEFAULT_FAKTA });

export const createLocationForSkjermlenke = (
  behandlingLocation: Location,
  skjermlenkeCode: SkjermlenkeType | SkjermlenkeTypeFpTilbake,
): Location | undefined => {
  const skjermlenke = skjermlenkeCodes[skjermlenkeCode];
  return getLocationWithQueryParams(behandlingLocation, { punkt: skjermlenke.punktNavn, fakta: skjermlenke.faktaNavn });
};

// Kan gå inn på url som ser sånn ut "http://localhost:9000/fagsak/", men
// da vil ein automatisk redirecte til http://localhost:9000/fagsak/behandling/*"
export const erUrlUnderBehandling = (location: Location): boolean => !location.pathname.includes('behandling/');

export const erBehandlingValgt = (location: Location): boolean =>
  location.pathname.includes('behandling') && !location.pathname.endsWith('behandling/');
