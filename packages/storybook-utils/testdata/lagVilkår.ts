import type { Avslagsarsak, Vilkar, VilkårType } from '@navikt/fp-types';

export const lagVilkår = (vilkarType: VilkårType, options?: Partial<Vilkar>): Vilkar => {
  return {
    vilkarType,
    aktuelleAvslagsårsaker: avslagsårsakerPerVilkår[vilkarType],
    lovReferanse: lovReferansePerVilkår[vilkarType],
    overstyrbar: true,
    vilkarStatus: 'IKKE_VURDERT',
    ...options,
  };
};

const lovReferansePerVilkår: Record<VilkårType, string> = {
  FP_VK_1: '§ 14-17, 1. ledd',
  FP_VK_11: '§ 14-5, 1. ledd',
  FP_VK_6: '§ 14-17',
  FP_VK_2: '§ 14-2',
  FP_VK_2_F: '§ 14-17, femte ledd',
  FP_VK_2_L: '§ 14-2',
  FP_VK_3: '§ 22-13, 2. ledd',
  FP_VK_34: '§§ 21-3',
  FP_VK_21: '§ 14-6 og 14-10',
  FP_VK_23: '§ 14-6',
  FP_VK_41: '§ 14-7',
  SVP_VK_1: '§ 14-4',
  '-': '',
};

const avslagsårsakerPerVilkår: Record<VilkårType, Array<Avslagsarsak>> = {
  FP_VK_1: ['1002', '1001', '1031', '1026', '1003', '1032'],
  FP_VK_2: ['1025', '1021', '1023', '1024', '1020'],
  FP_VK_2_F: ['1023', '1025', '1052', '1021', '1020', '1024'],
  FP_VK_2_L: ['1025', '1021', '1023', '1024', '1020'],
  FP_VK_3: ['1007'],
  FP_VK_6: [
    '1004',
    '1009',
    '1014',
    '1015',
    '1016',
    '1017',
    '1012',
    '1033',
    '1051',
    '1006',
    '1034',
    '1008',
    '1018',
    '1005',
    '1010',
    '1011',
    '1032',
  ],
  FP_VK_11: ['1027', '1028', '1029', '1034'],
  FP_VK_21: ['1035'],
  FP_VK_23: ['1035'],
  FP_VK_34: ['1019'],
  FP_VK_41: ['1041'],
  SVP_VK_1: ['1062', '1066', '1065', '1063', '1064', '1060', '1061'],
  '-': [],
};
