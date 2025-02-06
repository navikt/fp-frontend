import type { AksessRettigheter, Behandling, Vilkar } from '@navikt/fp-types';

export const harBehandlingReadOnlyStatus = (behandling: Behandling) => behandling.taskStatus?.readOnly ?? false;

export const erReadOnly = (
  behandling: Behandling,
  vilkarlisteForPunkt: Vilkar[],
  rettigheter: AksessRettigheter,
  hasFetchError: boolean,
) => {
  const { behandlingPaaVent } = behandling;
  const isBehandlingReadOnly = hasFetchError || harBehandlingReadOnlyStatus(behandling);
  const hasNonOverstyrbar = vilkarlisteForPunkt.some(v => !v.overstyrbar);

  return !rettigheter.writeAccess.isEnabled || behandlingPaaVent || isBehandlingReadOnly || hasNonOverstyrbar;
};
