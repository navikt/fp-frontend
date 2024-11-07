import React from 'react';
import { useEffect, useState } from 'react';

import { RestApiState, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';

import { BehandlingskoerIndex } from './behandlingskoer/BehandlingskoerIndex';
import {
  requestApi,
  RestApiGlobalStatePathsKeys,
  restApiHooks,
  RestApiPathsKeys,
} from './data/fplosSaksbehandlerRestApi';
import { FagsakSøkIndex } from './fagsakSok/FagsakSøkIndex';
import { SaksstøttePaneler } from './saksstotte/SaksstøttePaneler';

import { DriftsmeldingPanel } from './driftsmelding/DriftsmeldingPanel';
import styles from './saksbehandlerDashboard.module.css';

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

export const SaksbehandlerDashboard = ({ setLosErIkkeTilgjengelig, åpneFagsak, kanSaksbehandle }: Props) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();

  const { addErrorMessage } = useRestApiErrorDispatcher();
  requestApi.setAddErrorMessageHandler(addErrorMessage);

  // TODO (TOR) Skriv om henting av kodeverk. Vanskeleg å forstå
  const kodeverk = restApiHooks.useGlobalStateRestApiData(RestApiGlobalStatePathsKeys.KODEVERK_LOS);
  const kodeverkData = restApiHooks.useGlobalStateRestApi(RestApiGlobalStatePathsKeys.KODEVERK_LOS, undefined, {
    suspendRequest: !!kodeverk,
  });

  const driftsmeldingerData = restApiHooks.useRestApi(RestApiPathsKeys.DRIFTSMELDINGER);

  useEffect(() => {
    if (driftsmeldingerData.state === RestApiState.ERROR || kodeverkData.state === RestApiState.ERROR) {
      setLosErIkkeTilgjengelig();
    }
  }, [driftsmeldingerData.state, kodeverkData.state]);

  if (
    driftsmeldingerData.state !== RestApiState.SUCCESS ||
    (kodeverkData.state !== RestApiState.SUCCESS && !kodeverk)
  ) {
    return null;
  }

  return (
    <>
      {driftsmeldingerData.data && <DriftsmeldingPanel driftsmeldinger={driftsmeldingerData.data} />}
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
            <FagsakSøkIndex åpneFagsak={åpneFagsak} kanSaksbehandle={kanSaksbehandle} />
          </div>
        </div>
        <div className={styles.rightColumn}>
          <SaksstøttePaneler valgtSakslisteId={valgtSakslisteId} åpneFagsak={åpneFagsak} />
        </div>
      </div>
    </>
  );
};
