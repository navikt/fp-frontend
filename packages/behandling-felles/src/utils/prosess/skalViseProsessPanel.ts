import { Aksjonspunkt, Vilkar } from '@fpsak-frontend/types';

const skalViseProsessPanel = (
  aksjonspunkter: Aksjonspunkt[] = [],
  vilkarKoder: string[] = [],
  vilkar: Vilkar[] = [],
): boolean => {
  const harAksjonspunkter = aksjonspunkter.length > 0;
  if (vilkarKoder.length === 0) {
    return harAksjonspunkter;
  }

  const harVilkar = vilkarKoder.some((vc) => vilkar.some((v) => v.vilkarType.kode === vc));
  if (harVilkar && !harAksjonspunkter) {
    return true;
  }

  return harAksjonspunkter && harVilkar;
};

export default skalViseProsessPanel;
