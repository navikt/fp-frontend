import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, AnkeVurdering, Behandling, Kodeverk, Vilkar,
} from '@fpsak-frontend/types';
import { SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const AnkeBehandlingApiKeys = {
  BEHANDLING_ANKE: new RestKey<Behandling, { behandlingId: number }>('BEHANDLING_ANKE'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  ANKE_VURDERING: new RestKey<AnkeVurdering, void>('ANKE_VURDERING'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void,
    { behandlingId: number, enhetNavn: string, enhetId: string, begrunnelse: string, behandlingVersjon: string }>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingId: number, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingId: number, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingId: number, behandlingVersjon: number, frist: string, ventearsak: Kodeverk }>('BEHANDLING_ON_HOLD'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, any>('PREVIEW_MESSAGE'),
  SAVE_ANKE_VURDERING: new RestKey<AnkeVurdering, void>('SAVE_ANKE_VURDERING'),
};

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
