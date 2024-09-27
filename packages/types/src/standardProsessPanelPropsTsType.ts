import Aksjonspunkt from './aksjonspunktTsType';
import Behandling from './behandlingTsType';
import Vilkar from './vilkarTsType';
import AlleKodeverk from './kodeverkAlleTsType';
import Fagsak from './fagsakTsType';

interface StandardProsessPanelProps {
  behandling: Behandling;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  status: string;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  isAksjonspunktOpen: boolean;
  formData?: any;
  setFormData: (data: any) => void;
}

export default StandardProsessPanelProps;
