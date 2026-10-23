import type { FaktaOmsorgOgRettMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaOmsorgOgRettMessageId;
    }
  }
}
