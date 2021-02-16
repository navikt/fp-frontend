import React, {
  FunctionComponent, ReactElement, useState, useCallback,
} from 'react';

import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

import FaktaInnhold from './FaktaInnhold';
import FaktaMeny from './FaktaMeny';
import FaktaPanelMenyData from '../types/FaktaPanelMenyData';

import styles from './faktaContainer.less';

export const DEFAULT_FAKTA_KODE = 'default';

interface OwnProps {
  behandlingVersjon?: number;
  paneler?: ((props: any) => ReactElement)[];
  valgtFaktaSteg?: string;
  oppdaterFaktaPanelIUrl: (faktanavn: string) => void;
  setApentFaktaPanel: (panelData: { urlCode: string, textCode: string }) => void,
  apentFaktaPanelInfo?: {urlCode: string, textCode: string };
}

const FaktaContainer: FunctionComponent<OwnProps> = ({
  behandlingVersjon,
  paneler,
  valgtFaktaSteg,
  oppdaterFaktaPanelIUrl,
  setApentFaktaPanel,
  apentFaktaPanelInfo,
}) => {
  const [menyData, setMenyData] = useState<FaktaPanelMenyData[]>([]);
  const registrerFaktaPanel = useCallback((nyData: FaktaPanelMenyData) => {
    if (nyData.harAksjonspunkt && apentFaktaPanelInfo?.urlCode !== nyData.id) {
      setApentFaktaPanel({ urlCode: nyData.id, textCode: nyData.tekst });
    }

    setMenyData((oldData) => {
      const newData = [...oldData];
      const index = newData.findIndex((d) => d.id === nyData.id);
      if (index >= 0) {
        newData.splice(index, 1, nyData);
      } else {
        newData.push(nyData);
      }

      if (apentFaktaPanelInfo && newData.some((d) => !d.harAksjonspunkt)) {
        setApentFaktaPanel(undefined);
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
            <FaktaMeny menyData={menyData.filter((d) => !!d.tekst)} oppdaterFaktaPanelIUrl={oppdaterMenyValg} />
          </FlexColumn>
          <FlexColumn className={styles.content}>
            <FaktaInnhold>
              {paneler.map((panel, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <React.Fragment key={index}>
                  {panel({
                    behandlingVersjon,
                    valgtFaktaSteg,
                    registrerFaktaPanel,
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
