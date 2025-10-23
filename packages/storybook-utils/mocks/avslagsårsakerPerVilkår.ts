import type { Avslagsarsak, KodeverkMedNavn, VilkårType } from '@navikt/fp-types';
import { alleKodeverk } from './alleKodeverk.ts';

export const avslagsårsakerPerVilkår:{ [K in VilkårType]: Array<Avslagsarsak> } = {
  FP_VK_3: ['1007'],
  FP_VK_4: ['1033', '1006', '1011', '1005', '1032', '1004', '1034'],
  FP_VK_1: ['1002', '1001', '1031', '1026', '1003', '1032'],
  FP_VK_2: ['1025', '1021', '1023', '1024', '1020'],
  '-': [],
  FP_VK_41: ['1041'],
  FP_VK_21: ['1035'],
  FP_VK_11: ['1027', '1029', '1028'],
  FP_VK_2_F: ['1023', '1025', '1052', '1021', '1020', '1024'],
  FP_VK_33: ['1034', '1033', '1018', '1017', '1016'],
  FP_VK_34: ['1019'],
  FP_VK_23: ['1035'],
  FP_VK_8: ['1034', '1033', '1015', '1004', '1014'],
  SVP_VK_1: ['1062', '1066', '1065', '1063', '1064', '1060', '1061'],
  FP_VK_16: ['1004', '1051'],
  FP_VK_5: ['1010', '1011', '1032', '1012', '1008', '1009', '1033', '1034'],
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
  FP_VK_2_L: ['1025', '1021', '1023', '1024', '1020'],
};

export const getAvslagsårsakerKodeverkForVilkår = (vilkårType: VilkårType): KodeverkMedNavn<'LineærAvslagsårsak'>[] => {
  const avslagsårsakerKoder = avslagsårsakerPerVilkår[vilkårType] || [];
  return alleKodeverk['LineærAvslagsårsak']
    .filter(kodeverk => (avslagsårsakerKoder.includes(kodeverk.kode)));
}