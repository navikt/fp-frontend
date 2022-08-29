import { Behandling, Aksjonspunkt } from '@navikt/ft-types';
import { AksessRettigheter } from '@fpsak-frontend/types';

export const harBehandlingReadOnlyStatus = (behandling: Behandling): boolean => (behandling.taskStatus && behandling.taskStatus.readOnly
  ? behandling.taskStatus.readOnly : false);

export const erReadOnly = (
  behandling: Behandling,
  aksjonspunkterForPunkt: Aksjonspunkt[],
  rettigheter: AksessRettigheter,
  hasFetchError: boolean,
): boolean => {
  const { behandlingPaaVent } = behandling;
  const isBehandlingReadOnly = hasFetchError || harBehandlingReadOnlyStatus(behandling);
  const hasNonActivOrNonOverstyrbar = aksjonspunkterForPunkt.some((ap) => !ap.erAktivt);

  return !rettigheter.writeAccess.isEnabled || behandlingPaaVent || isBehandlingReadOnly || hasNonActivOrNonOverstyrbar;
};

export const erReadOnlyCurried = (
  behandling: Behandling,
  rettigheter: AksessRettigheter,
  hasFetchError: boolean,
) => (
  aksjonspunkterForPunkt: Aksjonspunkt[],
) => erReadOnly(behandling, aksjonspunkterForPunkt, rettigheter, hasFetchError);
