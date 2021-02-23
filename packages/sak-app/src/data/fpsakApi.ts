import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

export enum LinkCategory {
  INIT_DATA = 'INIT_DATA',
  FEATURE_TOGGLE = 'FEATURE_TOGGLE',
  FAGSAK = 'FAGSAK',
  BEHANDLING = 'BEHANDLING',
}

export enum FpsakApiKeys {
  INIT_FETCH = 'INIT_FETCH',
  INIT_FETCH_FPTILBAKE = 'INIT_FETCH_FPTILBAKE',
  KODEVERK = 'KODEVERK',
  KODEVERK_FPTILBAKE = 'KODEVERK_FPTILBAKE',
  LANGUAGE_FILE = 'LANGUAGE_FILE',
  NAV_ANSATT = 'NAV_ANSATT',
  BEHANDLENDE_ENHETER = 'BEHANDLENDE_ENHETER',
  FEATURE_TOGGLE = 'FEATURE_TOGGLE',
  SEARCH_FAGSAK = 'SEARCH_FAGSAK',
  FETCH_FAGSAK = 'FETCH_FAGSAK',
  SAK_PERSONER = 'SAK_PERSONER',
  BEHANDLINGER_FPSAK = 'BEHANDLINGER_FPSAK',
  BEHANDLINGER_FPTILBAKE = 'BEHANDLINGER_FPTILBAKE',
  NEW_BEHANDLING_FPSAK = 'NEW_BEHANDLING_FPSAK',
  NEW_BEHANDLING_FPTILBAKE = 'NEW_BEHANDLING_FPTILBAKE',
  BEHANDLING_FAMILIE_HENDELSE = 'BEHANDLING_FAMILIE_HENDELSE',
  ANNEN_PART_BEHANDLING = 'ANNEN_PART_BEHANDLING',
  HISTORY_FPSAK = 'HISTORY_FPSAK',
  HISTORY_FPTILBAKE = 'HISTORY_FPTILBAKE',
  KONTROLLRESULTAT = 'KONTROLLRESULTAT',
  RISIKO_AKSJONSPUNKT = 'RISIKO_AKSJONSPUNKT',
  TOTRINNS_KLAGE_VURDERING = 'TOTRINNS_KLAGE_VURDERING',
  TOTRINNSAKSJONSPUNKT_ARSAKER = 'TOTRINNSAKSJONSPUNKT_ARSAKER',
  TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY = 'TOTRINNSAKSJONSPUNKT_ARSAKER_READONLY',
  AKTOER_INFO = 'AKTOER_INFO',
  ALL_DOCUMENTS = 'ALL_DOCUMENTS',
  HAR_REVURDERING_SAMME_RESULTAT = 'HAR_REVURDERING_SAMME_RESULTAT',
  SAVE_TOTRINNSAKSJONSPUNKT = 'SAVE_TOTRINNSAKSJONSPUNKT',
  HAR_APENT_KONTROLLER_REVURDERING_AP = 'HAR_APENT_KONTROLLER_REVURDERING_AP',
  BREVMALER = 'BREVMALER',
  SUBMIT_MESSAGE = 'SUBMIT_MESSAGE',
  SAK_RETTIGHETER = 'SAK_RETTIGHETER',
  SAK_RETTIGHETER_FPTILBAKE = 'SAK_RETTIGHETER_FPTILBAKE',
  BEHANDLING_RETTIGHETER = 'BEHANDLING_RETTIGHETER',
  KAN_TILBAKEKREVING_OPPRETTES = 'KAN_TILBAKEKREVING_OPPRETTES',
  KAN_TILBAKEKREVING_REVURDERING_OPPRETTES = 'KAN_TILBAKEKREVING_REVURDERING_OPPRETTES',
  PREVIEW_MESSAGE_TILBAKEKREVING = 'PREVIEW_MESSAGE_TILBAKEKREVING',
  PREVIEW_MESSAGE_FORMIDLING = 'PREVIEW_MESSAGE_FORMIDLING',
  PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE = 'PREVIEW_MESSAGE_TILBAKEKREVING_HENLEGGELSE',
}

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
  .withRel('familiehendelse-v2', FpsakApiKeys.BEHANDLING_FAMILIE_HENDELSE)
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
