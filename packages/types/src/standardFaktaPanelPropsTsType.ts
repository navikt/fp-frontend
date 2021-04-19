import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import Aksjonspunkt from './aksjonspunktTsType';
import Behandling from './behandlingTsType';
import KodeverkMedNavn from './kodeverkMedNavnTsType';

type StandardFaktaPanelProps = Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
  formData?: any,
  setFormData: (data: any) => void,
}>

export default StandardFaktaPanelProps;
