import { FaktaAksjonspunkt } from '@fpsak-frontend/types-avklar-aksjonspunkter';

import Aksjonspunkt from './aksjonspunktTsType';
import Behandling from './behandlingTsType';
import AlleKodeverkTilbakekreving from './kodeverkAlleTilbakekrevingTsType';

type StandardFaktaPanelPropsTilbakekreving = Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback: (aksjonspunktData: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
  alleKodeverk: AlleKodeverkTilbakekreving;
  formData?: any,
  setFormData: (data: any) => void,
}>

export default StandardFaktaPanelPropsTilbakekreving;
