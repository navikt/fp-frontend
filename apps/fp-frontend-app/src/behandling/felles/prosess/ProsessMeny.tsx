import { createContext, type JSX, type ReactNode, use, useMemo } from 'react';

import { ProcessMenu, ProcessMenuStepType } from '@navikt/ft-plattform-komponenter';

import { VilkarUtfallType } from '@navikt/fp-kodeverk';

import { BehandlingHenlagtPanel } from '../prosess/BehandlingHenlagtPanel';
import type { ProsessPanelMenyData } from '../typer/prosessPanelMenyData';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { useProsessMenyData } from './useProsessMenyData';

import styles from '../prosess/arrowForProcessMenu.module.css';
import prosessStyles from './prosessMeny.module.css';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  children: ReactNode[];
}

export const ProsessMeny = ({ valgtProsessSteg, valgtFaktaSteg, children }: Props) => {
  const { prosessPanelMenyData, oppdaterProsessPanelIUrl, registrerProsessPanel } = useProsessMenyData(valgtFaktaSteg);
  const { behandling } = use(BehandlingDataContext);

  const steg = prosessPanelMenyData.map(data => {
    const type = finnProsessmenyType(data.status, data.harApentAksjonspunkt);
    return {
      label: data.tekst ?? '',
      isActive: data.erAktiv,
      type,
    };
  });

  return (
    <div className={prosessStyles.container}>
      <div className={prosessStyles.meny}>
        <ProcessMenu
          steps={steg}
          onClick={oppdaterProsessPanelIUrl}
          stepArrowContainerStyle={styles.stepArrowContainer}
        />
      </div>
      <ProsessMenyProvider
        valgtProsessSteg={valgtProsessSteg}
        registrerProsessPanel={registrerProsessPanel}
        prosessPanelMenyData={prosessPanelMenyData}
      >
        {children}
      </ProsessMenyProvider>
      {behandling.behandlingHenlagt && (
        <BehandlingHenlagtPanel valgtProsessSteg={valgtProsessSteg} registrerProsessPanel={registrerProsessPanel} />
      )}
    </div>
  );
};

type Context = {
  valgtProsessSteg: string | undefined;
  registrerProsessPanel: (data: ProsessPanelMenyData) => void;
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

const finnProsessmenyType = (status?: string, harApentAksjonspunkt?: boolean): ProcessMenuStepType => {
  if (harApentAksjonspunkt) {
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
