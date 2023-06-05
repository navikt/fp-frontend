import React, { FunctionComponent, ReactElement, useCallback, useMemo, useState } from 'react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';

import { Behandling } from '@navikt/fp-types';

import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessMeny from './ProsessMeny';
import ProsessPanelMenyData from '../typer/prosessPanelMenyData';
import ProsessPanelInitProps, { ProsessPanelExtraInitProps } from '../typer/prosessPanelInitProps';

import styles from './prosessContainer.module.css';

interface OwnProps {
  behandling: Behandling;
  hentPaneler?: (props: ProsessPanelInitProps, ekstraProps: ProsessPanelExtraInitProps) => ReactElement;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  apentFaktaPanelInfo?: { urlCode: string; text: string };
}

const ProsessContainer: FunctionComponent<OwnProps> = ({
  behandling,
  hentPaneler,
  valgtProsessSteg,
  valgtFaktaSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  apentFaktaPanelInfo,
}) => {
  const [menyData, setMenyData] = useState<ProsessPanelMenyData[]>([]);

  const registrerProsessPanel = useCallback((nyData: ProsessPanelMenyData) => {
    setMenyData(oldData => {
      const newData = [...oldData];
      const index = newData.findIndex(d => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        newData.push(nyData);
      }
      return newData;
    });
  }, []);

  const menyDataSomVises = useMemo(() => menyData.filter(d => !!d.tekst), [menyData]);

  const oppdaterMenyValg = useCallback(
    (index: number) => {
      if (menyDataSomVises) {
        const panel = menyDataSomVises[index];
        const nyvalgtProsessSteg = panel.erAktiv ? undefined : panel.id;
        oppdaterProsessStegOgFaktaPanelIUrl(nyvalgtProsessSteg, valgtFaktaSteg);
      }
    },
    [menyDataSomVises, valgtFaktaSteg, oppdaterProsessStegOgFaktaPanelIUrl],
  );

  if (!hentPaneler) {
    return null;
  }

  return (
    <div className={menyDataSomVises && menyDataSomVises.length > 0 ? styles.container : undefined}>
      {menyDataSomVises && menyDataSomVises.length > 0 && (
        <div className={styles.meny}>
          <ProsessMeny menyData={menyDataSomVises} oppdaterProsessPanelIUrl={oppdaterMenyValg} />
        </div>
      )}
      {(!menyDataSomVises || menyDataSomVises.length === 0) && <LoadingPanel />}
      {hentPaneler(
        {
          behandling,
          valgtProsessSteg,
          registrerProsessPanel,
        },
        {
          apentFaktaPanelInfo,
          allMenyData: menyDataSomVises || [],
        },
      )}
      {behandling.behandlingHenlagt && (
        <BehandlingHenlagtPanel valgtProsessSteg={valgtProsessSteg} registrerProsessPanel={registrerProsessPanel} />
      )}
    </div>
  );
};

export default ProsessContainer;
