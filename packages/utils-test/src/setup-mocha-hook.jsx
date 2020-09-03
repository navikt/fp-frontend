import { requestApi } from '@fpsak-frontend/sak-app/src/data/fpsakApi';
import { requestAnkeApi } from '@fpsak-frontend/behandling-anke/src/data/ankeBehandlingApiNew';

afterEach(() => {
  requestApi.clearAllMockData();
  requestAnkeApi.clearAllMockData();
});
