import { Behandling } from '@navikt/ft-types';
import { RequestApi } from '@fpsak-frontend/rest-api';

import ProsessPanelMenyData from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  allMenyData: ProsessPanelMenyData[];
}

type ProsessPanelInitProps = {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
  requestApi: RequestApi;
}

export default ProsessPanelInitProps;
