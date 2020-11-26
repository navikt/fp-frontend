import { RestApiConfigBuilder, createRequestApi } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

export enum PapirsoknadApiKeys {
  BEHANDLING_PAPIRSOKNAD = 'BEHANDLING_PAPIRSOKNAD',
  AKSJONSPUNKTER = 'AKSJONSPUNKTER',
  BEHANDLING_NY_BEHANDLENDE_ENHET = 'BEHANDLING_NY_BEHANDLENDE_ENHET',
  HENLEGG_BEHANDLING = 'HENLEGG_BEHANDLING',
  RESUME_BEHANDLING = 'RESUME_BEHANDLING',
  BEHANDLING_ON_HOLD = 'BEHANDLING_ON_HOLD',
  UPDATE_ON_HOLD = 'UPDATE_ON_HOLD',
  SAVE_AKSJONSPUNKT = 'SAVE_AKSJONSPUNKT',
}

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', PapirsoknadApiKeys.BEHANDLING_PAPIRSOKNAD)

  // behandlingsdata
  .withRel('aksjonspunkter', PapirsoknadApiKeys.AKSJONSPUNKTER)

  // operasjoner
  .withRel('bytt-behandlende-enhet', PapirsoknadApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', PapirsoknadApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', PapirsoknadApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', PapirsoknadApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', PapirsoknadApiKeys.UPDATE_ON_HOLD)
  .withRel('lagre-aksjonspunkter', PapirsoknadApiKeys.SAVE_AKSJONSPUNKT)

  .build();

export const requestPapirsoknadApi = createRequestApi(endpoints);

export const restApiPapirsoknadHooks = RestApiHooks.initHooks(requestPapirsoknadApi);
