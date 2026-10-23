import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type PapirsoknadUiKomponenterMessageId = keyof typeof nb | UtilsMessageId;
