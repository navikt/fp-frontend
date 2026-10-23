import type { SakFagsakProfilMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakFagsakProfilMessageId;
    }
  }
}
