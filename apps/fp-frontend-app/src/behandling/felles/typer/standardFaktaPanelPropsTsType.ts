import type { Aksjonspunkt, AlleKodeverk, Behandling } from '@navikt/fp-types';

export type StandardFaktaPanelProps = Readonly<{
  behandling: Behandling;
  aksjonspunkter: Aksjonspunkt[];
  readOnly: boolean;
  submittable: boolean;
  harApneAksjonspunkter: boolean;
  alleMerknaderFraBeslutter: { [key: string]: { notAccepted?: boolean } };
  submitCallback: (aksjonspunktData: any) => Promise<void>;
  alleKodeverk: AlleKodeverk;
}>;
