import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { SettPaVentParams } from '@fpsak-frontend/behandling-felles';
import {
  Aksjonspunkt, Behandling, KlageVurdering, Kodeverk, Vilkar,
} from '@fpsak-frontend/types';

export const KlageBehandlingApiKeys = {
  BEHANDLING_KLAGE: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_KLAGE'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  KLAGE_VURDERING: new RestKey<KlageVurdering[], void>('KLAGE_VURDERING'),
  SAVE_KLAGE_VURDERING: new RestKey<any, any>('SAVE_KLAGE_VURDERING'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void,
    { behandlingUuid: string, enhetNavn: string, enhetId: string, begrunnelse: string, behandlingVersjon: string }>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: Kodeverk }>('BEHANDLING_ON_HOLD'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, any>('PREVIEW_MESSAGE'),
};

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
