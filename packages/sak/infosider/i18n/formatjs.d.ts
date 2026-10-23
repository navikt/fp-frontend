import type { SakInfosiderMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakInfosiderMessageId;
    }
  }
}
