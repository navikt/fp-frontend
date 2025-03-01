import { type ReactElement, use, useCallback, useMemo, useState } from 'react';

import { FlexColumn, FlexContainer, FlexRow } from '@navikt/ft-ui-komponenter';

import type { FaktaPanelInitProps } from '../typer/faktaPanelInitProps';
import type { FaktaPanelMenyData } from '../typer/faktaPanelMenyData';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { FaktaMeny } from './FaktaMeny';

import styles from './faktaContainer.module.css';

export const DEFAULT_FAKTA_KODE = 'default';

interface Props {
  hentPaneler?: (props: FaktaPanelInitProps) => ReactElement;
  valgtProsessSteg?: string;
  valgtFaktaSteg?: string;
  setApentFaktaPanel: (panelData?: { urlCode: string; text: string }) => void;
  apentFaktaPanelInfo?: { urlCode: string; text: string };
}

export const FaktaContainer = ({
  hentPaneler,
  valgtFaktaSteg,
  valgtProsessSteg,
  setApentFaktaPanel,
  apentFaktaPanelInfo,
}: Props) => {
  const { oppdaterProsessStegOgFaktaPanelIUrl } = use(BehandlingDataContext);

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
        setApentFaktaPanel({ urlCode: nyData.id, text: nyData.tekst ?? '' });
      }
    },
    [apentFaktaPanelInfo],
  );

  const menyDataSomVises = useMemo(() => menyData.filter(d => !!d.tekst), [menyData]);

  const oppdaterMenyValg = useCallback(
    (index: number) => {
      if (menyDataSomVises) {
        const panel = menyDataSomVises[index];
        oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, panel.id);
      }
    },
    [menyDataSomVises, valgtProsessSteg, oppdaterProsessStegOgFaktaPanelIUrl],
  );

  if (!hentPaneler) {
    return null;
  }

  return (
    <div className={styles.container}>
      <FlexContainer fullHeight>
        <FlexRow>
          <FlexColumn className={styles.sideMenu}>
            {menyDataSomVises && menyDataSomVises.length > 0 && (
              <FaktaMeny menyData={menyDataSomVises} oppdaterFaktaPanelIUrl={oppdaterMenyValg} />
            )}
          </FlexColumn>
          <FlexColumn className={styles.content}>
            {hentPaneler({
              valgtFaktaSteg,
              registrerFaktaPanel,
            })}
          </FlexColumn>
        </FlexRow>
      </FlexContainer>
    </div>
  );
};
