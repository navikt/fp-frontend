import { RequestApi } from '@navikt/fp-rest-api';
import { Behandling } from '@navikt/fp-types';

import FaktaPanelMenyData from './faktaPanelMenyData';

type FaktaPanelInitProps = {
  valgtFaktaSteg?: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  requestApi: RequestApi;
};

export default FaktaPanelInitProps;
