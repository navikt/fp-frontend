import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { Aksjonspunkt, Behandling, Kodeverk } from '@fpsak-frontend/types';
import { SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const PapirsoknadApiKeys = {
  BEHANDLING_PAPIRSOKNAD: new RestKey<Behandling, { behandlingId: number }>('BEHANDLING_PAPIRSOKNAD'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void,
    { behandlingId: number, enhetNavn: string, enhetId: string, begrunnelse: string, behandlingVersjon: string }>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingId: number, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingId: number, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingId: number, behandlingVersjon: number, frist: string, ventearsak: Kodeverk }>('BEHANDLING_ON_HOLD'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
};

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
