import React, {
  FunctionComponent, ReactElement, useCallback, useEffect, useMemo, useState,
} from 'react';

import { Behandling } from '@fpsak-frontend/types';

import ProsessInnhold from './ProsessInnhold';
import BehandlingHenlagtPanel from './BehandlingHenlagtPanel';
import ProsessMeny, { ProsessMenyData } from './ProsessMeny';

import styles from './prosessContainer.less';

interface OwnProps {
  behandling: Behandling;
  paneler?: ((props: any) => ReactElement)[];
  valgtProsessSteg?: string;
  oppdaterProsessPanelIUrl: (prosessnavn: string) => void;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
  oppdaterBehandlingVersjon: (versjon: number) => void;
}

const ProsessContainer: FunctionComponent<OwnProps> = ({
  behandling,
  paneler,
  valgtProsessSteg,
  oppdaterProsessPanelIUrl,
  oppdaterProsessStegOgFaktaPanelIUrl,
  apentFaktaPanelInfo,
  oppdaterBehandlingVersjon,
}) => {
  const [menyData, setMenyData] = useState<ProsessMenyData[]>([]);
  const registrerFaktaPanel = useCallback((nyData: ProsessMenyData) => {
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

  const menyDataSomVises = useMemo(() => menyData.filter((d) => !!d.tekst), [menyData]);

  const oppdaterMenyValg = useCallback((index: number) => {
    const panel = menyDataSomVises[index];
    const nyvalgtProsessSteg = panel.erAktiv ? undefined : panel.id;
    oppdaterProsessPanelIUrl(nyvalgtProsessSteg);
  }, [menyData]);

  const [skalOppdatereFagsakKontekst, toggleSkalOppdatereFagsakContext] = useState(true);
  useEffect(() => {
    if (skalOppdatereFagsakKontekst) {
      oppdaterBehandlingVersjon(behandling.versjon);
    }
  }, [behandling.versjon]);

  useEffect(() => {
    if (behandling.behandlingHenlagt) {
      paneler.push((props) => <BehandlingHenlagtPanel {...props} />);
    }
  }, [paneler]);

  if (!paneler) {
    return null;
  }

  return (
    <div className={styles.container}>
      <div className={styles.meny}>
        <ProsessMeny menyData={menyDataSomVises} oppdaterProsessPanelIUrl={oppdaterMenyValg} />
      </div>
      <ProsessInnhold>
        {paneler.map((panel, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {panel({
              behandlingVersjon: behandling?.versjon,
              valgtProsessSteg,
              registrerFaktaPanel,
              apentFaktaPanelInfo,
              oppdaterProsessStegOgFaktaPanelIUrl,
              toggleSkalOppdatereFagsakContext,
              allMenyData: menyDataSomVises,
            })}
          </React.Fragment>
        ))}
      </ProsessInnhold>
    </div>
  );
};

export default ProsessContainer;
