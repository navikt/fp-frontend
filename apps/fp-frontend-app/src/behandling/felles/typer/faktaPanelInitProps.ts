import { Behandling } from '@navikt/fp-types';

import { FaktaPanelMenyData } from './faktaPanelMenyData';

export type FaktaPanelInitProps = {
  valgtFaktaSteg?: string;
  behandling: Behandling;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
};
