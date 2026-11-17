import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import { losEndepunkt, losGet, losPost, LosUrlFelles } from '@navikt/fp-los-felles';
import type {
  FagsakEnkel,
  GetReserverteOppgaverData,
  GetReserverteOppgaverResponse,
  HentAktuelleSaksbehandlereData,
  HentAktuelleSaksbehandlereResponse,
  HentAntallOppgaverForSaksliste1Data,
  HentAntallOppgaverForSaksliste1Response,
  HentOppgaverData,
  HentOppgaverForFagsakerData,
  HentOppgaverForFagsakerResponse,
  HentReservasjonData,
  HentReservasjonResponse,
  HentSakslisterData,
  HentSakslisterResponse,
  KøStatistikkForSakslisteData,
  KøStatistikkForSakslisteResponse,
  OpphevReservasjonTilknyttetOppgaveData,
  OpphevReservasjonTilknyttetOppgaveResponse,
  ReserverOppgaveData,
  ReserverOppgaveResponse,
  SisteReserverteData,
  SisteReserverteResponse,
} from '@navikt/fp-types';

export { losKodeverkOptions, flyttReservasjon } from '@navikt/fp-los-felles';

const kyExtended = ky.extend({
  retry: 0,
  timeout: 15_000,
  hooks: {
    beforeRequest: [
      ({ request }) => {
        const navCallId = `CallId_${Date.now()}_${Math.floor(Math.random() * 1_000_000_000)}`;
        request.headers.set('Nav-Callid', navCallId);
      },
    ],
  },
});

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
const wrapUrl = (url: string) => (isTest ? `https://www.test.com${url}` : url);

export const LosUrl = {
  ...LosUrlFelles,
  SØK_FAGSAK: wrapUrl('/fpsak/api/fagsak/sok'),
  SAKSBEHANDLER_KØ_STATISTIKK: losEndepunkt<KøStatistikkForSakslisteData, KøStatistikkForSakslisteResponse>(
    '/api/saksbehandler/nøkkeltall/statistikk-oppgave-filter',
  ),
  SAKSLISTE: losEndepunkt<HentSakslisterData, HentSakslisterResponse>('/api/saksbehandler/saksliste'),
  RESERVERTE_OPPGAVER: losEndepunkt<GetReserverteOppgaverData, GetReserverteOppgaverResponse>(
    '/api/reservasjon/reserverte-oppgaver',
  ),
  TIDLIGERE_RESERVERTE: losEndepunkt<SisteReserverteData, SisteReserverteResponse>(
    '/api/reservasjon/tidligere-reserverte',
  ),
  RESERVER_OPPGAVE: losEndepunkt<ReserverOppgaveData, ReserverOppgaveResponse>('/api/reservasjon/reserver'),
  OPPGAVER_FOR_FAGSAKER: losEndepunkt<HentOppgaverForFagsakerData, HentOppgaverForFagsakerResponse>(
    '/api/saksbehandler/oppgaver/oppgaver-for-fagsaker',
  ),
  HENT_RESERVASJONSSTATUS: losEndepunkt<HentReservasjonData, HentReservasjonResponse>(
    '/api/reservasjon/reservasjon-status',
  ),
  OPPHEV_OPPGAVERESERVASJON: losEndepunkt<
    OpphevReservasjonTilknyttetOppgaveData,
    OpphevReservasjonTilknyttetOppgaveResponse
  >('/api/reservasjon/opphev-reservasjon'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: losEndepunkt<
    HentAntallOppgaverForSaksliste1Data,
    HentAntallOppgaverForSaksliste1Response
  >('/api/saksbehandler/oppgaver/antall'),
  OPPGAVER_TIL_BEHANDLING: losEndepunkt<HentOppgaverData>('/api/saksbehandler/oppgaver'),
  HENT_AKTUELLE_SAKSBEHANDLERE: losEndepunkt<HentAktuelleSaksbehandlereData, HentAktuelleSaksbehandlereResponse>(
    '/api/reservasjon/hent-aktuelle-saksbehandlere',
  ),
};

export const getBehandlingskøOppgaveAntall = (sakslisteId: number) =>
  losGet(LosUrl.BEHANDLINGSKO_OPPGAVE_ANTALL, { sakslisteId }).json();

export const getReservasjonsstatus = (oppgaveId: number) =>
  losGet(LosUrl.HENT_RESERVASJONSSTATUS, { oppgaveId }).json();

export const getOppgaverTilBehandling = (sakslisteId: number, oppgaveIder?: string) =>
  losGet(LosUrl.OPPGAVER_TIL_BEHANDLING, oppgaveIder ? { sakslisteId, oppgaveIder } : { sakslisteId });

export const doGetRequest = <T>(url: string) => kyExtended.get(url).json<T>();

export const getOppgaverForFagsaker = (saksnummer: string[]) =>
  losGet(LosUrl.OPPGAVER_FOR_FAGSAKER, { saksnummerListe: saksnummer.join(',') }).json();

export const oppgaverForFagsakerOptions = (saksnummer: string[]) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVER_FOR_FAGSAKER, saksnummer],
    queryFn: () => getOppgaverForFagsaker(saksnummer),
    staleTime: Infinity,
  });

export const saksbehandlerKøStatistikkOptions = (sakslisteId: number) =>
  queryOptions({
    queryKey: [LosUrl.SAKSBEHANDLER_KØ_STATISTIKK, sakslisteId],
    queryFn: () => losGet(LosUrl.SAKSBEHANDLER_KØ_STATISTIKK, { sakslisteId }).json(),
  });

export const sakslisteOptions = () =>
  queryOptions({
    queryKey: [LosUrl.SAKSLISTE],
    queryFn: () => losGet(LosUrl.SAKSLISTE).json(),
  });

export const reserverteOppgaverOptions = () =>
  queryOptions({
    queryKey: [LosUrl.RESERVERTE_OPPGAVER],
    queryFn: () => losGet(LosUrl.RESERVERTE_OPPGAVER).json(),
  });

export const behandlendeOppgaverOptions = (kunAktive: boolean) =>
  queryOptions({
    queryKey: [LosUrl.TIDLIGERE_RESERVERTE, kunAktive],
    queryFn: () => losGet(LosUrl.TIDLIGERE_RESERVERTE, { kunAktive }).json(),
  });

export const hentAktuelleSaksbehandlere = (oppgaveId: number, skalKjøres: boolean) =>
  queryOptions({
    queryKey: [LosUrl.HENT_AKTUELLE_SAKSBEHANDLERE, oppgaveId],
    queryFn: () => losGet(LosUrl.HENT_AKTUELLE_SAKSBEHANDLERE, { oppgaveId }).json(),
    staleTime: Infinity,
    enabled: skalKjøres,
  });

export const søkFagsakPost = (searchString: string, skalReservere: boolean) =>
  kyExtended.post(LosUrl.SØK_FAGSAK, { json: { searchString, skalReservere } }).json<FagsakEnkel[]>();

export const opphevReservasjon = (oppgaveId: number) => losPost(LosUrl.OPPHEV_OPPGAVERESERVASJON, { oppgaveId });

export const reserverOppgavePost = (oppgaveId: number) => losPost(LosUrl.RESERVER_OPPGAVE, { oppgaveId }).json();
