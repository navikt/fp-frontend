import React, { FunctionComponent, useMemo } from 'react';

import { BehandlingAppKontekst, Fagsak } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useBehandlingEndret from '../behandling/useBehandligEndret';
import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import BehandlingMenuIndex from './BehandlingMenuIndex';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import SakRettigheter from './sakRettigheterTsType';
import SakRettigheter from '../fagsak/sakRettigheterTsType';

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
  fagsakRettigheter: SakRettigheter;
}

const BehandlingMenuDataResolver: FunctionComponent<OwnProps> = ({
  fagsak,
  alleBehandlinger,
  oppfriskBehandlinger,
  behandlingId,
  behandlingVersjon,
  fagsakRettigheter,
}) => {
  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);
  const erBehandlingEndretFraUndefined = useBehandlingEndret(behandlingId, behandlingVersjon);

  const { data: behandlingRettigheterFpSak, state: stateFpSak } = restApiHooks.useRestApi<SakRettigheter>(
    FpsakApiKeys.BEHANDLING_RETTIGHETER, { uuid: behandling.uuid }, {
      suspendRequest: erBehandlingEndretFraUndefined,
      updateTriggers: [behandlingId, behandlingVersjon],
      keepData: true,
    },
  );
  const erRettigheterFpSakVisningsklar = behandlingRettigheterFpSak || erFerdig(stateFpSak);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);
  const { data: sakRettigheterFpTilbake, state: stateFpTilbake } = restApiHooks.useRestApi<SakRettigheter>(
    FpsakApiKeys.MENYHANDLING_RETTIGHETER_FPTILBAKE, { saksnummer: fagsak.saksnummer }, {
      suspendRequest: !erTilbakekrevingAktivert || erBehandlingEndretFraUndefined,
      updateTriggers: [behandlingId, behandlingVersjon],
      keepData: true,
    },
  );
  const erRettigheterFpTilbakeVisningsklar = !erTilbakekrevingAktivert || sakRettigheterFpTilbake || erFerdig(stateFpTilbake);

  const sakRettigheter = useMemo(() => slaSammenRettigheter(behandlingRettigheterFpSak, sakRettigheterFpTilbake),
    [behandlingRettigheterFpSak, sakRettigheterFpTilbake]);

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
      fagsakRettigheter={fagsakRettigheter}
    />
  );
};

export default BehandlingMenuDataResolver;
