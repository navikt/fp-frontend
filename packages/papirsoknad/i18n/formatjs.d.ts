import type { PapirsoknadMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: PapirsoknadMessageId;
    }
  }
}
