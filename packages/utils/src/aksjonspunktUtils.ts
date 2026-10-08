import type { Aksjonspunkt } from '@navikt/fp-types';

export const harAksjonspunkt = (
  aksjonspunktKode: Aksjonspunkt['definisjon'],
  aksjonspunkter: Aksjonspunkt[],
): boolean => aksjonspunkter.some(ap => ap.definisjon === aksjonspunktKode);

export const erAksjonspunktÅpent = (ap: Pick<Aksjonspunkt, 'status'>): boolean => ap.status === 'OPPR';
