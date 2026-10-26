import type { PapirsoknadUiKomponenterMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: PapirsoknadUiKomponenterMessageId;
    }
  }
}
