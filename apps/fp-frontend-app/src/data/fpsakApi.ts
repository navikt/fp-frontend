import {
  Aktor, AlleKodeverkTilbakekreving, Behandling, Dokument,
} from '@navikt/ft-types';

import {
  RestApiConfigBuilder, createRequestApi, RestKey, Link,
} from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import {
  ForhåndsvisMeldingParams, FagsakEnkel, Fagsak, FagsakDataFpTilbake, NavAnsatt, AlleKodeverk,
} from '@navikt/fp-types';

type BehandlendeEnheter = {
  enhetId: string;
  enhetNavn: string;
}[];

type SubmitMessageParams = {
  behandlingUuid?: string,
  brevmalkode: string;
  fritekst: string;
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

export const FpsakApiKeys = {
  INIT_FETCH: new RestKey<InitDataFpSak, void>('INIT_FETCH'),
  INIT_FETCH_FPTILBAKE: new RestKey<InitDataFpTilbake, void>('INIT_FETCH_FPTILBAKE'),
  KODEVERK: new RestKey<AlleKodeverk, void>('KODEVERK'),
  KODEVERK_FPTILBAKE: new RestKey<AlleKodeverkTilbakekreving, void>('KODEVERK_FPTILBAKE'),
  SEARCH_FAGSAK: new RestKey<FagsakEnkel[], { searchString: string }>('SEARCH_FAGSAK'),
  FETCH_FAGSAK: new RestKey<Fagsak, { saksnummer: string }>('FETCH_FAGSAK'),
  FETCH_FAGSAKDATA_FPTILBAKE: new RestKey<FagsakDataFpTilbake, { saksnummer: string }>('FETCH_FAGSAKDATA_FPTILBAKE'),
  NEW_BEHANDLING_FPSAK: new RestKey<boolean, any>('NEW_BEHANDLING_FPSAK'),
  NEW_BEHANDLING_FPTILBAKE: new RestKey<boolean, any>('NEW_BEHANDLING_FPTILBAKE'),
  AKTOER_INFO: new RestKey<Aktor, { aktoerId: string }>('AKTOER_INFO'),
  ALL_DOCUMENTS: new RestKey<Dokument[], { saksnummer: string }>('ALL_DOCUMENTS'),
  SAVE_TOTRINNSAKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_TOTRINNSAKSJONSPUNKT'),
  SUBMIT_MESSAGE: new RestKey<void, SubmitMessageParams>('SUBMIT_MESSAGE'),
  KAN_TILBAKEKREVING_OPPRETTES: new RestKey<boolean, { saksnummer: string; uuid: string; }>('KAN_TILBAKEKREVING_OPPRETTES'),
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES: new RestKey<boolean, { uuid: string; }>('KAN_TILBAKEKREVING_REVURDERING_OPPRETTES'),
  PREVIEW_MESSAGE_TILBAKEKREVING: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING'),
  PREVIEW_MESSAGE_FORMIDLING: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE_FORMIDLING'),
  PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE'),
  ENDRE_SAK_MARKERING: new RestKey<void, { saksnummer: string, fagsakMarkering: string }>('ENDRE_SAK_MARKERING'),
};

const endpoints = new RestApiConfigBuilder()
  .withGet('/fpsak/api/init-fetch', FpsakApiKeys.INIT_FETCH)
  .withGet('/fptilbake/api/init-fetch', FpsakApiKeys.INIT_FETCH_FPTILBAKE)

  // Generelle
  .withRel('kodeverk', FpsakApiKeys.KODEVERK)
  .withRel('tilbake-kodeverk', FpsakApiKeys.KODEVERK_FPTILBAKE)

  // Fagsak
  .withRel('fagsak-full', FpsakApiKeys.FETCH_FAGSAK)
  .withRel('tilbake-fagsak-full', FpsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE)
  .withRel('sak-dokumentliste', FpsakApiKeys.ALL_DOCUMENTS)
  .withRel('endre-utland-markering', FpsakApiKeys.ENDRE_SAK_MARKERING)
  .withRel('tilbake-kan-opprette-behandling', FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES)
  .withRel('tilbake-kan-opprette-revurdering', FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES)

  // Behandling
  .withRel('bekreft-totrinnsaksjonspunkt', FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT)
  .withRel('brev-bestill', FpsakApiKeys.SUBMIT_MESSAGE)

  .withPost('/fptilbake/api/brev/forhandsvis', FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING, { isResponseBlob: true })
  .withPost('/fptilbake/api/dokument/forhandsvis-henleggelsesbrev', FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE, { isResponseBlob: true })
  .withAsyncPost('/fptilbake/api/behandlinger/opprett', FpsakApiKeys.NEW_BEHANDLING_FPTILBAKE)
  .withAsyncPut('/fpsak/api/behandlinger', FpsakApiKeys.NEW_BEHANDLING_FPSAK)
  .withGet('/fpsak/api/aktoer-info', FpsakApiKeys.AKTOER_INFO)

  // FpFormidling
  .withPost('/fpformidling/api/brev/forhaandsvis', FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING, { isResponseBlob: true })

  // Kun brukt for søk på localhost
  .withPost('/fpsak/api/fagsak/sok', FpsakApiKeys.SEARCH_FAGSAK)

  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
