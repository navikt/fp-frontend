import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import { Oppgave, OppgaveStatus, SaksbehandlerProfil } from '@navikt/fp-los-felles';
import { AlleKodeverk, FagsakEnkel } from '@navikt/fp-types';

import { Driftsmelding } from '../typer/driftsmeldingTsType';
import { NyeOgFerdigstilteOppgaver } from '../typer/nyeOgFerdigstilteOppgaverTsType';
import { Saksbehandler } from '../typer/saksbehandlerTsType';
import { Saksliste } from '../typer/sakslisteTsType';

//MÅ være en gyldig URL for at KY skal fungere i test
const isTest = import.meta.env.MODE === 'test';
const wrapUrl = (url: string) => (isTest ? `http://www.test.com${url}` : url);

export const LosUrl = {
  KODEVERK_LOS: wrapUrl('/fplos/api/kodeverk'),
  DRIFTSMELDINGER: wrapUrl('/fplos/api/driftsmeldinger'),
  SØK_FAGSAK: wrapUrl('/fpsak/api/fagsak/sok'),
  SAKSLISTE: wrapUrl('/fplos/api/saksbehandler/saksliste'),
  RESERVERTE_OPPGAVER: wrapUrl('/fplos/api/reservasjon/reserverte-oppgaver'),
  BEHANDLEDE_OPPGAVER: wrapUrl('/fplos/api/reservasjon/tidligere-reserverte'),
  RESERVER_OPPGAVE: wrapUrl('/fplos/api/reservasjon/reserver'),
  OPPGAVER_FOR_FAGSAKER: wrapUrl('/fplos/api/saksbehandler/oppgaver/oppgaver-for-fagsaker'),
  HENT_RESERVASJONSSTATUS: wrapUrl('/fplos/api/reservasjon/reservasjon-status'),
  OPPHEV_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/opphev-reservasjon'),
  ENDRE_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/endre-varighet'),
  FLYTT_RESERVASJON: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon'),
  FORLENG_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/forleng'),
  FLYTT_RESERVASJON_SAKSBEHANDLER_SOK: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon/søk'),
  SAKSLISTE_SAKSBEHANDLERE: wrapUrl('/fplos/api/saksbehandler/saksliste/saksbehandlere'),
  BEHANDLINGSKO_OPPGAVE_ANTALL: wrapUrl('/fplos/api/saksbehandler/oppgaver/antall'),
  OPPGAVER_TIL_BEHANDLING: wrapUrl('/fplos/api/saksbehandler/oppgaver'),
  HENT_NYE_OG_FERDIGSTILTE_OPPGAVER: wrapUrl('/fplos/api/saksbehandler/nøkkeltall/nye-og-ferdigstilte-oppgaver'),
};

export const getSakslisteSaksbehandlere = (sakslisteId: number) =>
  ky.get(LosUrl.SAKSLISTE_SAKSBEHANDLERE, { searchParams: { sakslisteId } }).json<Saksbehandler[]>();

export const getBehandlingskøOppgaveAntall = (sakslisteId: number) =>
  ky.get(LosUrl.BEHANDLINGSKO_OPPGAVE_ANTALL, { searchParams: { sakslisteId } }).json<number>();

export const getReservasjonsstatus = (oppgaveId: number) =>
  ky.get(LosUrl.HENT_RESERVASJONSSTATUS, { searchParams: { oppgaveId } }).json<OppgaveStatus>();

export const losKodeverkOptions = () =>
  queryOptions({
    queryKey: [LosUrl.KODEVERK_LOS],
    queryFn: () => ky.get(LosUrl.KODEVERK_LOS).json<AlleKodeverk>(),
    staleTime: Infinity,
  });

export const driftsmeldingerOptions = () =>
  queryOptions({
    queryKey: [LosUrl.DRIFTSMELDINGER],
    queryFn: () => ky.get(LosUrl.DRIFTSMELDINGER).json<Driftsmelding[]>(),
  });

export const sakslisteOptions = () =>
  queryOptions({
    queryKey: [LosUrl.SAKSLISTE],
    queryFn: () => ky.get(LosUrl.SAKSLISTE).json<Saksliste[]>(),
  });

export const reserverteOppgaverOptions = () =>
  queryOptions({
    queryKey: [LosUrl.RESERVERTE_OPPGAVER],
    queryFn: () => ky.get(LosUrl.RESERVERTE_OPPGAVER).json<Oppgave[]>(),
  });

export const oppgaverTilBehandlingOptions = (sakslisteId: number, oppgaveIder?: string) =>
  queryOptions({
    queryKey: [LosUrl.OPPGAVER_TIL_BEHANDLING, sakslisteId, oppgaveIder],
    queryFn: () =>
      ky
        .get(LosUrl.OPPGAVER_TIL_BEHANDLING, {
          searchParams: oppgaveIder
            ? {
                sakslisteId,
                oppgaveIder,
              }
            : { sakslisteId },
        })
        .json<Oppgave[]>(),
  });

export const getOppgaverForFagsaker = (fagsaker: FagsakEnkel[]) =>
  ky
    .get(LosUrl.OPPGAVER_FOR_FAGSAKER, {
      searchParams: { saksnummerListe: fagsaker.map(f => `${f.saksnummer}`).join(',') },
    })
    .json<Oppgave[]>();

export const hentNyeOgFerdigstilteOppgaverOptions = (sakslisteId: number) =>
  queryOptions({
    queryKey: [LosUrl.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER, sakslisteId],
    queryFn: () =>
      ky
        .get(LosUrl.HENT_NYE_OG_FERDIGSTILTE_OPPGAVER, { searchParams: { sakslisteId } })
        .json<NyeOgFerdigstilteOppgaver[]>(),
  });

export const behandlendeOppgaverOptions = () =>
  queryOptions({
    queryKey: [LosUrl.BEHANDLEDE_OPPGAVER],
    queryFn: () => ky.get(LosUrl.BEHANDLEDE_OPPGAVER).json<Oppgave[]>(),
  });

export const søkFagsakPost = (searchString: string, skalReservere: boolean) =>
  ky.post(LosUrl.SØK_FAGSAK, { searchParams: { searchString, skalReservere } }).json<FagsakEnkel[]>();

export const postOpphevReservasjon = (oppgaveId: number, begrunnelse: string) =>
  ky.post(LosUrl.OPPHEV_OPPGAVERESERVASJON, { json: { oppgaveId, begrunnelse } });

export const forlengReservasjonPost = (oppgaveId: number) =>
  ky.post(LosUrl.FORLENG_OPPGAVERESERVASJON, { json: { oppgaveId } }).json<Oppgave[]>();

export const endreReservasjonPost = (oppgaveId: number, reserverTil: string) =>
  ky.post(LosUrl.ENDRE_OPPGAVERESERVASJON, { json: { oppgaveId, reserverTil } }).json<Oppgave[]>();

export const flyttReservasjonPost = (oppgaveId: number, brukerIdent: string, begrunnelse: string) =>
  ky.post(LosUrl.FLYTT_RESERVASJON, { json: { oppgaveId, brukerIdent, begrunnelse } }).json<Oppgave[]>();

export const reserverOppgavePost = (oppgaveId: number) =>
  ky.post(LosUrl.RESERVER_OPPGAVE, { json: { oppgaveId } }).json<OppgaveStatus>();

export const flyttReservasjonSaksbehandlerSøkPost = (brukerIdent: string) =>
  ky.post(LosUrl.FLYTT_RESERVASJON_SAKSBEHANDLER_SOK, { json: { brukerIdent } }).json<SaksbehandlerProfil>();
