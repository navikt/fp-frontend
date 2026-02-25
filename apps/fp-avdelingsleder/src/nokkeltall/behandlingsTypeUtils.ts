import type { AkselColorRole } from '@navikt/ds-tokens/types';

import type { LosBehandlingType, LosKodeverkMedNavn } from '@navikt/fp-types';

export const finnBehandlingTypeNavn = (
  behandlingTyper: LosKodeverkMedNavn<'BehandlingType'>[],
  behandlingTypeKode: LosBehandlingType,
): string => behandlingTyper.find(bt => bt.kode === behandlingTypeKode)?.navn ?? '';

export const behandlingstypeAkselFarger: Record<LosBehandlingType, AkselColorRole> = {
  ['BT-002']: 'accent', // Førstegangsbehandling
  ['BT-003']: 'meta-purple', // Klage
  ['BT-004']: 'success', // Revurdering
  ['BT-006']: 'warning', // Innsyn
  ['BT-007']: 'brand-beige', // Tilbakebetaling
  ['BT-008']: 'meta-lime', // Anke
  ['BT-009']: 'danger', // Tilbakebetaling revurdering
};
