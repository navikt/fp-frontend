import React, { FunctionComponent } from 'react';
import { Panel } from '@navikt/ds-react';

import { restApiHooks, RestApiGlobalStatePathsKeys } from '../data/fplosSaksbehandlerRestApi';
import FagsakSearchIndex from '../fagsakSearch/FagsakSearchIndex';
import BehandlingskoerIndex from '../behandlingskoer/BehandlingskoerIndex';
import SaksstotteIndex from '../saksstotte/SaksstotteIndex';

import styles from './saksbehandlerDashboard.less';

interface OwnProps {
  valgtSakslisteId?: number;
  setValgtSakslisteId: (valgSakslisteId: number) => void;
}

/**
 * SaksbehandlerDashboard
 */
export const SaksbehandlerDashboard: FunctionComponent<OwnProps> = ({
  valgtSakslisteId,
  setValgtSakslisteId,
}) => {
  const fpsakUrl = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.FPSAK_URL);

  if (!fpsakUrl) {
    return null;
  }

  return (
    <div>
      <div className={styles.oppgaveContainer}>
        <div className={styles.gridContainer}>
          <div className={styles.leftColumn}>
            <div className={styles.sakslisteContent}>
              <Panel className={styles.sakslistePanel}>
                <BehandlingskoerIndex
                  fpsakUrl={fpsakUrl.verdi}
                  valgtSakslisteId={valgtSakslisteId}
                  setValgtSakslisteId={setValgtSakslisteId}
                />
                <FagsakSearchIndex fpsakUrl={fpsakUrl.verdi} />
              </Panel>
            </div>
          </div>
          <div className={styles.rightColumn}>
            <Panel>
              <SaksstotteIndex valgtSakslisteId={valgtSakslisteId} />
            </Panel>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SaksbehandlerDashboard;
