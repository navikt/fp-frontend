import type { ProsessFellesMessageId } from '@navikt/fp-prosess-felles';
import type { UiKomponenterMessageId } from '@navikt/fp-ui-komponenter';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type ProsessUttakMessageId = keyof typeof nb | ProsessFellesMessageId | UiKomponenterMessageId | UtilsMessageId;
