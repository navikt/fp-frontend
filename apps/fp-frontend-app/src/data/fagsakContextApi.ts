import { Aktor, Dokument } from '@navikt/ft-types';

import { RestApiConfigBuilder, createRequestApi, Link } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import {
  ForhåndsvisMeldingParams,
  FagsakEnkel,
  Fagsak,
  FagsakDataFpTilbake,
  NavAnsatt,
  Behandling,
  AlleKodeverk,
  AlleKodeverkTilbakekreving,
} from '@navikt/fp-types';

type BehandlendeEnheter = {
  enhetId: string;
  enhetNavn: string;
}[];

export type SubmitMessageParams = {
  behandlingUuid?: string;
  brevmalkode?: string;
  fritekst?: string;
  arsakskode?: string;
};

type InitDataFpSak = {
  behandlendeEnheter: BehandlendeEnheter;
  innloggetBruker: NavAnsatt;
  links: Link[];
  sakLinks: Link[];
};

type InitDataFpTilbake = {
  links: Link[];
  sakLinks: Link[];
};

export enum LinkCategory {
  INIT_DATA = 'INIT_DATA',
  FAGSAK = 'FAGSAK',
  BEHANDLING = 'BEHANDLING',
}

export enum FagsakApiKeys {
  INIT_FETCH = 'INIT_FETCH',
  INIT_FETCH_FPTILBAKE = 'INIT_FETCH_FPTILBAKE',
  KODEVERK = 'KODEVERK',
  KODEVERK_FPTILBAKE = 'KODEVERK_FPTILBAKE',
  SEARCH_FAGSAK = 'SEARCH_FAGSAK',
  FETCH_FAGSAK = 'FETCH_FAGSAK',
  FETCH_FAGSAKDATA_FPTILBAKE = 'FETCH_FAGSAKDATA_FPTILBAKE',
  NEW_BEHANDLING_FPSAK = 'NEW_BEHANDLING_FPSAK',
  NEW_BEHANDLING_FPTILBAKE = 'NEW_BEHANDLING_FPTILBAKE',
  AKTOER_INFO = 'AKTOER_INFO',
  ALL_DOCUMENTS = 'ALL_DOCUMENTS',
  SAVE_TOTRINNSAKSJONSPUNKT = 'SAVE_TOTRINNSAKSJONSPUNKT',
  SUBMIT_MESSAGE = 'SUBMIT_MESSAGE',
  LAGRE_NOTAT = 'LAGRE_NOTAT',
  KAN_TILBAKEKREVING_OPPRETTES = 'KAN_TILBAKEKREVING_OPPRETTES',
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES = 'KAN_TILBAKEKREVING_REVURDERING_OPPRETTES',
  PREVIEW_MESSAGE_TILBAKEKREVING = 'PREVIEW_MESSAGE_TILBAKEKREVING',
  PREVIEW_MESSAGE_FORMIDLING = 'PREVIEW_MESSAGE_FORMIDLING',
  PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE = 'PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE',
  ENDRE_SAK_MARKERING = 'ENDRE_SAK_MARKERING',
}

type ApiParamsAndResponse = {
  [FagsakApiKeys.INIT_FETCH]: [void, InitDataFpSak];
  [FagsakApiKeys.INIT_FETCH_FPTILBAKE]: [void, InitDataFpTilbake];
  [FagsakApiKeys.KODEVERK]: [void, AlleKodeverk];
  [FagsakApiKeys.KODEVERK_FPTILBAKE]: [void, AlleKodeverkTilbakekreving];
  [FagsakApiKeys.SEARCH_FAGSAK]: [{ searchString: string }, FagsakEnkel[]];
  [FagsakApiKeys.FETCH_FAGSAK]: [{ saksnummer: string }, Fagsak];
  [FagsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE]: [{ saksnummer: string }, FagsakDataFpTilbake];
  [FagsakApiKeys.NEW_BEHANDLING_FPSAK]: [any, Behandling];
  [FagsakApiKeys.NEW_BEHANDLING_FPTILBAKE]: [any, Behandling];
  [FagsakApiKeys.AKTOER_INFO]: [{ aktoerId: string }, Aktor];
  [FagsakApiKeys.ALL_DOCUMENTS]: [{ saksnummer: string }, Dokument[]];
  [FagsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT]: [any, Behandling];
  [FagsakApiKeys.SUBMIT_MESSAGE]: [SubmitMessageParams, void];
  [FagsakApiKeys.LAGRE_NOTAT]: [{ saksnummer: string; notat: string }, void];
  [FagsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES]: [{ saksnummer: string; uuid: string }, boolean];
  [FagsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES]: [{ uuid: string }, boolean];
  [FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING]: [any, any];
  [FagsakApiKeys.PREVIEW_MESSAGE_FORMIDLING]: [ForhåndsvisMeldingParams, any];
  [FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE]: [any, any];
  [FagsakApiKeys.ENDRE_SAK_MARKERING]: [{ saksnummer: string; fagsakMarkering: string }, void];
};

const fagsakEndepunkter = new RestApiConfigBuilder()
  .withGet('/fpsak/api/init-fetch', FagsakApiKeys.INIT_FETCH)
  .withGet('/fptilbake/api/init-fetch', FagsakApiKeys.INIT_FETCH_FPTILBAKE)

  // Generelle
  .withRel('kodeverk', FagsakApiKeys.KODEVERK)
  .withRel('tilbake-kodeverk', FagsakApiKeys.KODEVERK_FPTILBAKE)

  // Fagsak
  .withRel('fagsak-full', FagsakApiKeys.FETCH_FAGSAK)
  .withRel('tilbake-fagsak-full', FagsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE)
  .withRel('sak-dokumentliste', FagsakApiKeys.ALL_DOCUMENTS)
  .withRel('endre-utland-markering', FagsakApiKeys.ENDRE_SAK_MARKERING)
  .withRel('tilbake-kan-opprette-behandling', FagsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES)
  .withRel('tilbake-kan-opprette-revurdering', FagsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES)
  .withRel('lagre-notat', FagsakApiKeys.LAGRE_NOTAT)

  // Behandling
  .withRel('bekreft-totrinnsaksjonspunkt', FagsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT)
  .withRel('brev-bestill', FagsakApiKeys.SUBMIT_MESSAGE)

  .withPost('/fptilbake/api/brev/forhandsvis', FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING, { isResponseBlob: true })
  .withPost(
    '/fptilbake/api/dokument/forhandsvis-henleggelsesbrev',
    FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE,
    { isResponseBlob: true },
  )
  .withAsyncPost('/fptilbake/api/behandlinger/opprett', FagsakApiKeys.NEW_BEHANDLING_FPTILBAKE)
  .withAsyncPut('/fpsak/api/behandlinger', FagsakApiKeys.NEW_BEHANDLING_FPSAK)
  .withGet('/fpsak/api/aktoer-info', FagsakApiKeys.AKTOER_INFO)

  // FpFormidling
  .withPost('/fpformidling/api/brev/forhaandsvis', FagsakApiKeys.PREVIEW_MESSAGE_FORMIDLING, { isResponseBlob: true })

  // Kun brukt for søk på localhost
  .withPost('/fpsak/api/fagsak/sok', FagsakApiKeys.SEARCH_FAGSAK)

  .build();

export const requestFagsakApi = createRequestApi(fagsakEndepunkter);

export const restFagsakApiHooks = RestApiHooks.initHooks(requestFagsakApi);

export const usefagsakRestApi = <TYPE extends FagsakApiKeys>(key: TYPE, params?: ApiParamsAndResponse[TYPE][0]) =>
  restFagsakApiHooks.useRestApi<ApiParamsAndResponse[TYPE][1], ApiParamsAndResponse[TYPE][0]>(key, params);

const tesfsfdf = () => {
  const t = usefagsakRestApi(FagsakApiKeys.INIT_FETCH);

  return t;
};
