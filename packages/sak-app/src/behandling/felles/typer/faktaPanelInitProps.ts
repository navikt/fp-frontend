import { RequestApi } from '@fpsak-frontend/rest-api';

import FaktaPanelMenyData from './faktaPanelMenyData';

type FaktaPanelInitProps = {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  requestApi: RequestApi;
}

export default FaktaPanelInitProps;
