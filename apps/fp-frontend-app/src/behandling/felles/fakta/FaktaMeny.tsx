import { createContext, type JSX, type ReactNode, use, useMemo } from 'react';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { SideMenu } from '@navikt/ft-plattform-komponenter';

import type { FaktaPanelMenyData } from '../typer/faktaPanelMenyData';
import { BehandlingDataContext } from '../utils/behandlingDataContext';
import { type FaktaPanelInfo, useFaktaMenyData } from './useFaktaMenyData';

import styles from './faktaMeny.module.css';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  setÅpentFaktaPanelInfo?: (panelData?: FaktaPanelInfo) => void;
  children: ReactNode | ReactNode[];
}

export const FaktaMeny = ({ valgtFaktaSteg, valgtProsessSteg, setÅpentFaktaPanelInfo, children }: Props) => {
  const intl = useIntl();

  const { oppdaterProsessStegOgFaktaPanelIUrl } = use(BehandlingDataContext);

  const { faktaPanelMenyData, settProsessPanelMenyData } = useFaktaMenyData(setÅpentFaktaPanelInfo);

  //Denne er alltid false ved første render siden ingen paneler er registrert på dette tidspunktet
  const harFaktapaneler = faktaPanelMenyData.length > 0;

  return (
    <HStack className={styles.container} wrap={false}>
      {harFaktapaneler && (
        <div className={styles.sideMenu}>
          <SideMenu
            heading={intl.formatMessage({ id: 'FaktaMeny.FaktaOm' })}
            links={faktaPanelMenyData.map(data => ({
              label: data.tekst,
              active: data.erAktiv,
              icon: data.harApneAksjonspunkter ? (
                <ExclamationmarkTriangleFillIcon color="var(--a-orange-600)" />
              ) : undefined,
            }))}
            onClick={(index: number) => {
              oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, faktaPanelMenyData[index].id);
            }}
          />
        </div>
      )}
      <div className={styles.content}>
        <FaktaMenyProvider
          valgtFaktaSteg={valgtFaktaSteg}
          registrerFaktaPanel={settProsessPanelMenyData}
          faktaPanelMenyData={faktaPanelMenyData}
        >
          {children}
        </FaktaMenyProvider>
      </div>
    </HStack>
  );
};

type Context = {
  valgtFaktaSteg: string | undefined;
  registrerFaktaPanel: (data: FaktaPanelMenyData) => void;
  faktaPanelMenyData: FaktaPanelMenyData[];
};

type PropsContext = {
  children: ReactNode | ReactNode[];
} & Context;

export const FaktaMenyContext = createContext<Context>({} as Context);

const FaktaMenyProvider = (props: PropsContext): JSX.Element => {
  const { children, ...otherProps } = props;

  const values = useMemo(() => otherProps, [otherProps]);

  return <FaktaMenyContext.Provider value={values}>{children}</FaktaMenyContext.Provider>;
};
