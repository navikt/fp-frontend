import { queryOptions, useQuery } from '@tanstack/react-query';
import ky from 'ky';

import { Link } from '@navikt/fp-rest-api';
import { FormValues as EndreUtlandFormValues } from '@navikt/fp-sak-meny-endre-utland';
import { FormValues } from '@navikt/fp-sak-meny-ny-behandling';
import {
  Aktor,
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
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
import { FatterVedtakAp } from '@navikt/fp-types-avklar-aksjonspunkter';

type BehandlendeEnheter = {
  enhetId: string;
  enhetNavn: string;
}[];

export type InitDataFpSak = {
  behandlendeEnheter: BehandlendeEnheter;
  innloggetBruker: NavAnsatt;
  links: Link[];
  sakLinks: Link[];
};

type InitDataFpTilbake = {
  links: Link[];
  sakLinks: Link[];
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
export const wrapUrl = (url: string) => (isTest ? `http://www.test.com${url}` : url);

const getUrlFromRel = (rel: string, links: Link[] = []): string => {
  const link = links.find(l => l.rel === rel);
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
      json: { searchString: { behandlingUuid, brevmalkode, fritekst } },
    })
    .blob();

export const forhåndsvisTilbakekrevingHenleggelse = (behandlingUuid: string, fritekst: string) =>
  kyExtended
    .post(FagsakUrl.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE, {
      json: { searchString: { behandlingUuid, fritekst } },
    })
    .blob();

export const lagNyBehandling = (params: NyBehandlingParams) =>
  kyExtended.put<Behandling>(FagsakUrl.NEW_BEHANDLING_FPSAK, {
    json: { searchString: params },
  });

export const lagNyTilbakekrevingBehandling = (params: NyBehandlingParams) =>
  kyExtended.post<Behandling>(FagsakUrl.NEW_BEHANDLING_FPTILBAKE, {
    json: { searchString: params },
  });

export const doGetRequest = <T>(url: string) => kyExtended.get(url).json<T>();

const getKodeverkOptions =
  (links?: Link[]) =>
  (skalHenteKodeverk = true) =>
    queryOptions({
      queryKey: [FagsakRel.KODEVERK],
      queryFn: () => kyExtended.get(getUrlFromRel(FagsakRel.KODEVERK, links)).json<AlleKodeverk>(),
      enabled: skalHenteKodeverk,
      staleTime: Infinity,
    });

const getKodeverkFpTilbakeOptions =
  (links?: Link[]) =>
  (skalHenteKodeverk = true) =>
    queryOptions({
      queryKey: [FagsakRel.KODEVERK_FPTILBAKE],
      queryFn: () =>
        kyExtended.get(getUrlFromRel(FagsakRel.KODEVERK_FPTILBAKE, links)).json<AlleKodeverkTilbakekreving>(),
      enabled: skalHenteKodeverk,
      staleTime: Infinity,
    });

export const getHentFagsakOptions = (links?: Link[]) => (saksnummer: string) =>
  queryOptions({
    queryKey: [FagsakRel.FETCH_FAGSAK, saksnummer],
    queryFn: () =>
      kyExtended.get(getUrlFromRel(FagsakRel.FETCH_FAGSAK, links), { searchParams: { saksnummer } }).json<Fagsak>(),
  });

export const getHentFagsakFpTilbakeOptions = (links?: Link[]) => (isEnabled: boolean, saksnummer: string) =>
  queryOptions({
    queryKey: [FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE, saksnummer],
    queryFn: () =>
      kyExtended
        .get(getUrlFromRel(FagsakRel.FETCH_FAGSAKDATA_FPTILBAKE, links), { searchParams: { saksnummer } })
        .json<FagsakDataFpTilbake>(),
    enabled: isEnabled,
  });

export const getHentDokumenter =
  (links?: Link[]) => (isEnabled: boolean, saksnummer: string, behandlingUuid?: string, behandlingVersjon?: number) =>
    queryOptions({
      queryKey: [FagsakRel.ALL_DOCUMENTS, saksnummer, behandlingUuid, behandlingVersjon],
      queryFn: () =>
        kyExtended
          .get(getUrlFromRel(FagsakRel.ALL_DOCUMENTS, links), { searchParams: { saksnummer } })
          .json<Dokument[]>(),
      enabled: isEnabled,
    });

export const getKanTilbakekrevingOpprettesOptions =
  (links?: Link[]) => (isEnabled: boolean, saksnummer: string, uuid?: string) =>
    queryOptions({
      queryKey: [FagsakRel.KAN_TILBAKEKREVING_OPPRETTES, saksnummer, uuid],
      queryFn: () =>
        kyExtended
          .get(getUrlFromRel(FagsakRel.KAN_TILBAKEKREVING_OPPRETTES, links), {
            searchParams: { saksnummer, uuid: uuid ?? '' },
          })
          .json<boolean>(),
      enabled: isEnabled,
    });

export const getKanTilbakekrevingRevurderingOpprettesOptions =
  (links?: Link[]) => (isEnabled: boolean, uuid?: string) =>
    queryOptions({
      queryKey: [FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES, uuid],
      queryFn: () =>
        kyExtended
          .get(getUrlFromRel(FagsakRel.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES, links), {
            searchParams: { uuid: uuid ?? '' },
          })
          .json<boolean>(),
      enabled: isEnabled,
    });

export const getSøkInfotrygd = (links?: Link[]) => (searchString: string) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.SEARCH_UTBETALINGSDATA_IS15, links), {
      json: { searchString },
    })
    .json<InfotrygdVedtak>();

export const getSøkFagsak = (links?: Link[]) => (searchString: string) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.SEARCH_FAGSAK, links), {
      json: { searchString },
    })
    .json<FagsakEnkel[]>();

export const getEndreSakMarkering = (links?: Link[]) => (params: EndreUtlandFormValues) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.ENDRE_SAK_MARKERING, links), {
      json: { searchString: params },
    })
    .json();

export const getLagreNotat = (links?: Link[]) => (saksnummer: string, notat: string) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.LAGRE_NOTAT, links), {
      json: { searchString: { saksnummer, notat } },
    })
    .json();

export const getForhåndsvisMelding = (links?: Link[]) => (params: ForhåndsvisMeldingParams) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.PREVIEW_MESSAGE_MENU, links), {
      json: { searchString: params },
    })
    .blob();

export const getLagreTotrinnsaksjonspunkt = (links?: Link[]) => (params: BekreftedeTotrinnsaksjonspunkter) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.SAVE_TOTRINNSAKSJONSPUNKT, links), {
      json: { searchString: params },
    })
    .json<Behandling>();

export const getSendMelding = (links?: Link[]) => (params: SubmitMessageParams) =>
  kyExtended
    .post(getUrlFromRel(FagsakRel.SUBMIT_MESSAGE, links), {
      json: { searchString: params },
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
