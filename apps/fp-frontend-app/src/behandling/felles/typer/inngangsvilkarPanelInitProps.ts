import { RequestApi } from '@navikt/fp-rest-api';
import InngangsvilkarPanelData from './inngangsvilkarPanelData';

type InngangsvilkarPanelInitProps = {
  registrerInngangsvilkarPanel: (data: InngangsvilkarPanelData) => void;
  erPanelValgt: boolean;
  harInngangsvilkarApentAksjonspunkt: boolean;
  requestApi: RequestApi;
}

export default InngangsvilkarPanelInitProps;
