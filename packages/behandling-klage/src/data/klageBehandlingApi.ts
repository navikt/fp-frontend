import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

// eslint-disable-next-line no-shadow
export enum KlageBehandlingApiKeys {
  BEHANDLING_KLAGE = 'BEHANDLING_KLAGE',
  AKSJONSPUNKTER = 'AKSJONSPUNKTER',
  VILKAR = 'VILKAR',
  KLAGE_VURDERING = 'KLAGE_VURDERING',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
  PREVIEW_MESSAGE = 'PREVIEW_MESSAGE',
  SAVE_KLAGE_VURDERING = 'SAVE_KLAGE_VURDERING',
}

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', KlageBehandlingApiKeys.BEHANDLING_KLAGE)

  // behandlingsdata
  .withRel('aksjonspunkter', KlageBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', KlageBehandlingApiKeys.VILKAR)
  .withRel('klage-vurdering', KlageBehandlingApiKeys.KLAGE_VURDERING)

  // operasjoner
  .withRel('bytt-behandlende-enhet', KlageBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', KlageBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', KlageBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', KlageBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', KlageBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('lagre-aksjonspunkter', KlageBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('mellomlagre-klage', KlageBehandlingApiKeys.SAVE_KLAGE_VURDERING)

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', KlageBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })
  .build();

export const requestKlageApi = createRequestApi(endpoints);

export const restApiKlageHooks = RestApiHooks.initHooks(requestKlageApi);
