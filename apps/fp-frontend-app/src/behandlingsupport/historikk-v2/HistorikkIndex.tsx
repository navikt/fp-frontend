import React from 'react';

import { HistorikkSakIndex } from '@navikt/fp-sak-historikk-v2';
import { HistorikkinnslagV2 } from '@navikt/fp-types';

import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

interface Props {
  saksnummer: string;
  behandlingUuid?: string;
  behandlingVersjon?: number;
  historikkinnslagFpSak?: HistorikkinnslagV2[];
  historikkinnslagFpTilbake?: HistorikkinnslagV2[];
  kjønn: string;
}

export const HistorikkIndex = ({ behandlingUuid, historikkinnslagFpSak, historikkinnslagFpTilbake, kjønn }: Props) => {
  const alleKodeverkFpSak = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK);
  const alleKodeverkFpTilbake = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.KODEVERK_FPTILBAKE);

  return (
    <HistorikkSakIndex
      historikkFpSak={historikkinnslagFpSak}
      historikkFpTilbake={historikkinnslagFpTilbake}
      alleKodeverkFpTilbake={alleKodeverkFpTilbake}
      alleKodeverkFpSak={alleKodeverkFpSak}
      valgtBehandlingUuid={behandlingUuid}
      kjønn={kjønn}
    />
  );
};
