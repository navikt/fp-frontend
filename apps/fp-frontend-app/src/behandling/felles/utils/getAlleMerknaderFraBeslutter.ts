import { BehandlingStatus } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt } from '@navikt/fp-types';

export const getAlleMerknaderFraBeslutter = (behandlingStatus: BehandlingStatus, aksjonspunkter: Aksjonspunkt[]) => {
  if (behandlingStatus !== BehandlingStatus.BEHANDLING_UTREDES) {
    return {};
  }
  return aksjonspunkter.reduce(
    (obj, ap) => ({
      ...obj,
      [ap.definisjon]: {
        notAccepted: ap.toTrinnsBehandling && ap.toTrinnsBehandlingGodkjent === false,
      },
    }),
    {},
  );
};
