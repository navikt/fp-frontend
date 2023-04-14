import { Aksjonspunkt } from '@navikt/ft-types';
import { Vilkar } from '@navikt/fp-types';

const skalViseProsessPanel = (
  aksjonspunkter: Aksjonspunkt[] = [],
  vilkarKoder: string[] = [],
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

export default skalViseProsessPanel;
