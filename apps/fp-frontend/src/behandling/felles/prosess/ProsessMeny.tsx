import { createContext, type JSX, type ReactNode, use, useMemo } from 'react';

import { ProcessMenu, ProcessMenuStepType } from '@navikt/ft-plattform-komponenter';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';

import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { BehandlingHenlagtPanel } from './BehandlingHenlagtPanel';
import { type ProsessPanelMenyData, useProsessPanelMenyData } from './useProsessPanelMenyData';

import styles from './prosessMeny.module.css';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  children: ReactNode[];
}

export const ProsessMeny = ({ valgtProsessSteg, valgtFaktaSteg, children }: Props) => {
  const { oppdaterProsessStegOgFaktaPanelIUrl } = use(BehandlingDataContext);
  const { behandling } = use(BehandlingDataContext);

  const { prosessPanelMenyData, settProsessPanelMenyData } = useProsessPanelMenyData();

  const oppdaterProsessPanelIUrl = (index: number) => {
    const panel = prosessPanelMenyData[index];
    const nyvalgtProsessSteg = panel.erAktiv ? undefined : panel.id;
    oppdaterProsessStegOgFaktaPanelIUrl(nyvalgtProsessSteg, valgtFaktaSteg);
  };

  const steg = prosessPanelMenyData.map(data => {
    const type = finnProsessmenyType(data.status, data.harÅpentAksjonspunkt);
    return {
      label: data.tekst,
      isActive: data.erAktiv,
      type,
    };
  });

  return (
    <div className={styles['container']}>
      <div className={styles['meny']} data-testid="prosess-meny">
        <ProcessMenu
          steps={steg}
          onClick={oppdaterProsessPanelIUrl}
          stepArrowContainerStyle={styles['stepArrowContainer']}
        />
      </div>
      <ProsessMenyProvider
        valgtProsessSteg={valgtProsessSteg}
        settProsessPanelMenyData={settProsessPanelMenyData}
        prosessPanelMenyData={prosessPanelMenyData}
      >
        {children}
      </ProsessMenyProvider>
      {behandling.behandlingHenlagt && (
        <BehandlingHenlagtPanel
          valgtProsessSteg={valgtProsessSteg}
          settProsessPanelMenyData={settProsessPanelMenyData}
        />
      )}
    </div>
  );
};

type Context = {
  valgtProsessSteg: string | undefined;
  settProsessPanelMenyData: (data: ProsessPanelMenyData) => void;
  prosessPanelMenyData: ProsessPanelMenyData[];
};

type PropsContext = {
  children: ReactNode[];
} & Context;

export const ProsessMenyContext = createContext<Context>({} as Context);

const ProsessMenyProvider = (props: PropsContext): JSX.Element => {
  const { children, ...otherProps } = props;

  const values = useMemo(() => otherProps, [otherProps]);

  return <ProsessMenyContext.Provider value={values}>{children}</ProsessMenyContext.Provider>;
};

const finnProsessmenyType = (status?: string, harÅpentAksjonspunkt?: boolean): ProcessMenuStepType => {
  if (harÅpentAksjonspunkt) {
    return ProcessMenuStepType.warning;
  }
  if (status === VilkarUtfallType.OPPFYLT) {
    return ProcessMenuStepType.success;
  }
  if (status === VilkarUtfallType.IKKE_OPPFYLT) {
    return ProcessMenuStepType.danger;
  }
  return ProcessMenuStepType.default;
};
