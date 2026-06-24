import { createContext, type JSX, type ReactNode, useMemo, useRef } from 'react';
import { useIntl } from 'react-intl';

import { ExclamationmarkTriangleFillIcon } from '@navikt/aksel-icons';
import { HStack } from '@navikt/ds-react';
import { SideMenu } from '@navikt/ft-plattform-komponenter';

import type { Behandling } from '@navikt/fp-types';

import { BEHANDLING_SNARVEG_IDER } from '../../../snarveger/snarvegDefinisjoner';
import { useRegistrerSnarveg } from '../../../snarveger/SnarvegerContext';
import { useFokuserVedPanelbyte } from '../../../snarveger/useTastaturfokus';
import { useBehandlingDataContext } from '../context/BehandlingDataContext';
import { finnNabopanelId } from '../menyNavigasjon';
import { type FaktaPanelMedÅpentApInfo, type FaktaPanelMenyData, useFaktaPanelMenyData } from './useFaktaPanelMenyData';

import styles from './faktaMeny.module.css';

interface Props {
  valgtProsessSteg: string | undefined;
  valgtFaktaSteg: string | undefined;
  setFaktaPanelMedÅpentApInfo?: (faktaPanelMedÅpentApInfo?: FaktaPanelMedÅpentApInfo) => void;
  children: ReactNode | ReactNode[];
}

export const FaktaMeny = <T extends Behandling>({
  valgtFaktaSteg,
  valgtProsessSteg,
  setFaktaPanelMedÅpentApInfo,
  children,
}: Props) => {
  const intl = useIntl();

  const { oppdaterProsessStegOgFaktaPanelIUrl } = useBehandlingDataContext<T>();

  const { faktaPanelMenyData, settFaktaPanelMenyData } = useFaktaPanelMenyData(setFaktaPanelMedÅpentApInfo);

  const innholdRef = useRef<HTMLDivElement>(null);
  const planleggInnholdsfokus = useFokuserVedPanelbyte(valgtFaktaSteg, () =>
    innholdRef.current?.focus({ preventScroll: true }),
  );

  const byttFaktaPanel = (retning: 1 | -1) => {
    const nyId = finnNabopanelId(faktaPanelMenyData, retning);
    if (nyId) {
      planleggInnholdsfokus();
      oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, nyId);
    }
  };

  useRegistrerSnarveg(BEHANDLING_SNARVEG_IDER.NESTE_FAKTA, () => byttFaktaPanel(1));
  useRegistrerSnarveg(BEHANDLING_SNARVEG_IDER.FORRIGE_FAKTA, () => byttFaktaPanel(-1));

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
              oppdaterProsessStegOgFaktaPanelIUrl(valgtProsessSteg, faktaPanelMenyData[index]!.id);
            }}
          />
        </div>
      )}
      <div className={styles['content']} ref={innholdRef} tabIndex={-1}>
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
