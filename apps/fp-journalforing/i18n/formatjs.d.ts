import type { AppFellesMessageId } from '@navikt/fp-app-felles';
import type { SakDekoratorMessageId } from '@navikt/fp-sak-dekorator';
import type { SakInfosiderMessageId } from '@navikt/fp-sak-infosider';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof nb | AppFellesMessageId | SakDekoratorMessageId | SakInfosiderMessageId | UtilsMessageId;
    }
  }
}
