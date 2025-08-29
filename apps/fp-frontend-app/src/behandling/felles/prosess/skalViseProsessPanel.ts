import { VilkarType } from '@navikt/fp-kodeverk';
import type { Aksjonspunkt, Vilkar } from '@navikt/fp-types';

export const skalViseProsessPanel = (
  aksjonspunkter: Aksjonspunkt[] = [],
  vilkårKoder: VilkarType[] = [],
  vilkår: Vilkar[] = [],
): boolean => {
  const harAksjonspunkter = aksjonspunkter.length > 0;
  if (vilkårKoder.length === 0) {
    return harAksjonspunkter;
  }

  const harVilkår = vilkårKoder.some(vc => vilkår.some(v => v.vilkarType === vc));
  if (harVilkår && !harAksjonspunkter) {
    return true;
  }

  return harAksjonspunkter && harVilkår;
};
