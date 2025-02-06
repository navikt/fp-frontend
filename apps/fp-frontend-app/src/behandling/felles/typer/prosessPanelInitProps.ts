import type { ProsessPanelMenyData } from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  allMenyData: ProsessPanelMenyData[];
};

export type ProsessPanelInitProps = {
  valgtProsessSteg?: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
};
