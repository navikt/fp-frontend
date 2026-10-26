import type { SakMenyMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenyMessageId;
    }
  }
}
