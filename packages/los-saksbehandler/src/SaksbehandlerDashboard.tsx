import React, { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import { BehandlingskoerIndex } from './behandlingskoer/BehandlingskoerIndex';
import { driftsmeldingerOptions, losKodeverkOptions } from './data/fplosSaksbehandlerApi';
import { DriftsmeldingPanel } from './driftsmelding/DriftsmeldingPanel';
import { FagsakSøkIndex } from './fagsakSok/FagsakSøkIndex';
import { SaksstøttePaneler } from './saksstotte/SaksstøttePaneler';

import styles from './saksbehandlerDashboard.module.css';

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  kanSaksbehandle: boolean;
}

export const SaksbehandlerDashboard = ({ setLosErIkkeTilgjengelig, åpneFagsak, kanSaksbehandle }: Props) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();

  const alleKodeverkQuery = useQuery(losKodeverkOptions());
  const driftsmeldingerQuery = useQuery(driftsmeldingerOptions());

  useEffect(() => {
    if (driftsmeldingerQuery.isError || alleKodeverkQuery.isError) {
      setLosErIkkeTilgjengelig();
    }
  }, [driftsmeldingerQuery.isError, alleKodeverkQuery.isError]);

  if (driftsmeldingerQuery.isPending || alleKodeverkQuery.isPending) {
    return null;
  }

  return (
    <>
      {driftsmeldingerQuery.data && <DriftsmeldingPanel driftsmeldinger={driftsmeldingerQuery.data} />}
      <div className={styles.gridContainer}>
        <div className={styles.leftColumn}>
          <BehandlingskoerIndex
            åpneFagsak={åpneFagsak}
            valgtSakslisteId={valgtSakslisteId}
            setValgtSakslisteId={setValgtSakslisteId}
          />
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
