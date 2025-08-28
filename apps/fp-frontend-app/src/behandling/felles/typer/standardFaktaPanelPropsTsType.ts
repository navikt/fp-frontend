import type { Aksjonspunkt, AlleKodeverk, Behandling } from '@navikt/fp-types';
import type { FaktaAksjonspunkt } from '@navikt/fp-types-avklar-aksjonspunkter';

export type StandardFaktaPanelProps = Readonly<{
  behandling: Behandling;
  alleKodeverk: AlleKodeverk;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  aksjonspunkterForPanel: Aksjonspunkt[];
  isReadOnly: boolean;
  submittable: boolean;
  harÅpneAksjonspunkter: boolean;
  submitCallback: (aksjonspunkterSomSkalLagres: FaktaAksjonspunkt | FaktaAksjonspunkt[]) => Promise<void>;
}>;
