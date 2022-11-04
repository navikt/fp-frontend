import { RequestApi } from '@fpsak-frontend/rest-api';
import { Behandling } from '@fpsak-frontend/types';

import FaktaPanelMenyData from './faktaPanelMenyData';

type FaktaPanelInitProps = {
  valgtFaktaSteg: string;
  behandling?: Behandling;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  requestApi: RequestApi;
}

export default FaktaPanelInitProps;
