import type { Aksjonspunkt } from '@navikt/fp-types';

export const harAksjonspunkt = (aksjonspunktKode: string, aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);
