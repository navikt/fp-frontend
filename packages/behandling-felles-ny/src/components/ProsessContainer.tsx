import React, {
  FunctionComponent, ReactElement, useCallback, useState,
} from 'react';

import { Behandling } from '@fpsak-frontend/types';

import ProsessInnhold from './ProsessInnhold';
import ProsessMeny, { ProsessMenyData } from './ProsessMeny';

import styles from './prosessContainer.less';

const DEFAULT_PROSESS_KODE = 'default';

interface OwnProps {
  behandling: Behandling;
  paneler?: ((props: any) => ReactElement)[];
  valgtProsessSteg?: string;
  oppdaterProsessPanelIUrl: (prosessnavn: string) => void;
}

const ProsessContainer: FunctionComponent<OwnProps> = ({
  behandling,
  paneler,
  valgtProsessSteg,
  oppdaterProsessPanelIUrl,
}) => {
  const [menyData, setMenyData] = useState<ProsessMenyData[]>([]);
  const leggProsessPanelTilMeny = useCallback((nyData: ProsessMenyData) => {
    if (nyData.harAksjonspunkt && valgtProsessSteg === DEFAULT_PROSESS_KODE) {
      oppdaterProsessPanelIUrl(nyData.id);
    }
    setMenyData((oldData) => {
      const newData = [...oldData];
      const index = newData.findIndex((d) => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        newData.push(nyData);
      }
      return newData;
    });
  }, [menyData]);

  const oppdaterMenyValg = useCallback((index: number) => {
    const panel = menyData[index];
    oppdaterProsessPanelIUrl(panel.id);
  }, [menyData]);

  if (!paneler) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.meny}>
        <ProsessMeny menyData={menyData} oppdaterProsessPanelIUrl={oppdaterMenyValg} />
      </div>
      <ProsessInnhold>
        {paneler.map((p) => p({
          behandling,
          valgtProsessSteg,
          leggProsessPanelTilMeny,
        }))}
      </ProsessInnhold>
    </div>
  );
};

export default ProsessContainer;
