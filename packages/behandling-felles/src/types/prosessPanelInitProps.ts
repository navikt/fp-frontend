import { Behandling } from '@fpsak-frontend/types';

import ProsessPanelMenyData from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  allMenyData: ProsessPanelMenyData[];
}

type ProsessPanelInitProps = {
  behandling: Behandling;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}

export default ProsessPanelInitProps;
