import { useEffect, useState } from 'react';

import { useQuery } from '@tanstack/react-query';

import type { NavAnsatt } from '@navikt/fp-types';

import { BehandlingskoerIndex } from './behandlingskoer/BehandlingskoerIndex';
import { losKodeverkOptions } from './data/fplosSaksbehandlerApi';
import { FagsakSøkIndex } from './fagsakSok/FagsakSøkIndex';
import { SaksstøttePaneler } from './saksstotte/SaksstøttePaneler';

import styles from './saksbehandlerDashboard.module.css';

interface Props {
  setLosErIkkeTilgjengelig: () => void;
  åpneFagsak: (saksnummer: string, behandlingUuid?: string) => void;
  navAnsatt: NavAnsatt;
}

export const SaksbehandlerDashboard = ({ setLosErIkkeTilgjengelig, åpneFagsak, navAnsatt }: Props) => {
  const [valgtSakslisteId, setValgtSakslisteId] = useState<number>();

  const alleKodeverkQuery = useQuery(losKodeverkOptions());

  useEffect(() => {
    if (alleKodeverkQuery.isError) {
      setLosErIkkeTilgjengelig();
    }
  }, [alleKodeverkQuery.isError]);

  if (alleKodeverkQuery.isPending) {
    return null;
  }

  return (
    <div className={styles['gridContainer']}>
      <div className={styles['leftColumn']}>
        <BehandlingskoerIndex
          åpneFagsak={åpneFagsak}
          valgtSakslisteId={valgtSakslisteId}
          setValgtSakslisteId={setValgtSakslisteId}
          brukernavn={navAnsatt.brukernavn}
        />
        <div className={styles['sokContainer']}>
          <FagsakSøkIndex åpneFagsak={åpneFagsak} kanSaksbehandle={navAnsatt.kanSaksbehandle || false} />
        </div>
      </div>
      <div className={styles['rightColumn']}>
        <SaksstøttePaneler åpneFagsak={åpneFagsak} />
      </div>
    </div>
  );
};
