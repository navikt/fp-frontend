import type { AksessRettigheter, Behandling, Vilkår } from '@navikt/fp-types';

export const harBehandlingReadOnlyStatus = (behandling: Behandling) => behandling.taskStatus?.readOnly ?? false;

export const erReadOnly = (
  behandling: Behandling,
  vilkarlisteForPunkt: Vilkår[],
  rettigheter: AksessRettigheter,
  hasFetchError: boolean,
) => {
  const { behandlingPåVent } = behandling;
  const isBehandlingReadOnly = hasFetchError || harBehandlingReadOnlyStatus(behandling);
  const hasNonOverstyrbar = vilkarlisteForPunkt.some(v => !v.overstyrbar);

  return !rettigheter.writeAccess.isEnabled || behandlingPåVent || isBehandlingReadOnly || hasNonOverstyrbar;
};
