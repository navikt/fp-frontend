import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakSokMessageId = keyof typeof nb | UtilsMessageId;
