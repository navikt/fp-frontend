import React, { FunctionComponent, useMemo } from 'react';

import { Fagsak } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import BehandlingAppKontekst from '../behandling/behandlingAppKontekstTsType';
import BehandlingMenuIndex from './BehandlingMenuIndex';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import SakRettigheter from './sakRettigheterTsType';

const defaultSakRettigheter: SakRettigheter = {
  sakSkalTilInfotrygd: true,
  behandlingTypeKanOpprettes: [],
  behandlingTillatteOperasjoner: [],
};

const slaSammenRettigheter = (sakRettigheterFpSak: SakRettigheter, sakRettigheterFpTilbake?: SakRettigheter) => {
  if (!sakRettigheterFpSak) {
    return defaultSakRettigheter;
  }
  const sakRettigheterAnnet = sakRettigheterFpTilbake || defaultSakRettigheter;
  return {
    sakSkalTilInfotrygd: sakRettigheterFpSak.sakSkalTilInfotrygd,
    behandlingTypeKanOpprettes: sakRettigheterFpSak.behandlingTypeKanOpprettes.concat(sakRettigheterAnnet.behandlingTypeKanOpprettes),
    behandlingTillatteOperasjoner: sakRettigheterFpSak.behandlingTillatteOperasjoner.concat(sakRettigheterAnnet.behandlingTillatteOperasjoner),
  };
};

const erFerdig = (state: RestApiState) => state !== RestApiState.NOT_STARTED && state !== RestApiState.LOADING;

interface OwnProps {
  fagsak: Fagsak;
  alleBehandlinger: BehandlingAppKontekst[];
  oppfriskBehandlinger: () => void;
  behandlingId?: number;
  behandlingVersjon?: number;
}

const BehandlingMenuDataResolver: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  oppfriskBehandlinger,
  behandlingId,
  behandlingVersjon,
}) => {
  const { data: sakRettigheterFpSak, state: stateFpSak } = restApiHooks.useRestApi<SakRettigheter>(
    FpsakApiKeys.MENYHANDLING_RETTIGHETER, { saksnummer: fagsak.saksnummer }, {
      updateTriggers: [behandlingId, behandlingVersjon],
      keepData: true,
    },
  );
  const erRettigheterFpSakVisningsklar = sakRettigheterFpSak || erFerdig(stateFpSak);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);
  const { data: sakRettigheterFpTilbake, state: stateFpTilbake } = restApiHooks.useRestApi<SakRettigheter>(
    FpsakApiKeys.MENYHANDLING_RETTIGHETER_FPTILBAKE, { saksnummer: fagsak.saksnummer }, {
      suspendRequest: !erTilbakekrevingAktivert,
      updateTriggers: [behandlingId, behandlingVersjon],
      keepData: true,
    },
  );
  const erRettigheterFpTilbakeVisningsklar = !erTilbakekrevingAktivert || sakRettigheterFpTilbake || erFerdig(stateFpTilbake);

  const sakRettigheter = useMemo(() => slaSammenRettigheter(sakRettigheterFpSak, sakRettigheterFpTilbake),
    [sakRettigheterFpSak, sakRettigheterFpTilbake]);

  if (!erRettigheterFpSakVisningsklar || !erRettigheterFpTilbakeVisningsklar) {
    return <LoadingPanel />;
  }

  return (
    <BehandlingMenuIndex
      fagsak={fagsak}
      alleBehandlinger={alleBehandlinger}
      saksnummer={fagsak.saksnummer}
      behandlingId={behandlingId}
      behandlingVersion={behandlingVersjon}
      sakRettigheter={sakRettigheter}
      oppfriskBehandlinger={oppfriskBehandlinger}
    />
  );
};

export default BehandlingMenuDataResolver;
