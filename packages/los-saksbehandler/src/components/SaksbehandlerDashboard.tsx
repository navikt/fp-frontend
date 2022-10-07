import React, { FunctionComponent, useEffect } from 'react';

import { RestApiState } from '@fpsak-frontend/rest-api-hooks';

import { restApiHooks, RestApiGlobalStatePathsKeys } from '../data/fplosSaksbehandlerRestApi';
import FagsakSearchIndex from '../fagsakSearch/FagsakSearchIndex';
import BehandlingskoerIndex from '../behandlingskoer/BehandlingskoerIndex';
import SaksstotteIndex from '../saksstotte/SaksstotteIndex';

import styles from './saksbehandlerDashboard.less';
import DriftsmeldingPanel from './DriftsmeldingPanel';

interface OwnProps {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (valgSakslisteId: number) => void;
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: number, behandlingUuid?: string) => void;
}

/**
 * SaksbehandlerDashboard
 */
const SaksbehandlerDashboard: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  setValgtSakslisteId,
  setLosErIkkeTilgjengelig,
  åpneFagsak,
}) => {
  const driftsmeldingerData = restApiHooks.useGlobalStateRestApi(RestApiGlobalStatePathsKeys.DRIFTSMELDINGER);

  useEffect(() => {
    if (driftsmeldingerData.state === RestApiState.ERROR) {
      setLosErIkkeTilgjengelig();
    }
  }, [driftsmeldingerData.state]);

  if (driftsmeldingerData.state !== RestApiState.SUCCESS) {
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
            <FagsakSearchIndex åpneFagsak={åpneFagsak} />
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
