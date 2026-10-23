import type { FaktaFellesMessageId } from '@navikt/fp-fakta-felles';
import type { UiKomponenterMessageId } from '@navikt/fp-ui-komponenter';
import type { UtilsMessageId } from '@navikt/fp-utils';

import type nb from './nb_NO.json';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: keyof typeof nb | FaktaFellesMessageId | UiKomponenterMessageId | UtilsMessageId;
    }
  }
}
