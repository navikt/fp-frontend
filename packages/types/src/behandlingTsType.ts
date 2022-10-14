import { BehandlingFellesData } from './behandlingAppKontekstTsType';

type Behandling = BehandlingFellesData & Readonly<{
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
}>

export default Behandling;
