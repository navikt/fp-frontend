import type { SakHistorikkMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakHistorikkMessageId;
    }
  }
}
