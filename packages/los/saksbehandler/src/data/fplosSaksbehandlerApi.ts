import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import type { Oppgave, OppgaveStatus, SaksbehandlerProfil } from '@navikt/fp-los-felles';
import type { AlleKodeverkLos, FagsakEnkel } from '@navikt/fp-types';

import type { Driftsmelding } from '../typer/driftsmeldingTsType';
import type { NyeOgFerdigstilteOppgaver } from '../typer/nyeOgFerdigstilteOppgaverTsType';
import type { Saksbehandler } from '../typer/saksbehandlerTsType';
import type { Saksliste } from '../typer/sakslisteTsType';

const kyExtended = ky.extend({
  retry: 0,
  timeout: 15000,
  hooks: {
    beforeRequest: [
      request => {
        const navCallId = `CallId_${new Date().getTime()}_${Math.floor(Math.random() * 1000000000)}`;
        request.headers.set('Nav-Callid', navCallId);
      },
    ],
  },
});

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
const wrapUrl = (url: string) => (isTest ? `http://www.test.com${url}` : url);

export const LosUrl = {
  KODEVERK_LOS: wrapUrl('fplos/api/kodeverk'),
  DRIFTSMELDINGER: wrapUrl('fplos/api/driftsmeldinger'),
  SØK_FAGSAK: wrapUrl('fpsak/api/fagsak/sok'),
  SAKSLISTE: wrapUrl('fplos/api/saksbehandler/saksliste'),
  RESERVERTE_OPPGAVER: wrapUrl('fplos/api/reservasjon/reserverte-oppgaver'),
  BEHANDLEDE_OPPGAVER: wrapUrl('fplos/api/reservasjon/tidligere-reserverte'),
  RESERVER_OPPGAVE: wrapUrl('fplos/api/reservasjon/reserver'),
  OPPGAVER_FOR_FAGSAKER: wrapUrl('fplos/api/saksbehandler/oppgaver/oppgaver-for-fagsaker'),
  HENT_RESERVASJONSSTATUS: wrapUrl('fplos/api/reservasjon/reservasjon-status'),
  OPPHEV_OPPGAVERESERVASJON: wrapUrl('fplos/api/reservasjon/opphev-reservasjon'),
  ENDRE_OPPGAVERESERVASJON: wrapUrl('fplos/api/reservasjon/endre-varighet'),
  FLYTT_RESERVASJON: wrapUrl('fplos/api/reservasjon/flytt-reservasjon'),
  FORLENG_OPPGAVERESERVASJON: wrapUrl('fplos/api/reservasjon/forleng'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: wrapUrl('fplos/api/reservasjon/flytt-reservasjon/søk'),
  SAKSLISTE_SAKSBEHANDLERE: wrapUrl('fplos/api/saksbehandler/saksliste/saksbehandlere'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: wrapUrl('fplos/api/saksbehandler/oppgaver/antall'),
  OPPGAVER_TIL_BEHANDLING: wrapUrl('fplos/api/saksbehandler/oppgaver'),
  HENT_NYE_OG_FERDIGSTILTE_OPPGAVER: wrapUrl('fplos/api/saksbehandler/nøkkeltall/nye-og-ferdigstilte-oppgaver'),
};

export const getSakslisteSaksbehandlere = (sakslisteId: number) =>
  kyExtended.get(LosUrl.SAKSLISTE_SAKSBEHANDLERE, { searchParams: { sakslisteId } }).json<Saksbehandler[]>();

export const getBehandlingskøOppgaveAntall = (sakslisteId: number) =>
  kyExtended.get(LosUrl.BEHANDLINGSKO_OPPGAVE_ANTALL, { searchParams: { sakslisteId } }).json<number>();

export const getReservasjonsstatus = (oppgaveId: number) =>
  kyExtended.get(LosUrl.HENT_RESERVASJONSSTATUS, { searchParams: { oppgaveId } }).json<OppgaveStatus>();

export const getOppgaverTilBehandling = (sakslisteId: number, oppgaveIder?: string) =>
  kyExtended.get<Oppgave[]>(LosUrl.OPPGAVER_TIL_BEHANDLING, {
    searchParams: oppgaveIder
      ? {
          sakslisteId,
          oppgaveIder,
        }
      : { sakslisteId },
  });

export const doGetRequest = <T>(url: string) => kyExtended.get(url).json<T>();

export const getOppgaverForFagsaker = (fagsaker: FagsakEnkel[]) =>
  kyExtended
    .get(LosUrl.OPPGAVER_FOR_FAGSAKER, {
      searchParams: { saksnummerListe: fagsaker.map(f => `${f.saksnummer}`).join(',') },
    })
    .json<Oppgave[]>();

export const losKodeverkOptions = () =>
  queryOptions({
    queryKey: [LosUrl.KODEVERK_LOS],
    queryFn: () => kyExtended.get(LosUrl.KODEVERK_LOS).json<AlleKodeverkLos>(),
    staleTime: Infinity,
  });

export const driftsmeldingerOptions = () =>
  queryOptions({
    queryKey: [LosUrl.DRIFTSMELDINGER],
    queryFn: () => kyExtended.get(LosUrl.DRIFTSMELDINGER).json<Driftsmelding[]>(),
  });

export const sakslisteOptions = () =>
  queryOptions({
    queryKey: [LosUrl.SAKSLISTE],
    queryFn: () => kyExtended.get(LosUrl.SAKSLISTE).json<Saksliste[]>(),
  });

export const reserverteOppgaverOptions = () =>
  queryOptions({
    queryKey: [LosUrl.RESERVERTE_OPPGAVER],
    queryFn: () => kyExtended.get(LosUrl.RESERVERTE_OPPGAVER).json<Oppgave[]>(),
  });

export const hentNyeOgFerdigstilteOppgaverOptions = (sakslisteId: number) =>
  queryOptions({
    queryKey: [LosUrl.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER, sakslisteId],
    queryFn: () =>
      kyExtended
        .get(LosUrl.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER, { searchParams: { sakslisteId } })
        .json<NyeOgFerdigstilteOppgaver[]>(),
  });

export const behandlendeOppgaverOptions = () =>
  queryOptions({
    queryKey: [LosUrl.BEHANDLEDE_OPPGAVER],
    queryFn: () => kyExtended.get(LosUrl.BEHANDLEDE_OPPGAVER).json<Oppgave[]>(),
  });

export const søkFagsakPost = (searchString: string, skalReservere: boolean) =>
  kyExtended.post(LosUrl.SØK_FAGSAK, { json: { searchString, skalReservere } }).json<FagsakEnkel[]>();

export const opphevReservasjon = (oppgaveId: number) =>
  kyExtended.post(LosUrl.OPPHEV_OPPGAVERESERVASJON, { json: { oppgaveId } });

export const forlengReservasjonPost = (oppgaveId: number) =>
  kyExtended.post(LosUrl.FORLENG_OPPGAVERESERVASJON, { json: { oppgaveId } }).json<Oppgave[]>();

export const endreReservasjonPost = (oppgaveId: number, reserverTil: string) =>
  kyExtended.post(LosUrl.ENDRE_OPPGAVERESERVASJON, { json: { oppgaveId, reserverTil } }).json<Oppgave[]>();

export const flyttReservasjonPost = (oppgaveId: number, brukerIdent: string, begrunnelse: string) =>
  kyExtended.post(LosUrl.FLYTT_RESERVASJON, { json: { oppgaveId, brukerIdent, begrunnelse } }).json<Oppgave[]>();

export const reserverOppgavePost = (oppgaveId: number) =>
  kyExtended.post(LosUrl.RESERVER_OPPGAVE, { json: { oppgaveId } }).json<OppgaveStatus>();

export const flyttReservasjonSaksbehandlerSøkPost = (brukerIdent: string) =>
  kyExtended.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, { json: { brukerIdent } }).json<SaksbehandlerProfil>();
