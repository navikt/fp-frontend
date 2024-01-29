import { Aktor, Dokument } from '@navikt/ft-types';

import { RestApiConfigBuilder, createRequestApi, RestKey, Link } from '@navikt/fp-rest-api';
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
  InfotrygdVedtak,
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

export const FagsakApiKeys = {
  INIT_FETCH: new RestKey<InitDataFpSak, void>('INIT_FETCH'),
  INIT_FETCH_FPTILBAKE: new RestKey<InitDataFpTilbake, void>('INIT_FETCH_FPTILBAKE'),
  KODEVERK: new RestKey<AlleKodeverk, void>('KODEVERK'),
  KODEVERK_FPTILBAKE: new RestKey<AlleKodeverkTilbakekreving, void>('KODEVERK_FPTILBAKE'),
  SEARCH_UTBETALINGSDATA_IS15: new RestKey<InfotrygdVedtak, { searchString: string }>('SEARCH_UTBETALINGSDATA_IS15'),
  SEARCH_FAGSAK: new RestKey<FagsakEnkel[], { searchString: string }>('SEARCH_FAGSAK'),
  FETCH_FAGSAK: new RestKey<Fagsak, { saksnummer: string }>('FETCH_FAGSAK'),
  FETCH_FAGSAKDATA_FPTILBAKE: new RestKey<FagsakDataFpTilbake, { saksnummer: string }>('FETCH_FAGSAKDATA_FPTILBAKE'),
  NEW_BEHANDLING_FPSAK: new RestKey<Behandling, any>('NEW_BEHANDLING_FPSAK'),
  NEW_BEHANDLING_FPTILBAKE: new RestKey<Behandling, any>('NEW_BEHANDLING_FPTILBAKE'),
  AKTOER_INFO: new RestKey<Aktor, { aktoerId: string }>('AKTOER_INFO'),
  ALL_DOCUMENTS: new RestKey<Dokument[], { saksnummer: string }>('ALL_DOCUMENTS'),
  SAVE_TOTRINNSAKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_TOTRINNSAKSJONSPUNKT'),
  SUBMIT_MESSAGE: new RestKey<void, SubmitMessageParams>('SUBMIT_MESSAGE'),
  PREVIEW_MESSAGE_MENU: new RestKey<void, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE_MENU'),
  LAGRE_NOTAT: new RestKey<void, { saksnummer: string; notat: string }>('LAGRE_NOTAT'),
  KAN_TILBAKEKREVING_OPPRETTES: new RestKey<boolean, { saksnummer: string; uuid: string }>(
    'KAN_TILBAKEKREVING_OPPRETTES',
  ),
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES: new RestKey<boolean, { uuid: string }>(
    'KAN_TILBAKEKREVING_REVURDERING_OPPRETTES',
  ),
  PREVIEW_MESSAGE_TILBAKEKREVING: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING'),
  PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE'),
  ENDRE_SAK_MARKERING: new RestKey<void, { saksnummer: string; fagsakMarkering: string }>('ENDRE_SAK_MARKERING'),
};

const fagsakEndepunkter = new RestApiConfigBuilder()
  .withGet('/fpsak/api/init-fetch', FagsakApiKeys.INIT_FETCH)
  .withGet('/fptilbake/api/init-fetch', FagsakApiKeys.INIT_FETCH_FPTILBAKE)

  // Generelle
  .withRel('kodeverk', FagsakApiKeys.KODEVERK)
  .withRel('tilbake-kodeverk', FagsakApiKeys.KODEVERK_FPTILBAKE)
  .withRel('infotrygd-søk', FagsakApiKeys.SEARCH_UTBETALINGSDATA_IS15)

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
  .withRel('brev-vis', FagsakApiKeys.PREVIEW_MESSAGE_MENU, { isResponseBlob: true })

  .withPost('/fptilbake/api/brev/forhandsvis', FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING, { isResponseBlob: true })
  .withPost(
    '/fptilbake/api/dokument/forhandsvis-henleggelsesbrev',
    FagsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE,
    { isResponseBlob: true },
  )
  .withAsyncPost('/fptilbake/api/behandlinger/opprett', FagsakApiKeys.NEW_BEHANDLING_FPTILBAKE)
  .withAsyncPut('/fpsak/api/behandlinger', FagsakApiKeys.NEW_BEHANDLING_FPSAK)
  .withGet('/fpsak/api/aktoer-info', FagsakApiKeys.AKTOER_INFO)

  // Kun brukt for søk på localhost
  .withPost('/fpsak/api/fagsak/sok', FagsakApiKeys.SEARCH_FAGSAK)

  .build();

export const requestFagsakApi = createRequestApi(fagsakEndepunkter);

export const restFagsakApiHooks = RestApiHooks.initHooks(requestFagsakApi);
