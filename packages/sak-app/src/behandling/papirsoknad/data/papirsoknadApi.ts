import { RestApiHooks } from '@fpsak-frontend/rest-api-hooks';
import { createRequestApi } from '@fpsak-frontend/rest-api';
import { behandlingFellesEndepunkter } from '../../felles/data/behandlingFellesApi';

export const requestPapirsoknadApi = createRequestApi(behandlingFellesEndepunkter);

export const restApiPapirsoknadHooks = RestApiHooks.initHooks(requestPapirsoknadApi);
