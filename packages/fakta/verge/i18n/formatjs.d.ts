import type { FaktaVergeMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaVergeMessageId;
    }
  }
}
