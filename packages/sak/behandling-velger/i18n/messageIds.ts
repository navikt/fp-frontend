import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakBehandlingVelgerMessageId = keyof typeof nb | UtilsMessageId;
