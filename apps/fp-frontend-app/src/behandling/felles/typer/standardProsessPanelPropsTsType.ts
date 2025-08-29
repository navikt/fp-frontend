import type { Aksjonspunkt, AlleKodeverk, Behandling, Fagsak, Vilkar } from '@navikt/fp-types';
import type { ProsessAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

export interface StandardProsessPanelProps {
  behandling: Behandling;
  fagsak: Fagsak;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  submitCallback: (aksjonspunkterSomSkalLagres: ProsessAksjonspunkt | ProsessAksjonspunkt[]) => Promise<void>;
  status: string;
  isReadOnly: boolean;
  readOnlySubmitButton: boolean;
  vilkar: Vilkar[];
  harÅpneAksjonspunkter: boolean;
}
