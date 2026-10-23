import type { SakAktorMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakAktorMessageId;
    }
  }
}
