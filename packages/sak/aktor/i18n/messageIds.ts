import type { SakVisittkortMessageId } from '@navikt/fp-sak-visittkort';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakAktorMessageId = keyof typeof nb | SakVisittkortMessageId | UtilsMessageId;
