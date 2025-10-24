import type { Vilkar } from '@navikt/fp-types';

import { avslagsårsakerPerVilkår } from '../mocks/avslagsårsakerPerVilkår';

export const lagVilkår = (props: Partial<Vilkar>): Vilkar => {
  return {
    vilkarType: 'FP_VK_1',
    aktuelleAvslagsårsaker: avslagsårsakerPerVilkår[props.vilkarType ?? 'FP_VK_1'],
    lovReferanse: '§§Dette er en lovreferanse',
    overstyrbar: true,
    vilkarStatus: 'IKKE_VURDERT',
    ...props,
  };
};
