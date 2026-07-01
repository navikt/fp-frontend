import { type ReactElement } from 'react';

import type { Aksjonspunkt, AlleKodeverk, Behandling, BehandlingFpSak, Fagsak, Vilkår } from '@navikt/fp-types';
import type { FaktaAksjonspunkt, ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';
import { PanelDataProvider } from '@navikt/fp-utils';

export type AksjonspunktData = FaktaAksjonspunkt | FaktaAksjonspunkt[] | ProsessAksjonspunkt | ProsessAksjonspunkt[];

/**
 * Felles datasett som alle fakta- og prosesspaneler sender vidare til formene sine.
 * Definert éin stad slik at typane og innmatinga til {@link PanelDataProvider} ikkje
 * blir duplisert per panel-variant.
 */
export type FellesPanelData<AP extends AksjonspunktData, T extends Behandling = BehandlingFpSak> = {
  behandling: T;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  vilkårForPanel: Vilkår[];
  harÅpentAksjonspunkt: boolean;
  isReadOnly: boolean;
  isSubmittable: boolean;
  submitCallback: (aksjonspunkter: AP) => Promise<void>;
};

interface Props<AP extends AksjonspunktData, T extends Behandling> {
  panelData: FellesPanelData<AP, T>;
  children: ReactElement | null;
}

export const BehandlingPanelDataProvider = <AP extends AksjonspunktData, T extends Behandling = BehandlingFpSak>({
  panelData,
  children,
}: Props<AP, T>) => (
  <PanelDataProvider<AP, T>
    behandling={panelData.behandling}
    fagsak={panelData.fagsak}
    alleKodeverk={panelData.alleKodeverk}
    alleMerknaderFraBeslutter={panelData.alleMerknaderFraBeslutter}
    aksjonspunkterForPanel={panelData.aksjonspunkterForPanel}
    vilkårForPanel={panelData.vilkårForPanel}
    harÅpentAksjonspunkt={panelData.harÅpentAksjonspunkt}
    isReadOnly={panelData.isReadOnly}
    isSubmittable={panelData.isSubmittable}
    submitCallback={panelData.submitCallback}
  >
    {children}
  </PanelDataProvider>
);
