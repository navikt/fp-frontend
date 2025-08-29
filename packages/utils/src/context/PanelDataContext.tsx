import { createContext, type ReactElement, useContext, useMemo } from 'react';

import type { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

type AksjonspunktType = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

type Props<AP_TYPE extends AksjonspunktType> = {
  behandling: Behandling;
  fagsak: Fagsak;
  aksjonspunkterForPanel: Aksjonspunkt[];
  harÅpentAksjonspunkt: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  isReadOnly: boolean;
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
};

const PanelDataContext = createContext<Props<AksjonspunktType> | null>(null);

export const PanelDataProvider = (
  props: {
    children: ReactElement | null;
  } & Props<AksjonspunktType>,
) => {
  const { children, ...otherProps } = props;

  const value = useMemo(() => otherProps, [otherProps]);

  return <PanelDataContext value={value}>{children}</PanelDataContext>;
};

export const usePanelDataContext = <AP_TYPE extends AksjonspunktType>() => {
  const context = useContext<Props<AP_TYPE> | null>(PanelDataContext);
  if (!context) {
    throw new Error('PanelContext.Provider er ikke satt opp');
  }
  return context;
};
