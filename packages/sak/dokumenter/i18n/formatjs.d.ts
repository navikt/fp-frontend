import type { SakDokumenterMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakDokumenterMessageId;
    }
  }
}
