import type { foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon } from './apiDtoGenerert';

export type AksjonspunktKode = foreldrepenger_behandlingslager_behandling_aksjonspunkt_AksjonspunktDefinisjon;

type Subset<TParent, TSubset extends TParent> = TSubset;

export type VilkårOverstyringAksjonspunkter = Subset<
  AksjonspunktKode,
  '6006' | '6004' | '6003' | '6005' | '6017' | '6012' | '6010' | '6009' | '6011'
>;

export type OverstyringAksjonspunkter = Subset<AksjonspunktKode, VilkårOverstyringAksjonspunkter | '6019'>;
