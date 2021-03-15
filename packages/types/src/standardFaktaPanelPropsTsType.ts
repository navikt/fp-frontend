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
  submitCallback?: (aksjonspunktData: any) => Promise<any>;
  alleKodeverk: {[key: string]: KodeverkMedNavn[]};
}>

export default StandardFaktaPanelProps;
