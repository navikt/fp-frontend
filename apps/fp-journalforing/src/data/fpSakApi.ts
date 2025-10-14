import { queryOptions } from '@tanstack/react-query';
import ky from 'ky';

import type { NavAnsatt } from '@navikt/fp-types';

export type InitDataFpSak = {
  innloggetBruker: NavAnsatt;
};

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

export const FagsakUrl = {
  INIT_FETCH: wrapUrl('/fpsak/api/init-fetch'),
};

export const initFetchOptions = () =>
  queryOptions({
    queryKey: [FagsakUrl.INIT_FETCH],
    queryFn: () => kyExtended.get(FagsakUrl.INIT_FETCH).json<InitDataFpSak>(),
    staleTime: Infinity,
  });
