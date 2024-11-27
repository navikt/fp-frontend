import { Oppgave, OppgaveStatus, SaksbehandlerProfil } from '@navikt/fp-los-felles';
import { createRequestApi, RestApiConfigBuilder, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { AlleKodeverk,FagsakEnkel } from '@navikt/fp-types';

import { Driftsmelding } from '../typer/driftsmeldingTsType';
import { NyeOgFerdigstilteOppgaver } from '../typer/nyeOgFerdigstilteOppgaverTsType';
import { Saksbehandler } from '../typer/saksbehandlerTsType';
import { Saksliste } from '../typer/sakslisteTsType';

export const RestApiGlobalStatePathsKeys = {
  KODEVERK_LOS: new RestKey<AlleKodeverk, void>('KODEVERK_LOS'),
};

export const RestApiPathsKeys = {
  DRIFTSMELDINGER: new RestKey<Driftsmelding[], void>('DRIFTSMELDINGER'),
  SEARCH_FAGSAK: new RestKey<FagsakEnkel[], { searchString: string; skalReservere: boolean }>('SEARCH_FAGSAK'),
  OPPGAVER_FOR_FAGSAKER: new RestKey<Oppgave[], { saksnummerListe: string }>('OPPGAVER_FOR_FAGSAKER'),
  SAKSLISTE: new RestKey<Saksliste[], void>('SAKSLISTE'),
  RESERVERTE_OPPGAVER: new RestKey<Oppgave[], void>('RESERVERTE_OPPGAVER'),
  OPPGAVER_TIL_BEHANDLING: new RestKey<Oppgave[], { sakslisteId: number; oppgaveIder?: string }>(
    'OPPGAVER_TIL_BEHANDLING',
  ),
  OPPHEV_OPPGAVERESERVASJON: new RestKey<void, { oppgaveId: number; begrunnelse: string }>('OPPHEV_OPPGAVERESERVASJON'),
  FORLENG_OPPGAVERESERVASJON: new RestKey<Oppgave[], { oppgaveId: number }>('FORLENG_OPPGAVERESERVASJON'),
  ENDRE_OPPGAVERESERVASJON: new RestKey<Oppgave[], { oppgaveId: number; reserverTil: string }>(
    'ENDRE_OPPGAVERESERVASJON',
  ),
  FLYTT_RESERVASJON: new RestKey<void, { oppgaveId: number; brukerIdent: string; begrunnelse: string }>(
    'FLYTT_RESERVASJON',
  ),
  RESERVER_OPPGAVE: new RestKey<OppgaveStatus, { oppgaveId: number }>('RESERVER_OPPGAVE'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: new RestKey<SaksbehandlerProfil, { brukerIdent: string }>(
    'FLYTT_RESERVASJON_SAKSBEHANDLER_SOK',
  ),
  HENT_RESERVASJONSSTATUS: new RestKey<OppgaveStatus, { oppgaveId: number }>('HENT_RESERVASJONSSTATUS'),
  HENT_NYE_OG_FERDIGSTILTE_OPPGAVER: new RestKey<NyeOgFerdigstilteOppgaver[], { sakslisteId: number }>(
    'HENT_NYE_OG_FERDIGSTILTE_OPPGAVER',
  ),
  SAKSLISTE_SAKSBEHANDLERE: new RestKey<Saksbehandler[], { sakslisteId: number }>('SAKSLISTE_SAKSBEHANDLERE'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: new RestKey<number, { sakslisteId: number }>('BEHANDLINGSKO_OPPGAVE_ANTALL'),
  BEHANDLEDE_OPPGAVER: new RestKey<Oppgave[], void>('BEHANDLEDE_OPPGAVER'),
  OPPGAVE_AVDELING_ANTALL: new RestKey<number, { avdelingEnhet: string }>('OPPGAVE_AVDELING_ANTALL'),
  OPPGAVE_ANTALL: new RestKey<number, { sakslisteId: number; avdelingEnhet: string }>('OPPGAVE_ANTALL'),
};

export const endpoints = new RestApiConfigBuilder()
  .withGet('/fplos/api/kodeverk', RestApiGlobalStatePathsKeys.KODEVERK_LOS)

  // Saksbehandler
  .withPost('/fpsak/api/fagsak/sok', RestApiPathsKeys.SEARCH_FAGSAK)
  .withGet('/fplos/api/driftsmeldinger', RestApiPathsKeys.DRIFTSMELDINGER)
  .withGet('/fplos/api/saksbehandler/saksliste', RestApiPathsKeys.SAKSLISTE)
  .withGet('/fplos/api/reservasjon/reserverte-oppgaver', RestApiPathsKeys.RESERVERTE_OPPGAVER)
  .withAsyncGet('/fplos/api/saksbehandler/oppgaver', RestApiPathsKeys.OPPGAVER_TIL_BEHANDLING, {
    maxPollingLimit: 1800,
  })
  .withPost('/fplos/api/reservasjon/opphev-reservasjon', RestApiPathsKeys.OPPHEV_OPPGAVERESERVASJON)
  .withPost('/fplos/api/reservasjon/forleng', RestApiPathsKeys.FORLENG_OPPGAVERESERVASJON)
  .withPost('/fplos/api/reservasjon/endre-varighet', RestApiPathsKeys.ENDRE_OPPGAVERESERVASJON)
  .withPost('/fplos/api/reservasjon/flytt-reservasjon', RestApiPathsKeys.FLYTT_RESERVASJON)
  .withPost('/fplos/api/reservasjon/reserver', RestApiPathsKeys.RESERVER_OPPGAVE)
  .withPost('/fplos/api/reservasjon/flytt-reservasjon/søk', RestApiPathsKeys.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK)
  .withGet('/fplos/api/saksbehandler/oppgaver/oppgaver-for-fagsaker', RestApiPathsKeys.OPPGAVER_FOR_FAGSAKER)
  .withGet('/fplos/api/reservasjon/reservasjon-status', RestApiPathsKeys.HENT_RESERVASJONSSTATUS)
  .withGet(
    '/fplos/api/saksbehandler/nøkkeltall/nye-og-ferdigstilte-oppgaver',
    RestApiPathsKeys.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER,
  )
  .withGet('/fplos/api/saksbehandler/saksliste/saksbehandlere', RestApiPathsKeys.SAKSLISTE_SAKSBEHANDLERE)
  .withGet('/fplos/api/saksbehandler/oppgaver/antall', RestApiPathsKeys.BEHANDLINGSKO_OPPGAVE_ANTALL)
  .withGet('/fplos/api/reservasjon/tidligere-reserverte', RestApiPathsKeys.BEHANDLEDE_OPPGAVER)

  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
