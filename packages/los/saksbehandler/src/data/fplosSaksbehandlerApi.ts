import { queryOptions } from '@tanstack/react-query';

import type {
  FagsakEnkel,
  OppgaveDto,
  OppgaveDtoMedStatus,
  ReservasjonStatusDto,
  SaksbehandlerDto,
  SakslisteDto,
} from '@navikt/fp-types';

import { kyExtended, LosUrl as LosUrlFelles, wrapUrl } from '@navikt/fp-los-felles';

export { losKodeverkOptions, endreReservasjon, flyttReservasjon } from '@navikt/fp-los-felles';

export const LosUrl = {
  ...LosUrlFelles,
  SØK_FAGSAK: wrapUrl('/fpsak/api/fagsak/sok'),
  SAKSLISTE: wrapUrl('/fplos/api/saksbehandler/saksliste'),
  RESERVERTE_OPPGAVER: wrapUrl('/fplos/api/reservasjon/reserverte-oppgaver'),
  TIDLIGERE_RESERVERTE: wrapUrl('/fplos/api/reservasjon/tidligere-reserverte'),
  RESERVER_OPPGAVE: wrapUrl('/fplos/api/reservasjon/reserver'),
  OPPGAVER_FOR_FAGSAKER: wrapUrl('/fplos/api/saksbehandler/oppgaver/oppgaver-for-fagsaker'),
  HENT_RESERVASJONSSTATUS: wrapUrl('/fplos/api/reservasjon/reservasjon-status'),
  OPPHEV_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/opphev-reservasjon'),
  FORLENG_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/forleng'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: wrapUrl('/fplos/api/saksbehandler/oppgaver/antall'),
  OPPGAVER_TIL_BEHANDLING: wrapUrl('/fplos/api/saksbehandler/oppgaver'),
  HENT_AKTUELLE_SAKSBEHANDLERE: wrapUrl('/fplos/api/reservasjon/hent-aktuelle-saksbehandlere'),
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

export const hentAktuelleSaksbehandlere = (oppgaveId: number, skalKjøres: boolean) =>
  queryOptions({
    queryKey: [LosUrl.HENT_AKTUELLE_SAKSBEHANDLERE, oppgaveId],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_AKTUELLE_SAKSBEHANDLERE, {
          searchParams: {
            oppgaveId: oppgaveId,
          },
        })
        .json<SaksbehandlerDto[]>(),
    staleTime: Infinity,
    enabled: skalKjøres,
  });

export const søkFagsakPost = (searchString: string, skalReservere: boolean) =>
  kyExtended.post(LosUrl.SØK_FAGSAK, { json: { searchString, skalReservere } }).json<FagsakEnkel[]>();

export const opphevReservasjon = (oppgaveId: number) =>
  kyExtended.post(LosUrl.OPPHEV_OPPGAVERESERVASJON, { json: { oppgaveId } });

export const reserverOppgavePost = (oppgaveId: number) =>
  kyExtended.post(LosUrl.RESERVER_OPPGAVE, { json: { oppgaveId } }).json<ReservasjonStatusDto>();
