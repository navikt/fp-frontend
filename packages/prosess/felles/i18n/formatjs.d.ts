import type { ProsessFellesMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessFellesMessageId;
    }
  }
}
