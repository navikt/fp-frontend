import { createContext, type JSX, type ReactNode, useMemo } from 'react';

import { ProcessMenu, ProcessMenuStepType } from '@navikt/ft-plattform-komponenter';

import type { Behandling, VilkårUtfallType } from '@navikt/fp-types';

import { BEHANDLING_SNARVEG_IDER } from '../../../snarveger/snarvegDefinisjoner';
import { useRegistrerSnarveg } from '../../../snarveger/SnarvegerContext';
import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { finnNabopanelId } from '../menyNavigasjon';
import { BehandlingHenlagtPanel } from './BehandlingHenlagtPanel';
import { type ProsessPanelMenyData, useProsessPanelMenyData } from './useProsessPanelMenyData';

import styles from './prosessMeny.module.css';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  children: ReactNode[];
}

export const ProsessMeny = <T extends Behandling>({ valgtProsessSteg, valgtFaktaSteg, children }: Props) => {
  const { oppdaterProsessStegOgFaktaPanelIUrl, behandling } = useBehandlingDataContext<T>();

  const { prosessPanelMenyData, settProsessPanelMenyData } = useProsessPanelMenyData();

  const oppdaterProsessPanelIUrl = (index: number) => {
    const panel = prosessPanelMenyData[index];
    const nyvalgtProsessSteg = panel?.erAktiv ? undefined : panel?.id;
    oppdaterProsessStegOgFaktaPanelIUrl(nyvalgtProsessSteg, valgtFaktaSteg);
  };

  const byttProsessPanel = (retning: 1 | -1) => {
    const nyId = finnNabopanelId(prosessPanelMenyData, retning);
    if (nyId) {
      oppdaterProsessStegOgFaktaPanelIUrl(nyId, valgtFaktaSteg);
    }
  };

  useRegistrerSnarveg(BEHANDLING_SNARVEG_IDER.NESTE_PROSESS, () => byttProsessPanel(1));
  useRegistrerSnarveg(BEHANDLING_SNARVEG_IDER.FORRIGE_PROSESS, () => byttProsessPanel(-1));

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

  return <ProsessMenyContext value={values}>{children}</ProsessMenyContext>;
};

const finnProsessmenyType = (status?: VilkårUtfallType, harÅpentAksjonspunkt?: boolean): ProcessMenuStepType => {
  if (harÅpentAksjonspunkt) {
    return ProcessMenuStepType.warning;
  }
  if (status === 'OPPFYLT') {
    return ProcessMenuStepType.success;
  }
  if (status === 'IKKE_OPPFYLT') {
    return ProcessMenuStepType.danger;
  }
  return ProcessMenuStepType.default;
};
