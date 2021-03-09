import InngangsvilkarPanelData from './inngangsvilkarPanelData';

type InngangsvilkarPanelInitProps = {
  setPanelInfo: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
}

export default InngangsvilkarPanelInitProps;
