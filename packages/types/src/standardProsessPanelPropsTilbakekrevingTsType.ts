import Aksjonspunkt from './aksjonspunktTsType';
import Behandling from './behandlingTsType';
import Vilkar from './vilkarTsType';
import AlleKodeverkTilbakekreving from './kodeverkAlleTilbakekrevingTsType';

interface StandardProsessPanelPropsTilbakekreving {
  behandling: Behandling;
  alleKodeverk: AlleKodeverkTilbakekreving;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
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

export default StandardProsessPanelPropsTilbakekreving;
