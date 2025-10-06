import type { Aksjonspunkt, AksjonspunktKode } from '@navikt/fp-types';

export const harAksjonspunkt = (aksjonspunktKode: AksjonspunktKode, aksjonspunkter: Aksjonspunkt[]): boolean =>
  aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);

export const erAksjonspunktÅpent = (ap: { status: string }): boolean => ap.status === 'OPPR';

export const aksjonspunktIsOfType =
  (validAksjonspunktCodes: string[]) =>
  (aksjonspunktCode: string): boolean =>
    validAksjonspunktCodes.includes(aksjonspunktCode);
