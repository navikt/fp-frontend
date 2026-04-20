import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import type { AlleKodeverkLos, ReservasjonStatusDto } from '@navikt/fp-types';

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

export const LosUrlFelles = {
  KODEVERK_LOS: wrapUrl('/fplos/api/kodeverk'),
  FLYTT_RESERVASJON: wrapUrl('/fplos/api/reservasjon/flytt-reservasjon'),
  ENDRE_OPPGAVERESERVASJON: wrapUrl('/fplos/api/reservasjon/endre-varighet'),
};

export const losKodeverkOptions = () =>
  queryOptions({
    queryKey: [LosUrlFelles.KODEVERK_LOS],
    queryFn: () => kyExtended.get(LosUrlFelles.KODEVERK_LOS).json<AlleKodeverkLos>(),
    staleTime: Infinity,
  });

export const endreReservasjon = (oppgaveId: number, reserverTil: string) =>
  kyExtended
    .post(LosUrlFelles.ENDRE_OPPGAVERESERVASJON, { json: { oppgaveId, reserverTil } })
    .json<ReservasjonStatusDto>();

export const flyttReservasjon = (oppgaveId: number, brukerIdent: string, begrunnelse: string) =>
  kyExtended
    .post(LosUrlFelles.FLYTT_RESERVASJON, { json: { oppgaveId, brukerIdent, begrunnelse } })
    .json<ReservasjonStatusDto>();
