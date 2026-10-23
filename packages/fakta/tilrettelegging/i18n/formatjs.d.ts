import type { FaktaTilretteleggingMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaTilretteleggingMessageId;
    }
  }
}
