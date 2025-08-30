import type { foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen } from '@navikt/fp-types';

export enum KonsekvensForYtelsenEnum {
  ENDRING_I_BEREGNING = 'ENDRING_I_BEREGNING',
  ENDRING_I_UTTAK = 'ENDRING_I_UTTAK',
  ENDRING_I_FORDELING_AV_YTELSEN = 'ENDRING_I_FORDELING_AV_YTELSEN',
  INGEN_ENDRING = 'INGEN_ENDRING',
  FORELDREPENGER_OPPHØRER = 'FORELDREPENGER_OPPHØRER',
  UDEFINERT = '-',
}

export type KonsekvensForYtelsen = foreldrepenger_behandlingslager_behandling_KonsekvensForYtelsen;
