import { RestApiHooks } from '@navikt/fp-rest-api-hooks';
import { createRequestApi } from '@navikt/fp-rest-api';
import { behandlingFellesEndepunkter } from '../../felles/data/behandlingFellesApi';

export const requestPapirsoknadApi = createRequestApi(behandlingFellesEndepunkter);

export const restApiPapirsoknadHooks = RestApiHooks.initHooks(requestPapirsoknadApi);
