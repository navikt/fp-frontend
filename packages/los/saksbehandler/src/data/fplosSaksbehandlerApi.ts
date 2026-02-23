import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import type {
  AlleKodeverkLos,
  FagsakEnkel,
  OppgaveDto,
  OppgaveDtoMedStatus,
  ReservasjonStatusDto,
  SaksbehandlerDto,
  SakslisteDto,
} from '@navikt/fp-types';

const kyExtended = ky.extend({
  retry: 0,
  timeout: 15000,
  hooks: {
    beforeRequest: [
      request => {
        const navCallId = `CallId_${Date.now()}_${Math.floor(Math.random() * 1000000000)}`;
        request.headers.set('Nav-Callid', navCallId);
      },
    ],
  },
});

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
const wrapUrl = (url: string) => (isTest ? `https://www.test.com${url}` : url);

export const LosUrl = {
  KODEVERK_LOS: wrapUrl('/fplos/api/kodeverk'),
  SØK_FAGSAK: wrapUrl('/fpsak/api/fagsak/sok'),
  SAKSLISTE: wrapUrl('/fplos/api/saksbehandler/saksliste'),
  RESERVERTE_OPPGAVER: wrapUrl('/fplos/api/reservasjon/reserverte-oppgaver'),
  TIDLIGERE_RESERVERTE: wrapUrl('/fplos/api/reservasjon/tidligere-reserverte'),
  RESERVER_OPPGAVE: wrapUrl('/fplos/api/reservasjon/reserver'),
  OPPGAVER_FOR_FAGSAKER: wrapUrl('/fplos/api/saksbehandler/oppgaver/oppgaver-for-fagsaker'),
  HENT_RESERVASJONSSTATUS: wrapUrl('/fplos/api/reservasjon/reservasjon-status'),
  OPPHEV_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/opphev-reservasjon'),
  ENDRE_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/endre-varighet'),
  FLYTT_RESERVASJON: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon'),
  FORLENG_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/forleng'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon/søk'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: wrapUrl('/fplos/api/saksbehandler/oppgaver/antall'),
  OPPGAVER_TIL_BEHANDLING: wrapUrl('/fplos/api/saksbehandler/oppgaver'),
};

export const getBehandlingskøOppgaveAntall = (sakslisteId: number) =>
  kyExtended.get(LosUrl.BEHANDLINGSKO_OPPGAVE_ANTALL, { searchParams: { sakslisteId } }).json<number>();

export const getReservasjonsstatus = (oppgaveId: number) =>
  kyExtended.get(LosUrl.HENT_RESERVASJONSSTATUS, { searchParams: { oppgaveId } }).json<ReservasjonStatusDto>();

export const getOppgaverTilBehandling = (sakslisteId: number, oppgaveIder?: string) =>
  kyExtended.get<OppgaveDto[]>(LosUrl.OPPGAVER_TIL_BEHANDLING, {
    searchParams: oppgaveIder
      ? {
          sakslisteId,
          oppgaveIder,
        }
      : { sakslisteId },
  });

export const doGetRequest = <T>(url: string) => kyExtended.get(url).json<T>();

export const getOppgaverForFagsaker = (saksnummer: string[]) =>
  kyExtended
    .get(LosUrl.OPPGAVER_FOR_FAGSAKER, {
      searchParams: { saksnummerListe: saksnummer.join(',') },
    })
    .json<OppgaveDto[]>();

export const oppgaverForFagsakerOptions = (saksnummer: string[]) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVER_FOR_FAGSAKER, saksnummer],
    queryFn: () => getOppgaverForFagsaker(saksnummer),
    staleTime: Infinity,
  });

export const losKodeverkOptions = () =>
  queryOptions({
    queryKey: [LosUrl.KODEVERK_LOS],
    queryFn: () => kyExtended.get(LosUrl.KODEVERK_LOS).json<AlleKodeverkLos>(),
    staleTime: Infinity,
  });

export const sakslisteOptions = () =>
  queryOptions({
    queryKey: [LosUrl.SAKSLISTE],
    queryFn: () => kyExtended.get(LosUrl.SAKSLISTE).json<SakslisteDto[]>(),
  });

export const reserverteOppgaverOptions = () =>
  queryOptions({
    queryKey: [LosUrl.RESERVERTE_OPPGAVER],
    queryFn: () => kyExtended.get(LosUrl.RESERVERTE_OPPGAVER).json<OppgaveDto[]>(),
  });

export const behandlendeOppgaverOptions = (kunAktive: boolean) =>
  queryOptions({
    queryKey: [LosUrl.TIDLIGERE_RESERVERTE, kunAktive],
    queryFn: () =>
      kyExtended
        .get(LosUrl.TIDLIGERE_RESERVERTE, { searchParams: { kunAktive: kunAktive } })
        .json<OppgaveDtoMedStatus[]>(),
  });

export const søkFagsakPost = (searchString: string, skalReservere: boolean) =>
  kyExtended.post(LosUrl.SØK_FAGSAK, { json: { searchString, skalReservere } }).json<FagsakEnkel[]>();

export const opphevReservasjon = (oppgaveId: number) =>
  kyExtended.post(LosUrl.OPPHEV_OPPGAVERESERVASJON, { json: { oppgaveId } });

export const forlengReservasjonPost = (oppgaveId: number) =>
  kyExtended.post(LosUrl.FORLENG_OPPGAVERESERVASJON, { json: { oppgaveId } }).json<ReservasjonStatusDto>();

export const endreReservasjonPost = (oppgaveId: number, reserverTil: string) =>
  kyExtended.post(LosUrl.ENDRE_OPPGAVERESERVASJON, { json: { oppgaveId, reserverTil } }).json<ReservasjonStatusDto>();

export const flyttReservasjonPost = (oppgaveId: number, brukerIdent: string, begrunnelse: string) =>
  kyExtended
    .post(LosUrl.FLYTT_RESERVASJON, { json: { oppgaveId, brukerIdent, begrunnelse } })
    .json<ReservasjonStatusDto>();

export const reserverOppgavePost = (oppgaveId: number) =>
  kyExtended.post(LosUrl.RESERVER_OPPGAVE, { json: { oppgaveId } }).json<ReservasjonStatusDto>();

export const flyttReservasjonSaksbehandlerSøkPost = (brukerIdent: string) =>
  kyExtended.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, { json: { brukerIdent } }).json<SaksbehandlerDto>();
