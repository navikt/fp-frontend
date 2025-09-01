import type { InitDataFpSak } from '../../src/data/fagsakApi';

export const initFetchFpsak: InitDataFpSak = {
  innloggetBruker: {
    brukernavn: 'S123456',
    navn: 'Sara Saksbehandler',
    kanSaksbehandle: true,
    kanVeilede: false,
    kanOverstyre: false,
    kanOppgavestyre: false,
    kanBehandleKode6: false,
    funksjonellTid: '',
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
      type: 'GET',
    },
    {
      href: '/fpsak/api/fagsak/sok',
      rel: 'søk-fagsak',
      type: 'GET',
    },
    {
      href: '/fpsak/api/infotrygd/sok',
      rel: 'infotrygd-søk',
      type: 'GET',
    },
  ],
  sakLinks: [
    {
      href: '/fpsak/api/fagsak/full',
      rel: 'fagsak-full',
      type: 'GET',
    },
    {
      href: '/fpsak/api/dokument/hent-dokumentliste',
      rel: 'sak-dokumentliste',
      type: 'GET',
    },
    {
      href: '/fpsak/api/fagsak/endre-utland',
      rel: 'endre-utland-markering',
      type: 'GET',
    },
    {
      href: '/fpsak/api/fagsak/notat',
      rel: 'lagre-notat',
      type: 'GET',
    },
    {
      href: '/fpsak/api/register/redirect-to/aa-reg',
      rel: 'arbeidstaker-redirect',
      type: 'GET',
    },
    {
      href: '/fpsak/api/register/redirect-to/a-inntekt',
      rel: 'ainntekt-redirect',
      type: 'GET',
    },
  ],
};
