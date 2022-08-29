import { RestApiConfigBuilder, createRequestApi, RestKey } from '@fpsak-frontend/rest-api';
import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';

import { BeregningsresultatEs } from '@fpsak-frontend/types';

import { behandlingFellesEndepunkter } from '../../../felles/data/behandlingFellesApi';

export const EsBehandlingApiKeys = {
  BEREGNINGRESULTAT_ENGANGSSTONAD: new RestKey<BeregningsresultatEs, void>('BEREGNINGRESULTAT_ENGANGSSTONAD'),
  BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING: new RestKey<{'beregningsresultat-engangsstonad'?: BeregningsresultatEs; },
  void>('BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING'),
};

const endepunkter = new RestApiConfigBuilder()
  // behandlingsdata
  .withRel('beregningsresultat-engangsstonad', EsBehandlingApiKeys.BEREGNINGRESULTAT_ENGANGSSTONAD)
  .withRel('beregningsresultat-engangsstonad-original-behandling', EsBehandlingApiKeys.BEREGNINGSRESULTAT_ORIGINAL_BEHANDLING)

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestEsApi = createRequestApi(alleEndepunkter);

export const restApiEsHooks = RestApiHooks.initHooks(requestEsApi);
