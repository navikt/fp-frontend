import ProsessPanelMenyData from './prosessPanelMenyData';

export type ProsessPanelExtraInitProps = {
  apentFaktaPanelInfo?: {urlCode: string, text: string };
  toggleOppdatereFagsakContext: (skalOppdatereFagsak: boolean) => void;
  allMenyData: ProsessPanelMenyData[];
}

type ProsessPanelInitProps = {
  behandlingVersjon?:number;
  valgtProsessSteg: string;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
}

export default ProsessPanelInitProps;
