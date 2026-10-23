import type { SakVisittkortMessageId } from '@navikt/fp-sak-visittkort';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof nb | SakVisittkortMessageId | UtilsMessageId;
    }
  }
}
