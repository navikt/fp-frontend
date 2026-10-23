import type { ProsessFellesMessageId } from '@navikt/fp-prosess-felles';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof nb | ProsessFellesMessageId | UtilsMessageId;
    }
  }
}
