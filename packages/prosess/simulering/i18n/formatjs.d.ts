import type { ProsessSimuleringMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessSimuleringMessageId;
    }
  }
}
