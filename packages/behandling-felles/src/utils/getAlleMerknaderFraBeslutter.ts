import behandlingStatus from '@fpsak-frontend/kodeverk/src/behandlingStatus';
import { Behandling, Aksjonspunkt } from '@fpsak-frontend/types';

const getAlleMerknaderFraBeslutter = (behandling: Behandling, aksjonspunkter: Aksjonspunkt[]) => {
  if (behandling.status !== behandlingStatus.BEHANDLING_UTREDES) {
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
