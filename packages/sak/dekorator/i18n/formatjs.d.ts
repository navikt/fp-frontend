import type { SakDekoratorMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakDekoratorMessageId;
    }
  }
}
