import type { FaktaFellesMessageId } from '@navikt/fp-fakta-felles';
import type { UiKomponenterMessageId } from '@navikt/fp-ui-komponenter';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

export type FaktaPermisjonMessageId = keyof typeof nb | FaktaFellesMessageId | UiKomponenterMessageId | UtilsMessageId;
