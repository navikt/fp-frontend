import { createContext, type JSX, type ReactNode, use, useMemo } from 'react';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { SideMenu } from '@navikt/ft-plattform-komponenter';

import { BehandlingDataContext } from '../context/BehandlingDataContext';
import { type FaktaPanelMedÅpentApInfo, type FaktaPanelMenyData, useFaktaPanelMenyData } from './useFaktaPanelMenyData';

import styles from './faktaMeny.module.css';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  setFaktaPanelMedÅpentApInfo?: (faktaPanelMedÅpentApInfo?: FaktaPanelMedÅpentApInfo) => void;
  children: ReactNode | ReactNode[];
}

export const FaktaMeny = ({ valgtFaktaSteg, valgtProsessSteg, setFaktaPanelMedÅpentApInfo, children }: Props) => {
  const intl = useIntl();

  const { oppdaterProsessStegOgFaktaPanelIUrl } = use(BehandlingDataContext);

  const { faktaPanelMenyData, settFaktaPanelMenyData } = useFaktaPanelMenyData(setFaktaPanelMedÅpentApInfo);

  //Denne er alltid false ved første render siden ingen paneler er registrert på dette tidspunktet
  const harFaktapaneler = faktaPanelMenyData.length > 0;

  return (
    <HStack className={styles['container']} wrap={false}>
      {harFaktapaneler && (
        <div className={styles['sideMenu']} data-testid="fakta-meny">
          <SideMenu
            heading={intl.formatMessage({ id: 'FaktaMeny.FaktaOm' })}
            links={faktaPanelMenyData.map(data => ({
              label: data.tekst,
              active: data.erAktiv,
              icon: data.harÅpentAksjonspunkt ? (
                <ExclamationmarkTriangleFillIcon color="var(--ax-warning-700)" />
              ) : undefined,
            }))}
            onClick={(index: number) => {
              oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, faktaPanelMenyData[index].id);
            }}
          />
        </div>
      )}
      <div className={styles['content']}>
        <FaktaMenyProvider
          valgtFaktaSteg={valgtFaktaSteg}
          settFaktaPanelMenyData={settFaktaPanelMenyData}
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
  settFaktaPanelMenyData: (data: FaktaPanelMenyData) => void;
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
