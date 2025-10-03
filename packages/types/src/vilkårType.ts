import type { foreldrepenger_behandlingslager_behandling_vilkår_VilkårType } from './apiDtoGenerert';

export type VilkårType = foreldrepenger_behandlingslager_behandling_vilkår_VilkårType;

export const fødselsvilkårene = new Set<VilkårType>(['FP_VK_1', 'FP_VK_11']);
export const adopsjonsvilkårene = new Set<VilkårType>(['FP_VK_4', 'FP_VK_16']);
