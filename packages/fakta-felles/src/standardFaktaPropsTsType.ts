import { Aksjonspunkt } from '@fpsak-frontend/types';

type StandardFaktaProps = Readonly<{
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string] : { notAccepted?: boolean }};
  submitCallback?: (aksjonspunktData: { kode: string }) => Promise<any>;
}>

export default StandardFaktaProps;
