import type { FaktaOmsorgMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaOmsorgMessageId;
    }
  }
}
