import { createContext, type ReactElement, useContext, useMemo } from 'react';

import type { Aksjonspunkt, AlleKodeverk, Behandling, BehandlingFpSak, Fagsak, Vilkar } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

type AksjonspunktType = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

type Props<AP_TYPE extends AksjonspunktType, B extends Behandling> = {
  fagsak: Fagsak;
  behandling: B;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkårForPanel: Vilkar[];
  harÅpentAksjonspunkt: boolean;
  isReadOnly: boolean;
  isSubmittable: boolean;
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
};

const PanelDataContext = createContext<unknown>(null);

export const PanelDataProvider = <T extends AksjonspunktType, B extends Behandling = BehandlingFpSak>(
  props: {
    children: ReactElement | null;
  } & Props<T, B>,
) => {
  const { children, ...otherProps } = props;

  const value = useMemo(() => otherProps, [otherProps]);

  return <PanelDataContext value={value}>{children}</PanelDataContext>;
};

export const usePanelDataContext = <
  AP_TYPE extends AksjonspunktType,
  B_TYPE extends Behandling = BehandlingFpSak,
>() => {
  const context = useContext(PanelDataContext);
  if (!context) {
    throw new Error('PanelContext.Provider er ikke satt opp');
  }
  return context as Props<AP_TYPE, B_TYPE>;
};
