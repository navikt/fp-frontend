import React, { FunctionComponent, ReactElement, useState, useCallback, useMemo, useRef, useEffect } from 'react';
import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';
import { RequestApi } from '@navikt/fp-rest-api';
import { Behandling } from '@navikt/fp-types';

import FaktaMeny from './FaktaMeny';
import FaktaPanelMenyData from '../typer/faktaPanelMenyData';
import FaktaPanelInitProps from '../typer/faktaPanelInitProps';

import styles from './faktaContainer.module.css';

export const DEFAULT_FAKTA_KODE = 'default';

interface OwnProps {
  behandling: Behandling;
  hentPaneler?: (props: FaktaPanelInitProps) => ReactElement;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  oppdaterProsessStegOgFaktaPanelIUrl: (punktnavn?: string, faktanavn?: string) => void;
  setApentFaktaPanel: (panelData?: { urlCode: string; text: string }) => void;
  apentFaktaPanelInfo?: { urlCode: string; text: string };
  requestApi: RequestApi;
}

const FaktaContainer: FunctionComponent<OwnProps> = ({
  behandling,
  hentPaneler,
  valgtFaktaSteg,
  valgtProsessSteg,
  oppdaterProsessStegOgFaktaPanelIUrl,
  setApentFaktaPanel,
  apentFaktaPanelInfo,
  requestApi,
}) => {
  const [menyData, setMenyData] = useState<FaktaPanelMenyData[]>([]);
  const registrerFaktaPanel = useCallback(
    (nyData: FaktaPanelMenyData) => {
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

      if (!nyData.harApneAksjonspunkter && apentFaktaPanelInfo?.urlCode === nyData.id) {
        setApentFaktaPanel(undefined);
      }
      if (nyData.harApneAksjonspunkter && apentFaktaPanelInfo?.urlCode !== nyData.id) {
        setApentFaktaPanel({ urlCode: nyData.id, text: nyData.tekst || '' });
      }
    },
    [apentFaktaPanelInfo],
  );

  const ikkeKlar = menyData.some(d => !d.harHentetInitData);

  const menyDataSomVises = useMemo(() => menyData.filter(d => !!d.tekst), [menyData]);

  const forrige = useRef<FaktaPanelMenyData[]>();
  useEffect(() => {
    if (!ikkeKlar) {
      forrige.current = menyDataSomVises;
    }
  }, [menyDataSomVises]);

  const currentData = ikkeKlar ? forrige.current : menyDataSomVises;

  const oppdaterMenyValg = useCallback(
    (index: number) => {
      if (currentData) {
        const panel = currentData[index];
        oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, panel.id);
      }
    },
    [currentData, valgtProsessSteg, oppdaterProsessStegOgFaktaPanelIUrl],
  );

  if (!hentPaneler) {
    return null;
  }

  return (
    <div className={styles.container}>
      <FlexContainer fullHeight>
        <FlexRow>
          <FlexColumn className={styles.sideMenu}>
            {currentData && currentData.length > 0 && (
              <FaktaMeny menyData={currentData} oppdaterFaktaPanelIUrl={oppdaterMenyValg} />
            )}
          </FlexColumn>
          <FlexColumn className={styles.content}>
            {hentPaneler({
              behandling,
              valgtFaktaSteg,
              registrerFaktaPanel,
              requestApi,
            })}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};

export default FaktaContainer;
