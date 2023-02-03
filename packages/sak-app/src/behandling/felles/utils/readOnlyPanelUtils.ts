import { Behandling, Aksjonspunkt } from '@navikt/ft-types';
import { Vilkar, AksessRettigheter } from '@navikt/fp-types';

export const harBehandlingReadOnlyStatus = (behandling: Behandling) => (behandling.taskStatus && behandling.taskStatus.readOnly
  ? behandling.taskStatus.readOnly : false);

export const erReadOnly = (
  behandling: Behandling,
  aksjonspunkterForPunkt: Aksjonspunkt[],
  vilkarlisteForPunkt: Vilkar[],
  rettigheter: AksessRettigheter,
  hasFetchError: boolean,
) => {
  const { behandlingPaaVent } = behandling;
  const isBehandlingReadOnly = hasFetchError || harBehandlingReadOnlyStatus(behandling);
  const hasNonOverstyrbar = vilkarlisteForPunkt.some((v) => !v.overstyrbar);

  return !rettigheter.writeAccess.isEnabled || behandlingPaaVent || isBehandlingReadOnly || hasNonOverstyrbar;
};
