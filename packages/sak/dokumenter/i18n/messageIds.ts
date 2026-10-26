import type { UiKomponenterMessageId } from '@navikt/fp-ui-komponenter';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type SakDokumenterMessageId = keyof typeof nb | UiKomponenterMessageId | UtilsMessageId;
