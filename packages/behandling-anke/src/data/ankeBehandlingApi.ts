import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import {
  Aksjonspunkt, AnkeVurdering, Behandling, ForhåndsvisMeldingParams, Vilkar, Verge,
} from '@fpsak-frontend/types';
import { SettPaVentParams } from '@fpsak-frontend/behandling-felles';

export const AnkeBehandlingApiKeys = {
  BEHANDLING_ANKE: new RestKey<Behandling, { behandlingUuid: string }>('BEHANDLING_ANKE'),
  AKSJONSPUNKTER: new RestKey<Aksjonspunkt[], void>('AKSJONSPUNKTER'),
  VILKAR: new RestKey<Vilkar[], void>('VILKAR'),
  ANKE_VURDERING: new RestKey<AnkeVurdering, void>('ANKE_VURDERING'),
  VERGE: new RestKey<Verge, void>('VERGE'),
  BEHANDLING_NY_BEHANDLENDE_ENHET: new RestKey<void,
    { behandlingUuid: string, enhetNavn: string, enhetId: string, begrunnelse: string, behandlingVersjon: string }>('BEHANDLING_NY_BEHANDLENDE_ENHET'),
  HENLEGG_BEHANDLING: new RestKey<void, { behandlingUuid: string, årsakKode: string, begrunnelse: string, behandlingVersjon: string }>('HENLEGG_BEHANDLING'),
  RESUME_BEHANDLING: new RestKey<Behandling, { behandlingUuid: string, behandlingVersjon: number }>('RESUME_BEHANDLING'),
  BEHANDLING_ON_HOLD: new RestKey<void, { behandlingUuid: string, behandlingVersjon: number, frist: string, ventearsak: string }>('BEHANDLING_ON_HOLD'),
  UPDATE_ON_HOLD: new RestKey<void, SettPaVentParams>('UPDATE_ON_HOLD'),
  SAVE_AKSJONSPUNKT: new RestKey<Behandling, any>('SAVE_AKSJONSPUNKT'),
  PREVIEW_MESSAGE: new RestKey<any, ForhåndsvisMeldingParams>('PREVIEW_MESSAGE'),
  SAVE_ANKE_VURDERING: new RestKey<AnkeVurdering, void>('SAVE_ANKE_VURDERING'),
  VERGE_OPPRETT: new RestKey<Behandling, any>('VERGE_OPPRETT'),
  VERGE_FJERN: new RestKey<Behandling, any>('VERGE_FJERN'),
};

const endpoints = new RestApiConfigBuilder()
  .withAsyncPost('/fpsak/api/behandlinger', AnkeBehandlingApiKeys.BEHANDLING_ANKE)

  // behandlingsdata
  .withRel('aksjonspunkter', AnkeBehandlingApiKeys.AKSJONSPUNKTER)
  .withRel('vilkar', AnkeBehandlingApiKeys.VILKAR)
  .withRel('anke-vurdering', AnkeBehandlingApiKeys.ANKE_VURDERING)
  .withRel('soeker-verge', AnkeBehandlingApiKeys.VERGE)

  // operasjoner
  .withRel('bytt-behandlende-enhet', AnkeBehandlingApiKeys.BEHANDLING_NY_BEHANDLENDE_ENHET)
  .withRel('henlegg-behandling', AnkeBehandlingApiKeys.HENLEGG_BEHANDLING)
  .withRel('gjenoppta-behandling', AnkeBehandlingApiKeys.RESUME_BEHANDLING)
  .withRel('sett-behandling-pa-vent', AnkeBehandlingApiKeys.BEHANDLING_ON_HOLD)
  .withRel('endre-pa-vent', AnkeBehandlingApiKeys.UPDATE_ON_HOLD)
  .withRel('lagre-aksjonspunkter', AnkeBehandlingApiKeys.SAVE_AKSJONSPUNKT)
  .withRel('mellomlagre-anke', AnkeBehandlingApiKeys.SAVE_ANKE_VURDERING)
  .withRel('opprett-verge', AnkeBehandlingApiKeys.VERGE_OPPRETT)
  .withRel('fjern-verge', AnkeBehandlingApiKeys.VERGE_FJERN)

  /* FPFORMIDLING */
  .withPost('/fpformidling/api/brev/forhaandsvis', AnkeBehandlingApiKeys.PREVIEW_MESSAGE, { isResponseBlob: true })

  .build();

export const requestAnkeApi = createRequestApi(endpoints);

export const restApiAnkeHooks = RestApiHooks.initHooks(requestAnkeApi);
