import { AlleKodeverk } from '@navikt/ft-types';
import {
  RestApiConfigBuilder, createRequestApi, RestKey,
} from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { FagsakEnkel } from '@fpsak-frontend/types';

import SaksbehandlerForFlytting from '../typer/saksbehandlerForFlyttingTsType';
import OppgaveStatus from '../typer/oppgaveStatusTsType';
import NyeOgFerdigstilteOppgaver from '../typer/nyeOgFerdigstilteOppgaverTsType';
import Oppgave from '../typer/oppgaveTsType';
import Saksbehandler from '../typer/saksbehandlerTsType';
import Saksliste from '../typer/sakslisteTsType';
import Driftsmelding from '../typer/driftsmeldingTsType';

export const RestApiGlobalStatePathsKeys = {
  KODEVERK_LOS: new RestKey<AlleKodeverk, void>('KODEVERK_LOS'),
};

export const RestApiPathsKeys = {
  DRIFTSMELDINGER: new RestKey<Driftsmelding[], void>('DRIFTSMELDINGER'),
  SEARCH_FAGSAK: new RestKey<FagsakEnkel[], {searchString: string; skalReservere: boolean}>('SEARCH_FAGSAK'),
  OPPGAVER_FOR_FAGSAKER: new RestKey<Oppgave[], { saksnummerListe: string }>('OPPGAVER_FOR_FAGSAKER'),
  SAKSLISTE: new RestKey<Saksliste[], void>('SAKSLISTE'),
  RESERVERTE_OPPGAVER: new RestKey<Oppgave[], void>('RESERVERTE_OPPGAVER'),
  OPPGAVER_TIL_BEHANDLING: new RestKey<Oppgave[], { sakslisteId: number, oppgaveIder?: string }>('OPPGAVER_TIL_BEHANDLING'),
  OPPHEV_OPPGAVERESERVASJON: new RestKey<void, { oppgaveId: number, begrunnelse: string }>('OPPHEV_OPPGAVERESERVASJON'),
  FORLENG_OPPGAVERESERVASJON: new RestKey<Oppgave[], { oppgaveId: number }>('FORLENG_OPPGAVERESERVASJON'),
  ENDRE_OPPGAVERESERVASJON: new RestKey<Oppgave[], { oppgaveId: number, reserverTil: string }>('ENDRE_OPPGAVERESERVASJON'),
  FLYTT_RESERVASJON: new RestKey<void, { oppgaveId: number, brukerIdent: string, begrunnelse: string }>('FLYTT_RESERVASJON'),
  RESERVER_OPPGAVE: new RestKey<OppgaveStatus, { oppgaveId: number }>('RESERVER_OPPGAVE'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: new RestKey<SaksbehandlerForFlytting, { brukerIdent: string }>('FLYTT_RESERVASJON_SAKSBEHANDLER_SOK'),
  HENT_RESERVASJONSSTATUS: new RestKey<OppgaveStatus, { oppgaveId: number }>('HENT_RESERVASJONSSTATUS'),
  HENT_NYE_OG_FERDIGSTILTE_OPPGAVER: new RestKey<NyeOgFerdigstilteOppgaver[], { sakslisteId: number }>('HENT_NYE_OG_FERDIGSTILTE_OPPGAVER'),
  SAKSLISTE_SAKSBEHANDLERE: new RestKey<Saksbehandler[], { sakslisteId: number }>('SAKSLISTE_SAKSBEHANDLERE'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: new RestKey<number, {sakslisteId: number}>('BEHANDLINGSKO_OPPGAVE_ANTALL'),
  BEHANDLEDE_OPPGAVER: new RestKey<Oppgave[], void>('BEHANDLEDE_OPPGAVER'),
  OPPGAVE_AVDELING_ANTALL: new RestKey<number, { avdelingEnhet: string }>('OPPGAVE_AVDELING_ANTALL'),
  OPPGAVE_ANTALL: new RestKey<number, { sakslisteId: number, avdelingEnhet: string }>('OPPGAVE_ANTALL'),
};

export const endpoints = new RestApiConfigBuilder()
  .withGet('/fplos/api/kodeverk', RestApiGlobalStatePathsKeys.KODEVERK_LOS)

  // Saksbehandler
  .withPost('/fpsak/api/fagsak/sok', RestApiPathsKeys.SEARCH_FAGSAK)
  .withGet('/fplos/api/driftsmeldinger', RestApiPathsKeys.DRIFTSMELDINGER)
  .withGet('/fplos/api/saksbehandler/saksliste', RestApiPathsKeys.SAKSLISTE)
  .withGet('/fplos/api/saksbehandler/oppgaver/reserverte', RestApiPathsKeys.RESERVERTE_OPPGAVER)
  .withAsyncGet('/fplos/api/saksbehandler/oppgaver', RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING, { maxPollingLimit: 1800 })
  .withPost('/fplos/api/saksbehandler/oppgaver/opphev', RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON)
  .withPost('/fplos/api/saksbehandler/oppgaver/forleng', RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON)
  .withPost('/fplos/api/saksbehandler/oppgaver/reservasjon/endre', RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON)
  .withPost('/fplos/api/saksbehandler/oppgaver/flytt', RestApiPathsKeys.FLYTT_RESERVASJON)
  .withPost('/fplos/api/saksbehandler/oppgaver/reserver', RestApiPathsKeys.RESERVER_OPPGAVE)
  .withPost('/fplos/api/saksbehandler/oppgaver/flytt/søk', RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK)
  .withGet('/fplos/api/saksbehandler/oppgaver/oppgaver-for-fagsaker', RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER)
  .withGet('/fplos/api/saksbehandler/oppgaver/reservasjon-status', RestApiPathsKeys.HENT_RESERVASJONSSTATUS)
  .withGet('/fplos/api/saksbehandler/nøkkeltall/nye-og-ferdigstilte-oppgaver', RestApiPathsKeys.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER)
  .withGet('/fplos/api/saksbehandler/saksliste/saksbehandlere', RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE)
  .withGet('/fplos/api/saksbehandler/oppgaver/antall', RestApiPathsKeys.BEHANDLINGSKO_OPPGAVE_ANTALL)
  .withGet('/fplos/api/saksbehandler/oppgaver/behandlede', RestApiPathsKeys.BEHANDLEDE_OPPGAVER)

  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
