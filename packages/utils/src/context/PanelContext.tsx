import { createContext, ReactElement, useContext, useMemo } from 'react';

import { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak } from '@navikt/fp-types';

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

const PanelContext = createContext<Props<any> | null>(null);

export const PanelProvider = (
  props: {
    children: ReactElement | null;
  } & Props<unknown>,
) => {
  const { children, ...otherProps } = props;

  const value = useMemo(() => otherProps, [otherProps]);

  return <PanelContext value={value}>{children}</PanelContext>;
};

export const usePanelContext = <AP_TYPE,>() => {
  const context = useContext<Props<AP_TYPE> | null>(PanelContext);
  if (!context) {
    throw new Error('PanelContext.Provider er ikke satt opp');
  }
  return context;
};
