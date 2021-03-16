import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

export enum InnsynBehandlingApiKeys {
  BEHANDLING_INNSYN = 'BEHANDLING_INNSYN',
  AKSJONSPUNKTER = 'AKSJONSPUNKTER',
  INNSYN = 'INNSYN',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
  PREVIEW_MESSAGE = 'PREVIEW_MESSAGE',
  INNSYN_DOKUMENTER = 'INNSYN_DOKUMENTER',
}

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', InnsynBehandlingApiKeys.BEHANDLING_INNSYN)

  // behandlingsdata
  .withRel('aksjonspunkter', InnsynBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('innsyn', InnsynBehandlingApiKeys.INNSYN)
  .withRel('dokumenter', InnsynBehandlingApiKeys.INNSYN_DOKUMENTER)

  // operasjoner
  .withRel('bytt-behandlende-enhet', InnsynBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', InnsynBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', InnsynBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', InnsynBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', InnsynBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('lagre-aksjonspunkter', InnsynBehandlingApiKeys.SAVE_AKSJONSPUNKT)

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', InnsynBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })
  .build();

export const requestInnsynApi = createRequestApi(endpoints);

export const restApiInnsynHooks = RestApiHooks.initHooks(requestInnsynApi);
