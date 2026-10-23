import type { AppFellesMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: AppFellesMessageId;
    }
  }
}
