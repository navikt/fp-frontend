import { RestApiConfigBuilder, createRequestApi, RestKey } from '@navikt/fp-rest-api';
import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { AnkeVurdering } from '@navikt/fp-types';

import { behandlingFellesEndepunkter } from '../../felles/data/behandlingFellesApi';

export const AnkeBehandlingApiKeys = {
  ANKE_VURDERING: new RestKey<AnkeVurdering, void>('ANKE_VURDERING'),
};

const endepunkter = new RestApiConfigBuilder()
  // behandlingsdata
  .withRel('anke-vurdering', AnkeBehandlingApiKeys.ANKE_VURDERING)

  .build();

const alleEndepunkter = endepunkter.concat(behandlingFellesEndepunkter);

export const requestAnkeApi = createRequestApi(alleEndepunkter);

export const restApiAnkeHooks = RestApiHooks.initHooks(requestAnkeApi);
