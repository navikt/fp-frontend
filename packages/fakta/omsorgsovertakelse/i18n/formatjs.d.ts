import type { FaktaOmsorgsovertakelseMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaOmsorgsovertakelseMessageId;
    }
  }
}
