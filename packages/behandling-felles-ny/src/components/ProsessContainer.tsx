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
    if (nyData.harApentAksjonspunkt && valgtProsessSteg === DEFAULT_PROSESS_KODE) {
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
        <ProsessMeny menyData={menyData.filter((d) => !!d.tekst)} oppdaterProsessPanelIUrl={oppdaterMenyValg} />
      </div>
      <ProsessInnhold>
        {paneler.map((panel, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <React.Fragment key={index}>
            {panel({
              behandling,
              valgtProsessSteg,
              registrerFaktaPanel,
              apentFaktaPanelInfo,
              oppdaterProsessStegOgFaktaPanelIUrl,
              oppdaterBehandlingVersjon,
            })}
          </React.Fragment>
        ))}
      </ProsessInnhold>
    </div>
  );
};

export default ProsessContainer;
