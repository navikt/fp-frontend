import { queryOptions } from '@tanstack/react-query';
import ky, { type SearchParamsOption } from 'ky';

import type {
  AlleKodeverkLos,
  EndreOppgaveReservasjonData,
  EndreOppgaveReservasjonResponse,
  FlyttOppgaveReservasjonData,
  FlyttOppgaveReservasjonResponse,
  HentGruppertKodelisteData,
} from '@navikt/fp-types';

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

type LosData = { url: string; query?: unknown; body?: unknown };

declare const losOperasjon: unique symbol;

export type LosEndepunkt<D extends LosData, R> = string & { readonly [losOperasjon]: { data: D; respons: R } };

// fplos-spesifikasjonen beskriver query-parametre som DTO-objekter (f.eks. sakslisteId: { sakslisteId: number }),
// men backend tar imot verdien direkte (?sakslisteId=1).
type LosQuery<D extends LosData> = D['query'] extends undefined
  ? never
  : {
      [K in keyof NonNullable<D['query']>]: NonNullable<NonNullable<D['query']>[K]> extends Record<K, infer V>
        ? V
        : NonNullable<D['query']>[K];
    };

type LosQueryArg<D extends LosData> = undefined extends D['query'] ? [query?: LosQuery<D>] : [query: LosQuery<D>];

export const losEndepunkt = <D extends LosData, R = unknown>(url: D['url']) =>
  (isTest ? `https://www.test.com/fplos${url}` : `/fplos${url}`) as LosEndepunkt<D, R>;

export const losGet = <D extends LosData, R>(endepunkt: LosEndepunkt<D, R>, ...[query]: LosQueryArg<D>) =>
  kyExtended.get<R>(endepunkt, { searchParams: query as SearchParamsOption });

export const losPost = <D extends LosData, R>(endepunkt: LosEndepunkt<D, R>, body: NonNullable<D['body']>) =>
  kyExtended.post<R>(endepunkt, { json: body });

export const LosUrlFelles = {
  KODEVERK_LOS: losEndepunkt<HentGruppertKodelisteData, AlleKodeverkLos>('/api/kodeverk'),
  FLYTT_RESERVASJON: losEndepunkt<FlyttOppgaveReservasjonData, FlyttOppgaveReservasjonResponse>(
    '/api/reservasjon/flytt-reservasjon',
  ),
  ENDRE_OPPGAVERESERVASJON: losEndepunkt<EndreOppgaveReservasjonData, EndreOppgaveReservasjonResponse>(
    '/api/reservasjon/endre-varighet',
  ),
};

export const losKodeverkOptions = () =>
  queryOptions({
    queryKey: [LosUrlFelles.KODEVERK_LOS],
    queryFn: () => losGet(LosUrlFelles.KODEVERK_LOS).json(),
    staleTime: Infinity,
  });

export const endreReservasjon = (oppgaveId: number, reserverTil: string) =>
  losPost(LosUrlFelles.ENDRE_OPPGAVERESERVASJON, { oppgaveId, reserverTil }).json();

export const flyttReservasjon = (oppgaveId: number, brukerIdent: string, begrunnelse: string) =>
  losPost(LosUrlFelles.FLYTT_RESERVASJON, { oppgaveId, brukerIdent, begrunnelse }).json();
