import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, Behandling, Dokument, Innsyn,
} from '@fpsak-frontend/types';
import { SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const InnsynBehandlingApiKeys = {
  BEHANDLING_INNSYN: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_INNSYN'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  INNSYN: new RestKey<Innsyn, void>('INNSYN'),
  INNSYN_DOKUMENTER: new RestKey<Dokument[], void>('INNSYN_DOKUMENTER'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void,
    { behandlingUuid: string, enhetNavn: string, enhetId: string, begrunnelse: string, behandlingVersjon: string }>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>('BEHANDLING_ON_HOLD'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, any>('PREVIEW_MESSAGE'),
};

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
