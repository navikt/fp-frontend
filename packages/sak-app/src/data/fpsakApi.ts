import {
  Aksjonspunkt, Aktor, AlleKodeverk, AlleKodeverkTilbakekreving, Behandling, Dokument, Risikoklassifisering,
} from '@navikt/ft-types';

import {
  RestApiConfigBuilder, createRequestApi, RestKey, Link,
} from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  ForhåndsvisMeldingParams, NavAnsatt, TotrinnskontrollSkjermlenkeContext, FagsakEnkel, Fagsak, FagsakDataFpTilbake,
} from '@fpsak-frontend/types';

import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';

type BehandlendeEnheter = {
  enhetId: string;
  enhetNavn: string;
}[];

type Brevmal = {
  kode: string;
  navn: string;
  tilgjengelig: boolean;
}

type SubmitMessageParams = {
  behandlingUuid?: string,
  brevmalkode: string;
  fritekst: string;
  arsakskode?: string;
};

type InitLinks = {
  links: Link[];
  toggleLinks: Link[];
  sakLinks: Link[];
};

export enum LinkCategory {
  INIT_DATA = 'INIT_DATA',
  FAGSAK = 'FAGSAK',
  BEHANDLING = 'BEHANDLING',
}

export const FpsakApiKeys = {
  INIT_FETCH: new RestKey<InitLinks, void>('INIT_FETCH'),
  INIT_FETCH_FPTILBAKE: new RestKey<InitLinks, void>('INIT_FETCH_FPTILBAKE'),
  KODEVERK: new RestKey<AlleKodeverk, void>('KODEVERK'),
  KODEVERK_FPTILBAKE: new RestKey<AlleKodeverkTilbakekreving, void>('KODEVERK_FPTILBAKE'),
  NAV_ANSATT: new RestKey<NavAnsatt, void>('NAV_ANSATT'),
  BEHANDLENDE_ENHETER: new RestKey<BehandlendeEnheter, void>('BEHANDLENDE_ENHETER'),
  SEARCH_FAGSAK: new RestKey<FagsakEnkel[], { searchString: string }>('SEARCH_FAGSAK'),
  FETCH_FAGSAK: new RestKey<Fagsak, { saksnummer: string }>('FETCH_FAGSAK'),
  FETCH_FAGSAKDATA_FPTILBAKE: new RestKey<FagsakDataFpTilbake, { saksnummer: string }>('FETCH_FAGSAKDATA_FPTILBAKE'),
  NEW_BEHANDLING_FPSAK: new RestKey<boolean, any>('NEW_BEHANDLING_FPSAK'),
  NEW_BEHANDLING_FPTILBAKE: new RestKey<boolean, any>('NEW_BEHANDLING_FPTILBAKE'),
  KONTROLLRESULTAT: new RestKey<Risikoklassifisering, void>('KONTROLLRESULTAT'),
  RISIKO_AKSJONSPUNKT: new RestKey<Aksjonspunkt, void>('RISIKO_AKSJONSPUNKT'),
  TOTRINNSAKSJONSPUNKT_ARSAKER: new RestKey<TotrinnskontrollSkjermlenkeContext[], void>('TOTRINNSAKSJONSPUNKT_ARSAKER'),
  TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY: new RestKey<TotrinnskontrollSkjermlenkeContext[], void>('TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY'),
  AKTOER_INFO: new RestKey<Aktor, { aktoerId: string }>('AKTOER_INFO'),
  ALL_DOCUMENTS: new RestKey<Dokument[], { saksnummer: string }>('ALL_DOCUMENTS'),
  HAR_REVURDERING_SAMME_RESULTAT: new RestKey<{ harRevurderingSammeResultat: boolean }, void>('HAR_REVURDERING_SAMME_RESULTAT'),
  SAVE_TOTRINNSAKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_TOTRINNSAKSJONSPUNKT'),
  HAR_APENT_KONTROLLER_REVURDERING_AP: new RestKey<boolean, void>('HAR_APENT_KONTROLLER_REVURDERING_AP'),
  BREVMALER: new RestKey<Brevmal[], void>('BREVMALER'),
  SUBMIT_MESSAGE: new RestKey<void, SubmitMessageParams>('SUBMIT_MESSAGE'),
  BEHANDLING_RETTIGHETER: new RestKey<BehandlingRettigheter, { uuid: string }>('BEHANDLING_RETTIGHETER'),
  KAN_TILBAKEKREVING_OPPRETTES: new RestKey<boolean, { saksnummer: string; uuid: string; }>('KAN_TILBAKEKREVING_OPPRETTES'),
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES: new RestKey<boolean, { uuid: string; }>('KAN_TILBAKEKREVING_REVURDERING_OPPRETTES'),
  PREVIEW_MESSAGE_TILBAKEKREVING: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING'),
  PREVIEW_MESSAGE_FORMIDLING: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE_FORMIDLING'),
  PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE'),
};

const endpoints = new RestApiConfigBuilder()
  .withGet('/fpsak/api/init-fetch', FpsakApiKeys.INIT_FETCH)
  .withGet('/fptilbake/api/init-fetch', FpsakApiKeys.INIT_FETCH_FPTILBAKE)

  // Generelle
  .withRel('nav-ansatt', FpsakApiKeys.NAV_ANSATT)
  .withRel('kodeverk', FpsakApiKeys.KODEVERK)
  .withRel('tilbake-kodeverk', FpsakApiKeys.KODEVERK_FPTILBAKE)
  .withRel('behandlende-enheter', FpsakApiKeys.BEHANDLENDE_ENHETER)

  // Fagsak
  .withRel('fagsak-full', FpsakApiKeys.FETCH_FAGSAK)
  .withRel('tilbake-fagsak-full', FpsakApiKeys.FETCH_FAGSAKDATA_FPTILBAKE)
  .withRel('sak-dokumentliste', FpsakApiKeys.ALL_DOCUMENTS)
  .withRel('tilbake-kan-opprette-behandling', FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES)
  .withRel('tilbake-kan-opprette-revurdering', FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES)

  // Behandling
  .withRel('kontrollresultat', FpsakApiKeys.KONTROLLRESULTAT)
  .withRel('risikoklassifisering-aksjonspunkt', FpsakApiKeys.RISIKO_AKSJONSPUNKT)
  .withRel('totrinnskontroll-arsaker', FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER)
  .withRel('totrinnskontroll-arsaker-readOnly', FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY)
  .withRel('har-samme-resultat', FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT)
  .withRel('bekreft-totrinnsaksjonspunkt', FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT)
  .withRel('har-apent-kontroller-revurdering-aksjonspunkt', FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP)
  .withRel('fpsak-brev-maler', FpsakApiKeys.BREVMALER)
  .withRel('brev-bestill', FpsakApiKeys.SUBMIT_MESSAGE)
  .withRel('behandling-rettigheter', FpsakApiKeys.BEHANDLING_RETTIGHETER)

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
