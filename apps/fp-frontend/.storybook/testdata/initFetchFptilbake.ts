import type { InitDataFpTilbake } from '../../src/data/fagsakApi';

export const initFetchFptilbake: InitDataFpTilbake = {
  links: [
    {
      href: '/fptilbake/api/kodeverk',
      rel: 'tilbake-kodeverk',
      type: 'GET',
    },
  ],
  sakLinks: [
    {
      href: '/fptilbake/api/behandlinger/fagsak-full',
      rel: 'tilbake-fagsak-full',
      type: 'GET',
    },
    {
      href: '/fptilbake/api/behandlinger/kan-opprettes',
      rel: 'tilbake-kan-opprette-behandling',
      type: 'GET',
    },
    {
      href: '/fptilbake/api/behandlinger/kan-revurdering-opprettes-v2',
      rel: 'tilbake-kan-opprette-revurdering',
      type: 'GET',
    },
  ],
};
