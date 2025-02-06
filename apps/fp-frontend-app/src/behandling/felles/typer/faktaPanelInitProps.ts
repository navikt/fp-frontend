import type { FaktaPanelMenyData } from './faktaPanelMenyData';

export type FaktaPanelInitProps = {
  valgtFaktaSteg?: string;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
};
