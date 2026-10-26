import type { SakNotatMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakNotatMessageId;
    }
  }
}
