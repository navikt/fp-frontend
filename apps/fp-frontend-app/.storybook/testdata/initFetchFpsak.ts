import type { InitDataFpSak } from '../../src/data/fagsakApi.ts';

export const initFetchFpsak: InitDataFpSak = {
  innloggetBruker: {
    brukernavn: 'S123456',
    navn: 'Sara Saksbehandler',
    kanSaksbehandle: true,
    kanVeilede: false,
    kanOverstyre: false,
    kanOppgavestyre: false,
    kanBehandleKode6: false,
    funksjonellTid: '2025-03-05T16:43:48.713947839',
  },
  behandlendeEnheter: [
    {
      enhetId: '2103',
      enhetNavn: 'Nav Vikafossen',
    },
    {
      enhetId: '4867',
      enhetNavn: 'Nav familie- og pensjonsytelser foreldrepenger',
    },
    {
      enhetId: '4883',
      enhetNavn: 'Nav familie- og pensjonsytelser Egne ansatte',
    },
  ],
  links: [
    {
      href: '/fpsak/api/kodeverk',
      rel: 'kodeverk',
      requestPayload: null,
      type: 'GET',
    },
    {
      href: '/fpsak/api/fagsak/sok',
      rel: 'søk-fagsak',
      requestPayload: null,
      type: 'POST',
    },
    {
      href: '/fpsak/api/infotrygd/sok',
      rel: 'infotrygd-søk',
      requestPayload: null,
      type: 'POST',
    },
  ],
  sakLinks: [
    {
      href: '/fpsak/api/fagsak/full',
      rel: 'fagsak-full',
      requestPayload: null,
      type: 'GET',
    },
    {
      href: '/fpsak/api/dokument/hent-dokumentliste',
      rel: 'sak-dokumentliste',
      requestPayload: null,
      type: 'GET',
    },
    {
      href: '/fpsak/api/fagsak/endre-utland',
      rel: 'endre-utland-markering',
      requestPayload: null,
      type: 'POST',
    },
    {
      href: '/fpsak/api/fagsak/notat',
      rel: 'lagre-notat',
      requestPayload: null,
      type: 'POST',
    },
    {
      href: '/fpsak/api/register/redirect-to/aa-reg',
      rel: 'arbeidstaker-redirect',
      requestPayload: null,
      type: 'GET',
    },
    {
      href: '/fpsak/api/register/redirect-to/a-inntekt',
      rel: 'ainntekt-redirect',
      requestPayload: null,
      type: 'GET',
    },
  ],
};
