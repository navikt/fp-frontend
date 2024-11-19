import { InngangsvilkarPanelData } from './inngangsvilkarPanelData';

export type InngangsvilkarPanelInitProps = {
  registrerInngangsvilkarPanel: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
};
