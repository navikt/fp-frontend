import React, { FunctionComponent, useMemo } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

import BehandlingType from '@fpsak-frontend/kodeverk/src/behandlingType';
import { Fagsak } from '@fpsak-frontend/types';
import { LoadingPanel } from '@fpsak-frontend/shared-components';
import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import useGetEnabledApplikasjonContext from '../app/useGetEnabledApplikasjonContext';
import ApplicationContextPath from '../app/ApplicationContextPath';
import BehandlingAppKontekst from '../behandling/behandlingAppKontekstTsType';
import { fjernVerge, opprettVerge } from './behandlingMenuOperations';
import BehandlingMenuIndex from './BehandlingMenuIndex';
import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import SakRettigheter from './sakRettigheterTsType';

const YTELSE_BEHANDLINGTYPER = [BehandlingType.FORSTEGANGSSOKNAD, BehandlingType.REVURDERING,
  BehandlingType.TILBAKEKREVING, BehandlingType.TILBAKEKREVING_REVURDERING];

const VERGE_MENYVALG = {
  FJERN: 'FJERN',
  OPPRETT: 'OPPRETT',
};

const defaultSakRettigheter: SakRettigheter = {
  sakSkalTilInfotrygd: false,
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
  const behandling = alleBehandlinger.find((b) => b.id === behandlingId);
  const skalHenteVergeMenyvalg = !!behandling && YTELSE_BEHANDLINGTYPER.includes(behandling.type.kode);
  const { data: vergeMenyvalgData, state: stateVerge } = restApiHooks.useRestApi<{ vergeBehandlingsmeny: string }>(
    FpsakApiKeys.VERGE_MENYVALG, { saksnummer: fagsak.saksnummer, behandlingId }, {
      updateTriggers: [behandlingId, behandlingVersjon],
      suspendRequest: !skalHenteVergeMenyvalg,
    },
  );

  const { data: sakRettigheterFpSak, state: stateFpSak } = restApiHooks.useRestApi<SakRettigheter>(
    FpsakApiKeys.MENYHANDLING_RETTIGHETER, undefined, {
      updateTriggers: [behandlingId, behandlingVersjon],
      keepData: true,
    },
  );
  const erRettigheterFpSakVisningsklar = sakRettigheterFpSak || erFerdig(stateFpSak);

  const erTilbakekrevingAktivert = useGetEnabledApplikasjonContext().includes(ApplicationContextPath.FPTILBAKE);
  const { data: sakRettigheterFpTilbake, state: stateFpTilbake } = restApiHooks.useRestApi<SakRettigheter>(
    FpsakApiKeys.MENYHANDLING_RETTIGHETER_FPTILBAKE, undefined, {
      suspendRequest: !erTilbakekrevingAktivert,
      updateTriggers: [behandlingId, behandlingVersjon],
      keepData: true,
    },
  );
  const erRettigheterFpTilbakeVisningsklar = !erTilbakekrevingAktivert || sakRettigheterFpTilbake || erFerdig(stateFpTilbake);

  const sakRettigheter = useMemo(() => slaSammenRettigheter(sakRettigheterFpSak, sakRettigheterFpTilbake),
    [sakRettigheterFpSak, sakRettigheterFpTilbake]);

  if ((skalHenteVergeMenyvalg && stateVerge === RestApiState.LOADING)
    || !erRettigheterFpSakVisningsklar
    || !erRettigheterFpTilbakeVisningsklar) {
    return <LoadingPanel />;
  }

  const history = useHistory();
  const location = useLocation();

  const vergeMenyvalg = vergeMenyvalgData?.vergeBehandlingsmeny;
  const fjernVergeFn = vergeMenyvalg === VERGE_MENYVALG.FJERN
    ? fjernVerge(location, history.push, fagsak.saksnummer, behandlingId, behandlingVersjon) : undefined;
  const opprettVergeFn = vergeMenyvalg === VERGE_MENYVALG.OPPRETT
    ? opprettVerge(location, history.push, fagsak.saksnummer, behandlingId, behandlingVersjon) : undefined;

  return (
    <BehandlingMenuIndex
      fagsak={fagsak}
      alleBehandlinger={alleBehandlinger}
      saksnummer={fagsak.saksnummer}
      behandlingId={behandlingId}
      behandlingVersion={behandlingVersjon}
      fjernVerge={fjernVergeFn}
      opprettVerge={opprettVergeFn}
      pushLocation={history.push}
      location={location}
      sakRettigheter={sakRettigheter}
      oppfriskBehandlinger={oppfriskBehandlinger}
    />
  );
};

export default BehandlingMenuDataResolver;
