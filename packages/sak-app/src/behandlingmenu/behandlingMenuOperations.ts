import { Location } from 'history';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../app/paths';
import behandlingEventHandler from '../behandling/BehandlingEventHandler';

export const shelveBehandling = (params: {
  behandlingVersjon: number;
  behandlingUuid: string;
  årsakKode: string;
  begrunnelse: string;
}) => behandlingEventHandler.henleggBehandling(params);

export const setBehandlingOnHold = (params: {
  behandlingVersjon: number;
  behandlingUuid: string;
  frist: string;
  ventearsak: string;
}) => behandlingEventHandler.settBehandlingPaVent(params);

export const resumeBehandling = (params: {
  behandlingUuid: string;
  behandlingVersjon: number;
}) => behandlingEventHandler.taBehandlingAvVent(params);

export const nyBehandlendeEnhet = (params: {
  behandlingVersjon: number;
  behandlingUuid: string;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
}) => behandlingEventHandler.endreBehandlendeEnhet(params);

export const openBehandlingForChanges = (params: {
  behandlingUuid: string;
  behandlingVersjon: number;
}) => behandlingEventHandler.opneBehandlingForEndringer(params);

const setLocation = (
  location: Location,
  push: (location: Location) => void,
  saksnummer: string,
  behandlingUuid: string,
) => push(getLocationWithDefaultProsessStegAndFakta({
  ...location,
  pathname: pathToBehandling(saksnummer, behandlingUuid),
}));

export const opprettVerge = (
  location: Location,
  push: (location: Location) => void,
  saksnummer: string,
  behandlingUuid: string,
  versjon: number,
) => () => behandlingEventHandler.opprettVerge({
  behandlingUuid,
  behandlingVersjon: versjon,
}).then(() => setLocation(location, push, saksnummer, behandlingUuid));

export const fjernVerge = (
  location: Location,
  push: (location: Location) => void,
  saksnummer: string,
  behandlingUuid: string,
  versjon: number,
) => () => behandlingEventHandler.fjernVerge({
  behandlingUuid,
  behandlingVersjon: versjon,
}).then(() => setLocation(location, push, saksnummer, behandlingUuid));
