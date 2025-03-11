import { queryOptions, useQuery } from '@tanstack/react-query';
import ky from 'ky';

import type { FormValues as EndreUtlandFormValues } from '@navikt/fp-sak-meny-endre-utland';
import type { FormValues } from '@navikt/fp-sak-meny-ny-behandling';
import type {
  Aktor,
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
  ApiLink,
  Behandling,
  BehandlingAppKontekst,
  Dokument,
  Fagsak,
  FagsakDataFpTilbake,
  FagsakEnkel,
  ForhåndsvisMeldingParams,
  InfotrygdVedtak,
  NavAnsatt,
} from '@navikt/fp-types';
import type { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

type BehandlendeEnheter = {
  enhetId: string;
  enhetNavn: string;
}[];

export type InitDataFpSak = {
  behandlendeEnheter: BehandlendeEnheter;
  innloggetBruker: NavAnsatt;
  links: ApiLink[];
  sakLinks: ApiLink[];
};

type InitDataFpTilbake = {
  links: ApiLink[];
  sakLinks: ApiLink[];
};

export type BekreftedeTotrinnsaksjonspunkter = {
  behandlingUuid: string;
  behandlingVersjon: number;
  bekreftedeAksjonspunktDtoer: ({
    '@type': string;
  } & FatterVedtakAp)[];
};

export type SubmitMessageParams = {
  behandlingUuid?: string;
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
};

export type NyBehandlingParams = {
  saksnummer: string;
  behandlingUuid?: string;
} & FormValues;

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
export const wrapUrl = (url: string): string => (isTest ? `http://www.test.com${url}` : url);

const getUrlFromRel = (rel: keyof typeof FagsakRel, links: ApiLink[] = []): string => {
  const link = links.find(l => l.rel === FagsakRel[rel]);
  return link ? wrapUrl(link.href) : '';
};

export const FagsakUrl = {
  INIT_FETCH: wrapUrl('/fpsak/api/init-fetch'),
  AKTOER_INFO: wrapUrl('/fpsak/api/aktoer-info'),
  NEW_BEHANDLING_FPSAK: wrapUrl('/fpsak/api/behandlinger'),
  INIT_FETCH_FPTILBAKE: wrapUrl('/fptilbake/api/init-fetch'),
  PREVIEW_MESSAGE_TILBAKEKREVING: wrapUrl('/fptilbake/api/brev/forhandsvis'),
  PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE: wrapUrl('/fptilbake/api/dokument/forhandsvis-henleggelsesbrev'),
  NEW_BEHANDLING_FPTILBAKE: wrapUrl('/fptilbake/api/behandlinger/opprett'),
};

export const FagsakRel = {
  KODEVERK: 'kodeverk',
  KODEVERK_FPTILBAKE: 'tilbake-kodeverk',
  SEARCH_UTBETALINGSDATA_IS15: 'infotrygd-søk',
  SEARCH_FAGSAK: 'søk-fagsak',
  FETCH_FAGSAK: 'fagsak-full',
  FETCH_FAGSAKDATA_FPTILBAKE: 'tilbake-fagsak-full',
  ENDRE_SAK_MARKERING: 'endre-utland-markering',
  LAGRE_NOTAT: 'lagre-notat',
  PREVIEW_MESSAGE_MENU: 'brev-vis',
  SAVE_TOTRINNSAKSJONSPUNKT: 'bekreft-totrinnsaksjonspunkt',
  SUBMIT_MESSAGE: 'brev-bestill',
  ALL_DOCUMENTS: 'sak-dokumentliste',
  KAN_TILBAKEKREVING_OPPRETTES: 'tilbake-kan-opprette-behandling',
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES: 'tilbake-kan-opprette-revurdering',
};

export const initFetchOptions = () =>
  queryOptions({
    queryKey: [FagsakUrl.INIT_FETCH],
    queryFn: () => kyExtended.get(FagsakUrl.INIT_FETCH).json<InitDataFpSak>(),
    staleTime: Infinity,
  });

export const initFetchFpTilbakeOptions = () =>
  queryOptions({
    queryKey: [FagsakUrl.INIT_FETCH_FPTILBAKE],
    queryFn: () => kyExtended.get(FagsakUrl.INIT_FETCH_FPTILBAKE).json<InitDataFpTilbake>(),
    staleTime: Infinity,
  });

export const aktørInfoOptions = (aktørId?: string) =>
  queryOptions({
    queryKey: [FagsakUrl.AKTOER_INFO, aktørId],
    queryFn: () => kyExtended.get(FagsakUrl.AKTOER_INFO, { searchParams: { aktoerId: aktørId ?? '' } }).json<Aktor>(),
    enabled: !!aktørId,
  });

export const forhåndsvisTilbakekreving = (behandlingUuid: string, brevmalkode: string, fritekst: string) =>
  kyExtended
    .post(FagsakUrl.PREVIEW_MESSAGE_TILBAKEKREVING, {
      json: { behandlingUuid, brevmalkode, fritekst },
    })
    .blob();

export const forhåndsvisTilbakekrevingHenleggelse = (behandlingUuid: string, fritekst: string) =>
  kyExtended
    .post(FagsakUrl.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE, {
      json: { behandlingUuid, fritekst },
    })
    .blob();

export const lagNyBehandling = (params: NyBehandlingParams) =>
  kyExtended.put<Behandling>(FagsakUrl.NEW_BEHANDLING_FPSAK, {
    json: params,
  });

export const lagNyTilbakekrevingBehandling = (params: NyBehandlingParams) =>
  kyExtended.post<Behandling>(FagsakUrl.NEW_BEHANDLING_FPTILBAKE, {
    json: params,
  });

export const doGetRequest = <T>(url: string) => kyExtended.get(url).json<T>();

const getKodeverkOptions =
  (links?: ApiLink[]) =>
  (skalHenteKodeverk = true) =>
    queryOptions({
      queryKey: [FagsakRel.KODEVERK],
      queryFn: () => kyExtended.get(getUrlFromRel('KODEVERK', links)).json<AlleKodeverk>(),
      enabled: skalHenteKodeverk,
      staleTime: Infinity,
    });

const getKodeverkFpTilbakeOptions =
  (links?: ApiLink[]) =>
  (skalHenteKodeverk = true) =>
    queryOptions({
      queryKey: [FagsakRel.KODEVERK_FPTILBAKE],
      queryFn: () => kyExtended.get(getUrlFromRel('KODEVERK_FPTILBAKE', links)).json<AlleKodeverkTilbakekreving>(),
      enabled: skalHenteKodeverk,
      staleTime: Infinity,
    });

const getHentFagsakOptions = (links?: ApiLink[]) => (saksnummer: string) =>
  queryOptions({
    queryKey: [FagsakRel.FETCH_FAGSAK, saksnummer],
    queryFn: () =>
      kyExtended.get(getUrlFromRel('FETCH_FAGSAK', links), { searchParams: { saksnummer } }).json<Fagsak>(),
  });

const getHentFagsakFpTilbakeOptions = (links?: ApiLink[]) => (isEnabled: boolean, saksnummer: string) =>
  queryOptions({
    queryKey: [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE, saksnummer],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel('FETCH_FAGSAKDATA_FPTILBAKE', links), { searchParams: { saksnummer } })
        .json<FagsakDataFpTilbake>(),
    enabled: isEnabled,
  });

const getHentDokumenter =
  (links?: ApiLink[]) => (saksnummer: string, behandlingUuid?: string, behandlingVersjon?: number) =>
    queryOptions({
      queryKey: [FagsakRel.ALL_DOCUMENTS, saksnummer, behandlingUuid, behandlingVersjon],
      queryFn: () =>
        kyExtended.get(getUrlFromRel('ALL_DOCUMENTS', links), { searchParams: { saksnummer } }).json<Dokument[]>(),
    });

const getKanTilbakekrevingOpprettesOptions =
  (links?: ApiLink[]) => (isEnabled: boolean, saksnummer: string, uuid?: string) =>
    queryOptions({
      queryKey: [FagsakRel.KAN_TILBAKEKREVING_OPPRETTES, saksnummer, uuid],
      queryFn: () =>
        kyExtended
          .get(getUrlFromRel('KAN_TILBAKEKREVING_OPPRETTES', links), {
            searchParams: { saksnummer, uuid: uuid ?? '' },
          })
          .json<boolean>(),
      enabled: isEnabled,
    });

const getKanTilbakekrevingRevurderingOpprettesOptions = (links?: ApiLink[]) => (isEnabled: boolean, uuid?: string) =>
  queryOptions({
    queryKey: [FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES, uuid],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel('KAN_TILBAKEKREVING_REVURDERING_OPPRETTES', links), {
          searchParams: { uuid: uuid ?? '' },
        })
        .json<boolean>(),
    enabled: isEnabled,
  });

const getSøkInfotrygd = (links?: ApiLink[]) => (searchString: string) =>
  kyExtended
    .post(getUrlFromRel('SEARCH_UTBETALINGSDATA_IS15', links), {
      json: { searchString },
    })
    .json<InfotrygdVedtak>();

const getSøkFagsak = (links?: ApiLink[]) => (searchString: string) =>
  kyExtended
    .post(getUrlFromRel('SEARCH_FAGSAK', links), {
      json: { searchString },
    })
    .json<FagsakEnkel[]>();

const getEndreSakMarkering = (links?: ApiLink[]) => (params: EndreUtlandFormValues) =>
  kyExtended
    .post(getUrlFromRel('ENDRE_SAK_MARKERING', links), {
      json: params,
    })
    .json();

const getLagreNotat = (links?: ApiLink[]) => (saksnummer: string, notat: string) =>
  kyExtended
    .post(getUrlFromRel('LAGRE_NOTAT', links), {
      json: { saksnummer, notat },
    })
    .json();

const getForhåndsvisMelding = (links?: ApiLink[]) => (params: ForhåndsvisMeldingParams) =>
  kyExtended
    .post(getUrlFromRel('PREVIEW_MESSAGE_MENU', links), {
      json: params,
    })
    .blob();

const getLagreTotrinnsaksjonspunkt = (links?: ApiLink[]) => (params: BekreftedeTotrinnsaksjonspunkter) =>
  kyExtended
    .post(getUrlFromRel('SAVE_TOTRINNSAKSJONSPUNKT', links), {
      json: params,
    })
    .json<Behandling>();

const getSendMelding = (links?: ApiLink[]) => (params: SubmitMessageParams) =>
  kyExtended
    .post(getUrlFromRel('SUBMIT_MESSAGE', links), {
      json: params,
    })
    .json();

export const useFagsakApi = () => {
  const { data: initFetchFpSak } = useQuery(initFetchOptions());
  const { data: initFetchFpTilbake } = useQuery(initFetchFpTilbakeOptions());

  return {
    kodeverkOptions: getKodeverkOptions(initFetchFpSak?.links),
    søkFagsak: getSøkFagsak(initFetchFpSak?.links),
    søkInfotrygd: getSøkInfotrygd(initFetchFpSak?.links),
    hentFagsakOptions: getHentFagsakOptions(initFetchFpSak?.sakLinks),
    endreSakMarkering: getEndreSakMarkering(initFetchFpSak?.sakLinks),
    lagreNotat: getLagreNotat(initFetchFpSak?.sakLinks),
    hentDokumenter: getHentDokumenter(initFetchFpSak?.sakLinks),
    fptilbake: {
      kodeverkOptions: getKodeverkFpTilbakeOptions(initFetchFpTilbake?.links),
      hentFagsakOptions: getHentFagsakFpTilbakeOptions(initFetchFpTilbake?.sakLinks),
      kanTilbakekrevingOpprettesOptions: getKanTilbakekrevingOpprettesOptions(initFetchFpTilbake?.sakLinks),
      kanTilbakekrevingRevurderingOpprettesOptions: getKanTilbakekrevingRevurderingOpprettesOptions(
        initFetchFpTilbake?.sakLinks,
      ),
    },
  };
};

export const useFagsakBehandlingApi = (valgtBehandling: BehandlingAppKontekst) => {
  const { links } = valgtBehandling;
  return {
    lagreTotrinnsaksjonspunkt: getLagreTotrinnsaksjonspunkt(links),
    sendMelding: getSendMelding(links),
    forhåndsvisMelding: getForhåndsvisMelding(links),
  };
};
