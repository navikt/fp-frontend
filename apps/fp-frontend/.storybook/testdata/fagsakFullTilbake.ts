import type { SakFullDtoFpTilbake } from '@navikt/fp-types';

export const fagsakFullTilbake: SakFullDtoFpTilbake = {
  saksnummer: '123456',
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
