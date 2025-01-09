import { AksessRettigheter, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

import { useBehandlingPollingOperasjoner } from '../../data/useBehandlingPollingOperasjoner';
import { RegistrerPapirsoknad } from './RegistrerPapirsoknad';

type Props = {
  behandling: Behandling;
  setBehandling: (behandling: Behandling) => void;
  kodeverk: AlleKodeverk;
  fagsak: Fagsak;
  rettigheter: AksessRettigheter;
};

const BehandlingPapirsoknadIndex = ({ behandling, setBehandling, kodeverk, fagsak, rettigheter }: Props) => {
  const { lagreAksjonspunkter } = useBehandlingPollingOperasjoner(behandling, setBehandling);

  return (
    <RegistrerPapirsoknad
      behandling={behandling}
      fagsak={fagsak}
      kodeverk={kodeverk}
      rettigheter={rettigheter}
      lagreAksjonspunkt={lagreAksjonspunkter}
    />
  );
};

export default BehandlingPapirsoknadIndex;
