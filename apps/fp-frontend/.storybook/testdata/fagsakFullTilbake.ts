import type { FagsakDataFpTilbake } from '@navikt/fp-types';

export const fagsakFullTilbake: FagsakDataFpTilbake = {
  behandlingTypeKanOpprettes: [
    {
      behandlingType: 'BT-007',
      kanOppretteBehandling: true,
    },
    {
      behandlingType: 'BT-009',
      kanOppretteBehandling: false,
    },
  ],
  behandlinger: [],
  historikkinnslag: [],
};
