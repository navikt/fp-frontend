import Aksjonspunkt from './aksjonspunktTsType';
import { BehandlingFellesData } from './behandlingAppKontekstTsType';
import Vilkar from './vilkarTsType';

type Behandling = BehandlingFellesData & Readonly<{
  aksjonspunkt: Aksjonspunkt[];
  harSøknad: boolean;
  harSattEndringsdato: boolean;
  sjekkSimuleringResultat: boolean;
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
  vilkår: Vilkar[];
  alleUttaksperioderAvslått: boolean;
}>

export default Behandling;
