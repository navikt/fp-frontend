import type { LosFellesMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: LosFellesMessageId;
    }
  }
}
