import type { SakSokMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakSokMessageId;
    }
  }
}
