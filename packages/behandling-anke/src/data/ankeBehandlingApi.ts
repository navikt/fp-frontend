import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

export enum AnkeBehandlingApiKeys {
  BEHANDLING_ANKE = 'BEHANDLING_ANKE',
  AKSJONSPUNKTER = 'AKSJONSPUNKTER',
  VILKAR = 'VILKAR',
  ANKE_VURDERING = 'ANKE_VURDERING',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
  PREVIEW_MESSAGE = 'PREVIEW_MESSAGE',
  SAVE_ANKE_VURDERING = 'SAVE_ANKE_VURDERING',
}

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', AnkeBehandlingApiKeys.BEHANDLING_ANKE)

  // behandlingsdata
  .withRel('aksjonspunkter', AnkeBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', AnkeBehandlingApiKeys.VILKAR)
  .withRel('anke-vurdering', AnkeBehandlingApiKeys.ANKE_VURDERING)

  // operasjoner
  .withRel('bytt-behandlende-enhet', AnkeBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', AnkeBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', AnkeBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', AnkeBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', AnkeBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('lagre-aksjonspunkter', AnkeBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('mellomlagre-anke', AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING)

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', AnkeBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();

export const requestAnkeApi = createRequestApi(endpoints);

export const restApiAnkeHooks = RestApiHooks.initHooks(requestAnkeApi);
