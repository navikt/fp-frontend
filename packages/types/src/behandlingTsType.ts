import BehandlingAppKontekst from './behandlingAppKontekstTsType';

type Behandling = BehandlingAppKontekst & {
  taskStatus?: {
    message: string;
    pending: boolean;
    status: string;
    readOnly: boolean;
  };
}

export default Behandling;
