import { afterEach } from '@jest/globals';
import { requestApi } from '@fpsak-frontend/sak-app/src/data/fpsakApi';
import { requestAnkeApi } from '@fpsak-frontend/behandling-anke/src/data/ankeBehandlingApi';
import { requestEsApi } from '@fpsak-frontend/behandling-es/src/data/esBehandlingApi';
import { requestFpApi } from '@fpsak-frontend/behandling-fp/src/data/fpBehandlingApi';
import { requestInnsynApi } from '@fpsak-frontend/behandling-innsyn/src/data/innsynBehandlingApi';
import { requestKlageApi } from '@fpsak-frontend/behandling-klage/src/data/klageBehandlingApi';
import { requestPapirsoknadApi } from '@fpsak-frontend/behandling-papirsoknad/src/data/papirsoknadApi';
import { requestSvpApi } from '@fpsak-frontend/behandling-svp/src/data/svpBehandlingApi';
import { requestTilbakekrevingApi } from '@fpsak-frontend/behandling-tilbakekreving/src/data/tilbakekrevingBehandlingApi';

afterEach(() => {
  requestApi.clearAllMockData();
  requestAnkeApi.clearAllMockData();
  requestEsApi.clearAllMockData();
  requestFpApi.clearAllMockData();
  requestInnsynApi.clearAllMockData();
  requestKlageApi.clearAllMockData();
  requestPapirsoknadApi.clearAllMockData();
  requestSvpApi.clearAllMockData();
  requestTilbakekrevingApi.clearAllMockData();
});
