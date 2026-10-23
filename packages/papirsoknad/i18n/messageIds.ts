import type { PapirsoknadUiKomponenterMessageId } from '@navikt/fp-papirsoknad-ui-komponenter';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type PapirsoknadMessageId = keyof typeof nb | PapirsoknadUiKomponenterMessageId | UtilsMessageId;
