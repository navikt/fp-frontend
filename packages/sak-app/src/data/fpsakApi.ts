import {
  RestApiConfigBuilder, createRequestApi, RestKey, Link,
} from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Aktor, Behandling, BehandlingAppKontekst, Dokument, Fagsak, FagsakPersoner, Historikkinnslag,
  KlageVurdering, KodeverkMedNavn, NavAnsatt, Risikoklassifisering, TotrinnskontrollSkjermlenkeContext,
} from '@fpsak-frontend/types';
import BehandlingRettigheter from '../behandling/behandlingRettigheterTsType';
import SakRettigheter from '../fagsak/sakRettigheterTsType';

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
  behandlingId?: number;
  behandlingUuid?: string,
  mottaker?: string;
  brevmalkode: string;
  fritekst: string;
  arsakskode?: string;
};

export type AnnenPartBehandling = {
  saksnr: {
    verdi: string;
  };
  behandlingId: number;
};

type InitLinks = {
  links: Link[];
  toggleLinks: Link[];
  sakLinks: Link[];
};

export enum LinkCategory {
  INIT_DATA = 'INIT_DATA',
  FEATURE_TOGGLE = 'FEATURE_TOGGLE',
  FAGSAK = 'FAGSAK',
  BEHANDLING = 'BEHANDLING',
}

export const FpsakApiKeys = {
  INIT_FETCH: new RestKey<InitLinks, void>('INIT_FETCH'),
  INIT_FETCH_FPTILBAKE: new RestKey<InitLinks, void>('INIT_FETCH_FPTILBAKE'),
  KODEVERK: new RestKey<{[key: string]: KodeverkMedNavn[]}, void>('KODEVERK'),
  KODEVERK_FPTILBAKE: new RestKey<{[key: string]: KodeverkMedNavn[]}, void>('KODEVERK_FPTILBAKE'),
  LANGUAGE_FILE: new RestKey<Record<string, string>, void>('LANGUAGE_FILE'),
  NAV_ANSATT: new RestKey<NavAnsatt, void>('NAV_ANSATT'),
  BEHANDLENDE_ENHETER: new RestKey<BehandlendeEnheter, void>('BEHANDLENDE_ENHETER'),
  FEATURE_TOGGLE: new RestKey<{ featureToggles: {[key: string]: boolean} }, { toggles: { navn: string }[]}>('FEATURE_TOGGLE'),
  SEARCH_FAGSAK: new RestKey<Fagsak[], { searchString: string }>('SEARCH_FAGSAK'),
  FETCH_FAGSAK: new RestKey<Fagsak, { saksnummer: string }>('FETCH_FAGSAK'),
  SAK_PERSONER: new RestKey<FagsakPersoner, { saksnummer: string }>('SAK_PERSONER'),
  BEHANDLINGER_FPSAK: new RestKey<BehandlingAppKontekst[], { saksnummer: string }>('BEHANDLINGER_FPSAK'),
  BEHANDLINGER_FPTILBAKE: new RestKey<BehandlingAppKontekst[], { saksnummer: string }>('BEHANDLINGER_FPTILBAKE'),
  NEW_BEHANDLING_FPSAK: new RestKey<boolean, any>('NEW_BEHANDLING_FPSAK'),
  NEW_BEHANDLING_FPTILBAKE: new RestKey<boolean, any>('NEW_BEHANDLING_FPTILBAKE'),
  ANNEN_PART_BEHANDLING: new RestKey<AnnenPartBehandling, { saksnummer: string }>('ANNEN_PART_BEHANDLING'),
  HISTORY_FPSAK: new RestKey<Historikkinnslag[], { saksnummer: string }>('HISTORY_FPSAK'),
  HISTORY_FPTILBAKE: new RestKey<Historikkinnslag[], { saksnummer: string }>('HISTORY_FPTILBAKE'),
  KONTROLLRESULTAT: new RestKey<Risikoklassifisering, void>('KONTROLLRESULTAT'),
  RISIKO_AKSJONSPUNKT: new RestKey<Aksjonspunkt, any>('RISIKO_AKSJONSPUNKT'),
  TOTRINNS_KLAGE_VURDERING: new RestKey<KlageVurdering, void>('TOTRINNS_KLAGE_VURDERING'),
  TOTRINNSAKSJONSPUNKT_ARSAKER: new RestKey<TotrinnskontrollSkjermlenkeContext[], void>('TOTRINNSAKSJONSPUNKT_ARSAKER'),
  TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY: new RestKey<TotrinnskontrollSkjermlenkeContext[], void>('TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY'),
  AKTOER_INFO: new RestKey<Aktor, { aktoerId: string }>('AKTOER_INFO'),
  ALL_DOCUMENTS: new RestKey<Dokument[], { saksnummer: string }>('ALL_DOCUMENTS'),
  HAR_REVURDERING_SAMME_RESULTAT: new RestKey<{ harRevurderingSammeResultat: boolean }, void>('HAR_REVURDERING_SAMME_RESULTAT'),
  SAVE_TOTRINNSAKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_TOTRINNSAKSJONSPUNKT'),
  HAR_APENT_KONTROLLER_REVURDERING_AP: new RestKey<boolean, void>('HAR_APENT_KONTROLLER_REVURDERING_AP'),
  BREVMALER: new RestKey<Brevmal[], void>('BREVMALER'),
  SUBMIT_MESSAGE: new RestKey<void, SubmitMessageParams>('SUBMIT_MESSAGE'),
  SAK_RETTIGHETER: new RestKey<SakRettigheter, { saksnummer: string }>('SAK_RETTIGHETER'),
  SAK_RETTIGHETER_FPTILBAKE: new RestKey<SakRettigheter, { saksnummer: string }>('SAK_RETTIGHETER_FPTILBAKE'),
  BEHANDLING_RETTIGHETER: new RestKey<BehandlingRettigheter, { uuid: string }>('BEHANDLING_RETTIGHETER'),
  KAN_TILBAKEKREVING_OPPRETTES: new RestKey<boolean, { saksnummer: string; uuid: string; }>('KAN_TILBAKEKREVING_OPPRETTES'),
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES: new RestKey<boolean, { uuid: string; }>('KAN_TILBAKEKREVING_REVURDERING_OPPRETTES'),
  PREVIEW_MESSAGE_TILBAKEKREVING: new RestKey<any, any>('PREVIEW_MESSAGE_TILBAKEKREVING'),
  PREVIEW_MESSAGE_FORMIDLING: new RestKey<any, any>('PREVIEW_MESSAGE_FORMIDLING'),
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

  // Feature toggles
  .withRel('feature-toggle', FpsakApiKeys.FEATURE_TOGGLE)

  // Fagsak
  .withRel('fagsak', FpsakApiKeys.FETCH_FAGSAK)
  .withRel('sak-personer', FpsakApiKeys.SAK_PERSONER)
  .withRel('sak-rettigheter', FpsakApiKeys.SAK_RETTIGHETER)
  .withRel('tilbake-sak-rettigheter', FpsakApiKeys.SAK_RETTIGHETER_FPTILBAKE)
  .withRel('sak-historikk', FpsakApiKeys.HISTORY_FPSAK)
  .withRel('tilbake-historikk', FpsakApiKeys.HISTORY_FPTILBAKE)
  .withRel('sak-dokumentliste', FpsakApiKeys.ALL_DOCUMENTS)
  .withRel('sak-alle-behandlinger', FpsakApiKeys.BEHANDLINGER_FPSAK)
  .withRel('tilbake-alle-behandlinger', FpsakApiKeys.BEHANDLINGER_FPTILBAKE)
  .withRel('sak-annen-part-behandling', FpsakApiKeys.ANNEN_PART_BEHANDLING)
  .withRel('tilbake-kan-opprette-behandling', FpsakApiKeys.KAN_TILBAKEKREVING_OPPRETTES)
  .withRel('tilbake-kan-opprette-revurdering', FpsakApiKeys.KAN_TILBAKEKREVING_REVURDERING_OPPRETTES)

  // Behandling
  .withRel('kontrollresultat', FpsakApiKeys.KONTROLLRESULTAT)
  .withRel('risikoklassifisering-aksjonspunkt', FpsakApiKeys.RISIKO_AKSJONSPUNKT)
  .withRel('klage-vurdering', FpsakApiKeys.TOTRINNS_KLAGE_VURDERING)
  .withRel('totrinnskontroll-arsaker', FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER)
  .withRel('totrinnskontroll-arsaker-readOnly', FpsakApiKeys.TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY)
  .withRel('har-samme-resultat', FpsakApiKeys.HAR_REVURDERING_SAMME_RESULTAT)
  .withRel('bekreft-totrinnsaksjonspunkt', FpsakApiKeys.SAVE_TOTRINNSAKSJONSPUNKT)
  .withRel('har-apent-kontroller-revurdering-aksjonspunkt', FpsakApiKeys.HAR_APENT_KONTROLLER_REVURDERING_AP)
  .withRel('brev-maler', FpsakApiKeys.BREVMALER)
  .withRel('brev-bestill', FpsakApiKeys.SUBMIT_MESSAGE)
  .withRel('behandling-rettigheter', FpsakApiKeys.BEHANDLING_RETTIGHETER)

  .withPost('/fptilbake/api/brev/forhandsvis', FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING, { isResponseBlob: true })
  .withPost('/fptilbake/api/dokument/forhandsvis-henleggelsesbrev', FpsakApiKeys.PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE, { isResponseBlob: true })
  .withAsyncPost('/fptilbake/api/behandlinger/opprett', FpsakApiKeys.NEW_BEHANDLING_FPTILBAKE)
  .withAsyncPut('/fpsak/api/behandlinger', FpsakApiKeys.NEW_BEHANDLING_FPSAK)
  .withGet('/fpsak/api/aktoer-info', FpsakApiKeys.AKTOER_INFO)

  // FpFormidling
  .withPost('/fpformidling/api/brev/forhaandsvis', FpsakApiKeys.PREVIEW_MESSAGE_FORMIDLING, { isResponseBlob: true })

  // Språkfil (ligg på klient - Skal fjernast - Det som ligg i denne skal flyttes til spesifikke pakker)
  .withGet('/fpsak/public/sprak/nb_NO.json', FpsakApiKeys.LANGUAGE_FILE)

  // Kun brukt for søk på localhost
  .withPost('/fpsak/api/fagsak/sok', FpsakApiKeys.SEARCH_FAGSAK)

  .build();

export const requestApi = createRequestApi(endpoints);

export const restApiHooks = RestApiHooks.initHooks(requestApi);
