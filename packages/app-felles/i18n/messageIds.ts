import type { SakDekoratorMessageId } from '@navikt/fp-sak-dekorator';
import type { SakInfosiderMessageId } from '@navikt/fp-sak-infosider';

import type nb from './nb_NO.json';

export type AppFellesMessageId = keyof typeof nb | SakDekoratorMessageId | SakInfosiderMessageId;
