import type { FaktaMedlemskapMessageId } from '@navikt/fp-fakta-medlemskap';
import type { ProsessFellesMessageId } from '@navikt/fp-prosess-felles';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type ProsessVilkarOverstyringMessageId =
  keyof typeof nb | FaktaMedlemskapMessageId | ProsessFellesMessageId | UtilsMessageId;
