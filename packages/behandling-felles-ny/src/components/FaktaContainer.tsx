import React, {
  FunctionComponent, ReactElement, useState, useCallback, useMemo,
} from 'react';

import {
  FlexColumn, FlexContainer, FlexRow,
} from '@fpsak-frontend/shared-components';

import FaktaMeny from './FaktaMeny';
import FaktaPanelMenyData from '../types/faktaPanelMenyData';
import FaktaPanelInitProps from '../types/faktaPanelInitProps';

import styles from './faktaContainer.less';

export const DEFAULT_FAKTA_KODE = 'default';

interface OwnProps {
  behandlingVersjon?: number;
  paneler?: ((props: FaktaPanelInitProps) => ReactElement)[];
  valgtFaktaSteg?: string;
  oppdaterFaktaPanelIUrl: (faktanavn: string) => void;
  setApentFaktaPanel: (panelData: { urlCode: string, text: string }) => void,
  apentFaktaPanelInfo?: {urlCode: string, text: string };
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

    if (!nyData.harAksjonspunkt && apentFaktaPanelInfo?.urlCode === nyData.id) {
      setApentFaktaPanel(undefined);
    }
    if (nyData.harAksjonspunkt && apentFaktaPanelInfo?.urlCode !== nyData.id) {
      setApentFaktaPanel({ urlCode: nyData.id, text: nyData.tekst });
    }
  }, []);

  const vistMenyData = useMemo(() => menyData.filter((d) => !!d.tekst), [menyData]);

  const oppdaterMenyValg = useCallback((index: number) => {
    const panel = vistMenyData[index];
    oppdaterFaktaPanelIUrl(panel.id);
  }, [vistMenyData]);

  if (!paneler) {
    return null;
  }

  return (
    <div className={styles.container}>
      <FlexContainer fullHeight>
        <FlexRow>
          <FlexColumn className={styles.sideMenu}>
            <FaktaMeny menyData={vistMenyData} oppdaterFaktaPanelIUrl={oppdaterMenyValg} />
          </FlexColumn>
          <FlexColumn className={styles.content}>
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
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default FaktaContainer;
