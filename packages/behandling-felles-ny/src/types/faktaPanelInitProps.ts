import FaktaPanelMenyData from './faktaPanelMenyData';

type FaktaPanelInitProps = {
  valgtFaktaSteg: string;
  behandlingVersjon?: number;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
}

export default FaktaPanelInitProps;
