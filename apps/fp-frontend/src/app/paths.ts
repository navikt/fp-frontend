import type { Location } from 'history';

import { getLocationWithQueryParams } from '@navikt/fp-app-felles';
import { skjermlenkeCodes } from '@navikt/fp-konstanter';
import type { SkjermlenkeType, SkjermlenkeTypeFpTilbake } from '@navikt/fp-types';

export const UTBETALINGSDATA_PATH = 'utbetalingsdata';

const DEFAULT_FAKTA = 'default';
const DEFAULT_PROSESS_STEG = 'default';

export const utbetalingsdataIs15RoutePath = `/${UTBETALINGSDATA_PATH}`;
export const fagsakRoutePath = '/fagsak/:saksnummer//*';
export const aktoerRoutePath = '/aktoer/:aktoerId';
export const behandlingerRoutePath = '/behandling//*';
export const behandlingRoutePath = '/:behandlingUuid/';

export const pathToFagsak = (saksnummer: string): string => `/fagsak/${saksnummer}/`;
export const pathToBehandlinger = (saksnummer: string): string => `/fagsak/${saksnummer}/behandling/`;
export const pathToBehandling = (saksnummer: string, behandlingUuid?: string): string => {
  const base = `/fagsak/${saksnummer}/behandling/`;
  return behandlingUuid ? `${base}${behandlingUuid}/` : base;
};
export const pathToMissingPage = (): string => '/404';

export const pathToAnnenPart = (saksnummer: string, behandlingUuid: string): string =>
  `/fagsak/${saksnummer}/behandling/${behandlingUuid}/?punkt=${DEFAULT_PROSESS_STEG}&fakta=${DEFAULT_FAKTA}`;

export const getFagsakHref = (saksnummer: string, behandlingUuid?: string) =>
  behandlingUuid
    ? `/fagsak/${saksnummer}/behandling/${behandlingUuid}/?punkt=default&fakta=default`
    : `/fagsak/${saksnummer}/`;

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
