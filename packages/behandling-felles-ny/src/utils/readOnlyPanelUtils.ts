import {
  Behandling, Aksjonspunkt, Vilkar, AksessRettigheter,
} from '@fpsak-frontend/types';

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
  const hasNonActivOrNonOverstyrbar = aksjonspunkterForPunkt.some((ap) => !ap.erAktivt) || vilkarlisteForPunkt.some((v) => !v.overstyrbar);

  return !rettigheter.writeAccess.isEnabled || behandlingPaaVent || isBehandlingReadOnly || hasNonActivOrNonOverstyrbar;
};
