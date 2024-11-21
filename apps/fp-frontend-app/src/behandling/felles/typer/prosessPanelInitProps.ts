import { Behandling } from '@navikt/fp-types';

import { ProsessPanelMenyData } from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
};

export type ProsessPanelInitProps = {
  behandling: Behandling;
  valgtProsessSteg?: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
};
