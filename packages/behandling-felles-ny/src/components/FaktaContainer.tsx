import React, {
  FunctionComponent, ReactElement, useState, useCallback,
} from 'react';

import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';
import { Behandling } from '@fpsak-frontend/types';

import FaktaInnhold from './FaktaInnhold';
import FaktaMeny, { MenyData } from './FaktaMeny';

import styles from './faktaContainer.less';

export const DEFAULT_FAKTA_KODE = 'default';

interface OwnProps {
  behandling: Behandling;
  paneler?: ((props: any) => ReactElement)[];
  valgtFaktaSteg?: string;
  oppdaterFaktaPanelIUrl: (faktanavn: string) => void;
}

const finnForrigeIndex = (index: number, faktaPaneler: string[], menyDataSomErLagtTil: MenyData[]) => {
  const forrigeIndex = menyDataSomErLagtTil.findIndex((p) => p.id === faktaPaneler[index - 1]);
  if (forrigeIndex === -1) {
    return finnForrigeIndex(index - 1, faktaPaneler, menyDataSomErLagtTil);
  }
  return forrigeIndex;
};

const FaktaContainer: FunctionComponent<OwnProps> = ({
  behandling,
  paneler,
  valgtFaktaSteg,
  oppdaterFaktaPanelIUrl,
}) => {
  const [faktaPaneler, setFaktaPaneler] = useState<string[]>([]);
  const registrerFaktaPanel = useCallback((panelId: string) => setFaktaPaneler((oldData) => oldData.concat([panelId])), []);
  const [menyData, setMenyData] = useState<MenyData[]>([]);
  const leggFaktaPanelTilMeny = useCallback((nyData: MenyData) => {
    if (nyData.harAksjonspunkt && valgtFaktaSteg === DEFAULT_FAKTA_KODE) {
      oppdaterFaktaPanelIUrl(nyData.id);
    }

    setMenyData((oldData) => {
      const newData = [...oldData];
      const index = newData.findIndex((d) => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        const tempIndex = faktaPaneler.findIndex((panelId) => panelId === nyData.id);
        const finalIndex = finnForrigeIndex(tempIndex, faktaPaneler, oldData);
        newData.splice(finalIndex + 1, 0, nyData);
      }
      return newData;
    });
  }, [faktaPaneler, menyData]);

  const oppdaterMenyValg = useCallback((index: number) => {
    const panel = menyData[index];
    oppdaterFaktaPanelIUrl(panel.id);
  }, [menyData]);

  if (!paneler) {
    return null;
  }

  return (
    <div className={styles.container}>
      <FlexContainer fullHeight>
        <FlexRow>
          <FlexColumn className={styles.sideMenu}>
            <FaktaMeny menyData={menyData} oppdaterFaktaPanelIUrl={oppdaterMenyValg} />
          </FlexColumn>
          <FlexColumn className={styles.content}>
            <FaktaInnhold>
              {paneler.map((panel, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={index}>
                  {panel({
                    behandling,
                    valgtFaktaSteg,
                    registrerFaktaPanel,
                    leggFaktaPanelTilMeny,
                  })}
                </React.Fragment>
              ))}
            </FaktaInnhold>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default FaktaContainer;
