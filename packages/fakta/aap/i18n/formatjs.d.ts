import type { FaktaAapMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaAapMessageId;
    }
  }
}
