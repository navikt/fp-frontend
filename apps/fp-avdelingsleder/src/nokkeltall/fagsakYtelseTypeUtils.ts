import type { AkselColorRole } from '@navikt/ds-tokens/types';

import type { LosFagsakYtelseType } from '@navikt/fp-types';

export const ALLE_YTELSER: LosFagsakYtelseType[] = ['FP', 'SVP', 'ES'];
export const fagsakYtelseTypeAkselFarger: Record<LosFagsakYtelseType, AkselColorRole> = {
  ['FP']: 'accent',
  ['SVP']: 'warning',
  ['ES']: 'success',
};
