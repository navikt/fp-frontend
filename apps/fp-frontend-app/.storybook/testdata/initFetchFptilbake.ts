import type { InitDataFpTilbake } from '../../src/data/fagsakApi.ts';

export const initFetchFptilbake: InitDataFpTilbake = {
  links: [
    {
      href: '/fptilbake/api/kodeverk',
      rel: 'tilbake-kodeverk',
      type: 'GET',
      requestPayload: null,
    },
  ],
  sakLinks: [
    {
      href: '/fptilbake/api/behandlinger/fagsak-full',
      rel: 'tilbake-fagsak-full',
      type: 'GET',
      requestPayload: null,
    },
    {
      href: '/fptilbake/api/behandlinger/kan-opprettes',
      rel: 'tilbake-kan-opprette-behandling',
      type: 'GET',
      requestPayload: null,
    },
    {
      href: '/fptilbake/api/behandlinger/kan-revurdering-opprettes-v2',
      rel: 'tilbake-kan-opprette-revurdering',
      type: 'GET',
      requestPayload: null,
    },
  ],
};
