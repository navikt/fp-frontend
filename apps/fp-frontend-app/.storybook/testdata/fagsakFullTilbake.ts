import { BehandlingType } from '@navikt/fp-kodeverk';
import type { FagsakDataFpTilbake } from '@navikt/fp-types';

export const fagsakFullTilbake: FagsakDataFpTilbake = {
  behandlingTypeKanOpprettes: [
    {
      behandlingType: BehandlingType.TILBAKEKREVING,
      kanOppretteBehandling: true,
    },
    {
      behandlingType: BehandlingType.TILBAKEKREVING_REVURDERING,
      kanOppretteBehandling: false,
    },
  ],
  behandlinger: [],
  historikkinnslag: [],
};
