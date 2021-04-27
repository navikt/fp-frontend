import { Location } from 'history';

import { getLocationWithDefaultProsessStegAndFakta, pathToBehandling } from '../app/paths';
import behandlingEventHandler from '../behandling/BehandlingEventHandler';

export const shelveBehandling = (params: {
  behandlingVersjon: number;
  behandlingId: number;
  årsakKode: string;
  begrunnelse: string;
}) => behandlingEventHandler.henleggBehandling(params);

export const setBehandlingOnHold = (params: {
  behandlingVersjon: number;
  behandlingId: number;
  frist: string;
  ventearsak: string;
}) => behandlingEventHandler.settBehandlingPaVent(params);

export const resumeBehandling = (params: {
  behandlingId: number;
  behandlingVersjon: number;
}) => behandlingEventHandler.taBehandlingAvVent(params);

export const nyBehandlendeEnhet = (params: {
  behandlingVersjon: number;
  behandlingId: number;
  enhetNavn: string;
  enhetId: string;
  begrunnelse: string;
}) => behandlingEventHandler.endreBehandlendeEnhet(params);

export const openBehandlingForChanges = (params: {
  behandlingId: number;
  behandlingVersjon: number;
}) => behandlingEventHandler.opneBehandlingForEndringer(params);

const setLocation = (
  location: Location,
  push: (location: Location) => void,
  saksnummer: string,
  behandlingId: number,
) => push(getLocationWithDefaultProsessStegAndFakta({
  ...location,
  pathname: pathToBehandling(saksnummer, behandlingId),
}));

export const opprettVerge = (
  location: Location,
  push: (location: Location) => void,
  saksnummer: string,
  behandlingId: number,
  versjon: number,
) => () => behandlingEventHandler.opprettVerge({
  behandlingId,
  behandlingVersjon: versjon,
}).then(() => setLocation(location, push, saksnummer, behandlingId));

export const fjernVerge = (
  location: Location,
  push: (location: Location) => void,
  saksnummer: string,
  behandlingId: number,
  versjon: number,
) => () => behandlingEventHandler.fjernVerge({
  behandlingId,
  behandlingVersjon: versjon,
}).then(() => setLocation(location, push, saksnummer, behandlingId));
