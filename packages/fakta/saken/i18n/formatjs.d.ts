import type { FaktaSakenMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaSakenMessageId;
    }
  }
}
