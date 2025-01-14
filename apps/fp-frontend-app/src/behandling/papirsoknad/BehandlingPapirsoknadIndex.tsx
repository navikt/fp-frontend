import { AksessRettigheter, Behandling, Fagsak } from '@navikt/fp-types';

import { useBehandlingPollingOperasjoner } from '../../data/useBehandlingPollingOperasjoner';
import { RegistrerPapirsoknad } from './RegistrerPapirsoknad';

type Props = {
  behandling: Behandling;
  setBehandling: (behandling: Behandling) => void;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
};

const BehandlingPapirsoknadIndex = ({ behandling, setBehandling, fagsak, rettigheter }: Props) => {
  const { lagreAksjonspunkter } = useBehandlingPollingOperasjoner(behandling, setBehandling);

  return (
    <RegistrerPapirsoknad
      behandling={behandling}
      fagsak={fagsak}
      rettigheter={rettigheter}
      lagreAksjonspunkt={lagreAksjonspunkter}
    />
  );
};

export default BehandlingPapirsoknadIndex;
