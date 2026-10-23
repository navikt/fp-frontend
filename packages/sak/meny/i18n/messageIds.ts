import type { FaktaVergeMessageId } from '@navikt/fp-fakta-verge';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakMenyMessageId = keyof typeof nb | FaktaVergeMessageId | UtilsMessageId;
