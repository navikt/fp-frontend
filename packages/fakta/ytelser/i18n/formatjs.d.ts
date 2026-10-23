import type { FaktaYtelserMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaYtelserMessageId;
    }
  }
}
