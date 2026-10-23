import type { ProsessSoknadsfristMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessSoknadsfristMessageId;
    }
  }
}
