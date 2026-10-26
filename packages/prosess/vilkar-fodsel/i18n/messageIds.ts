import type { ProsessFellesMessageId } from '@navikt/fp-prosess-felles';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type ProsessVilkarFodselMessageId = keyof typeof nb | ProsessFellesMessageId | UtilsMessageId;
