import { createContext, type ReactElement, useContext, useMemo } from 'react';

import type { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

type Props<AP_TYPE> = {
  behandling: Behandling;
  fagsak: Fagsak;
  aksjonspunkterForPanel: Aksjonspunkt[];
  harÅpneAksjonspunkter: boolean;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  isReadOnly: boolean;
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
};

const PanelDataContext = createContext<Props<any> | null>(null);

export const PanelDataProvider = (
  props: {
    children: ReactElement | null;
  } & Props<unknown>,
) => {
  const { children, ...otherProps } = props;

  const value = useMemo(() => otherProps, [otherProps]);

  return <PanelDataContext value={value}>{children}</PanelDataContext>;
};

export const usePanelDataContext = <AP_TYPE,>() => {
  const context = useContext<Props<AP_TYPE> | null>(PanelDataContext);
  if (!context) {
    throw new Error('PanelContext.Provider er ikke satt opp');
  }
  return context;
};
