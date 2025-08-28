import { BehandlingType } from '@navikt/fp-kodeverk';
import type { FagsakDataFpTilbake } from '@navikt/fp-types';

export const fagsakFullTilbake: FagsakDataFpTilbake = {
  behandlingTypeKanOpprettes: [
    {
      behandlingType: BehandlingTypeEnum.TILBAKEKREVING,
      kanOppretteBehandling: true,
    },
    {
      behandlingType: BehandlingTypeEnum.TILBAKEKREVING_REVURDERING,
      kanOppretteBehandling: false,
    },
  ],
  behandlinger: [],
  historikkinnslag: [],
};
