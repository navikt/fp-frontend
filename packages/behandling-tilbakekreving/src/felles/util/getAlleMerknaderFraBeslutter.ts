import { BehandlingStatus } from '@navikt/ft-kodeverk';
import { Behandling, Aksjonspunkt } from '@navikt/ft-types';

const getAlleMerknaderFraBeslutter = (behandling: Behandling, aksjonspunkter: Aksjonspunkt[]) => {
  if (behandling.status !== BehandlingStatus.BEHANDLING_UTREDES) {
    return {};
  }
  return aksjonspunkter.reduce((obj, ap) => ({
    ...obj,
    [ap.definisjon]: {
      notAccepted: ap.toTrinnsBehandling && ap.toTrinnsBehandlingGodkjent === false,
    },
  }), {});
};

export default getAlleMerknaderFraBeslutter;
