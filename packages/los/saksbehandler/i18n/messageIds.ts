import type { AppFellesMessageId } from '@navikt/fp-app-felles';
import type { LosFellesMessageId } from '@navikt/fp-los-felles';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type LosSaksbehandlerMessageId = keyof typeof nb | AppFellesMessageId | LosFellesMessageId | UtilsMessageId;
