import { RequestApi } from '@navikt/fp-rest-api';
import { Behandling } from '@navikt/fp-types';

import ProsessPanelMenyData from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
};

type ProsessPanelInitProps = {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  requestApi: RequestApi;
};

export default ProsessPanelInitProps;
