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

const FaktaContainer: FunctionComponent<OwnProps> = ({
  behandling,
  paneler,
  valgtFaktaSteg,
  oppdaterFaktaPanelIUrl,
}) => {
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
        newData.push(nyData);
      }
      return newData;
    });
  }, [menyData]);

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
              {paneler.map((p) => p({
                behandling,
                valgtFaktaSteg,
                leggFaktaPanelTilMeny,
              }))}
            </FaktaInnhold>
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default FaktaContainer;
