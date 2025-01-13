import { VilkarType } from '@navikt/fp-kodeverk';
import { Aksjonspunkt, Vilkar } from '@navikt/fp-types';

export const skalViseProsessPanel = (
  aksjonspunkter: Aksjonspunkt[] = [],
  vilkarKoder: VilkarType[] = [],
  vilkar: Vilkar[] = [],
): boolean => {
  const harAksjonspunkter = aksjonspunkter.length > 0;
  if (vilkarKoder.length === 0) {
    return harAksjonspunkter;
  }

  const harVilkar = vilkarKoder.some(vc => vilkar.some(v => v.vilkarType === vc));
  if (harVilkar && !harAksjonspunkter) {
    return true;
  }

  return harAksjonspunkter && harVilkar;
};
