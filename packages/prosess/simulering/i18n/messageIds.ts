import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type ProsessSimuleringMessageId = keyof typeof nb | UtilsMessageId;
