import type { ModalSettPaVentMessageId } from '@navikt/fp-modal-sett-pa-vent';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakMenySettPaVentMessageId = keyof typeof nb | ModalSettPaVentMessageId | UtilsMessageId;
