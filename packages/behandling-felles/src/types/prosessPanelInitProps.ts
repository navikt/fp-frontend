import ProsessPanelMenyData from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  allMenyData: ProsessPanelMenyData[];
}

type ProsessPanelInitProps = {
  behandlingVersjon?: number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}

export default ProsessPanelInitProps;
