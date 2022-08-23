import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { KlageVurdering } from '@fpsak-frontend/types';

import { behandlingFellesEndepunkter } from '../../felles/data/behandlingFellesApi';

export const KlageBehandlingApiKeys = {
  KLAGE_VURDERING: new RestKey<KlageVurdering[], void>('KLAGE_VURDERING'),
  SAVE_KLAGE_VURDERING: new RestKey<any, any>('SAVE_KLAGE_VURDERING'),
};

const endepunkter = new RestApiConfigBuilder()
  // behandlingsdata
  .withRel('klage-vurdering', KlageBehandlingApiKeys.KLAGE_VURDERING)

  // operasjoner
  .withRel('mellomlagre-klage', KlageBehandlingApiKeys.SAVE_KLAGE_VURDERING)

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestKlageApi = createRequestApi(alleEndepunkter);

export const restApiKlageHooks = RestApiHooks.initHooks(requestKlageApi);
