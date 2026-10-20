import { createContext, type ReactElement, use, useMemo } from 'react';

import type { Aksjonspunkt, AlleKodeverk, Behandling, BehandlingFpSak, Fagsak, Vilkår } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

import { ReadOnlyProvider } from './ReadOnlyContext';

type AksjonspunktType = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

type Props<AP_TYPE extends AksjonspunktType, B extends Behandling> = {
  fagsak: Fagsak;
  behandling: B;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkårForPanel: Vilkår[];
  harÅpentAksjonspunkt: boolean;
  isReadOnly: boolean;
  isSubmittable: boolean;
  submitCallback: (aksjonspunktData: AP_TYPE) => Promise<void>;
};

type PanelData<AP_TYPE extends AksjonspunktType, B extends Behandling> = Omit<Props<AP_TYPE, B>, 'isReadOnly'>;

const PanelDataContext = createContext<unknown>(null);

export const PanelDataProvider = <T extends AksjonspunktType, B extends Behandling = BehandlingFpSak>(
  props: {
    children: ReactElement | null;
  } & Props<T, B>,
) => {
  const { children, isReadOnly, ...panelData } = props;

  const value = useMemo(() => panelData, [panelData]);

  return (
    <PanelDataContext value={value}>
      <ReadOnlyProvider readOnly={isReadOnly}>{children}</ReadOnlyProvider>
    </PanelDataContext>
  );
};

export const usePanelDataContext = <
  AP_TYPE extends AksjonspunktType,
  B_TYPE extends Behandling = BehandlingFpSak,
>() => {
  const context = use(PanelDataContext);
  if (!context) {
    throw new Error('PanelContext.Provider er ikke satt opp');
  }
  return context as PanelData<AP_TYPE, B_TYPE>;
};
