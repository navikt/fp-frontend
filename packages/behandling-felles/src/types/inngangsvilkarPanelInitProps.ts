import InngangsvilkarPanelData from './inngangsvilkarPanelData';

type InngangsvilkarPanelInitProps = {
  registrerInngangsvilkarPanel: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
}

export default InngangsvilkarPanelInitProps;
