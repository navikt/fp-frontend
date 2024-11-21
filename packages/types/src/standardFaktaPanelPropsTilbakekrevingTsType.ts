import { Aksjonspunkt } from './aksjonspunktTsType';
import { Behandling } from './behandlingTsType';
import { AlleKodeverkTilbakekreving } from './kodeverkAlleTilbakekrevingTsType';

export type StandardFaktaPanelPropsTilbakekreving = Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  alleKodeverk: AlleKodeverkTilbakekreving;
  formData?: any;
  setFormData: (data: any) => void;
}>;
