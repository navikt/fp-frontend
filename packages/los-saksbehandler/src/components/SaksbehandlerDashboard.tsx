import React, { FunctionComponent, useEffect } from 'react';

import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import {
  requestApi, restApiHooks, RestApiGlobalStatePathsKeys, RestApiPathsKeys,
} from '../data/fplosSaksbehandlerRestApi';
import FagsakSearchIndex from '../fagsakSearch/FagsakSearchIndex';
import BehandlingskoerIndex from '../behandlingskoer/BehandlingskoerIndex';
import SaksstotteIndex from '../saksstotte/SaksstotteIndex';

import styles from './saksbehandlerDashboard.less';
import DriftsmeldingPanel from './DriftsmeldingPanel';

interface OwnProps {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (valgSakslisteId: number) => void;
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

/**
 * SaksbehandlerDashboard
 */
const SaksbehandlerDashboard: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  setValgtSakslisteId,
  setLosErIkkeTilgjengelig,
  åpneFagsak,
  kanSaksbehandle,
}) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  const kodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);
  const kodeverkData = restApiHooks.useGlobalStateRestApi(RestApiGlobalStatePathsKeys.KODEVERK_LOS, undefined, { suspendRequest: !!kodeverk });

  const driftsmeldingerData = restApiHooks.useRestApi(RestApiPathsKeys.DRIFTSMELDINGER);

  useEffect(() => {
    if (driftsmeldingerData.state === RestApiState.ERROR || kodeverkData.state === RestApiState.ERROR) {
      setLosErIkkeTilgjengelig();
    }
  }, [driftsmeldingerData.state, kodeverkData.state]);

  if (driftsmeldingerData.state !== RestApiState.SUCCESS || (kodeverkData.state !== RestApiState.SUCCESS && !kodeverk)) {
    return null;
  }

  return (
    <>
      {driftsmeldingerData.data && (
        <DriftsmeldingPanel
          driftsmeldinger={driftsmeldingerData.data}
        />
      )}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <div className={styles.koerContainer}>
            <BehandlingskoerIndex
              åpneFagsak={åpneFagsak}
              valgtSakslisteId={valgtSakslisteId}
              setValgtSakslisteId={setValgtSakslisteId}
            />
          </div>
          <div className={styles.sokContainer}>
            <FagsakSearchIndex åpneFagsak={åpneFagsak} kanSaksbehandle={kanSaksbehandle} />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <SaksstotteIndex valgtSakslisteId={valgtSakslisteId} åpneFagsak={åpneFagsak} />
        </div>
      </div>
    </>
  );
};

export default SaksbehandlerDashboard;
