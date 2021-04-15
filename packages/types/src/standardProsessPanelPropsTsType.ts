import {
  Aksjonspunkt, Behandling, KodeverkMedNavn, Vilkar,
} from '@fpsak-frontend/types';
import { ProsessAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

interface StandardProsessPanelProps {
  behandling: Behandling;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  status: string;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  aksjonspunkter: Aksjonspunkt[];
  vilkar: Vilkar[];
  isAksjonspunktOpen: boolean;
}

export default StandardProsessPanelProps;
