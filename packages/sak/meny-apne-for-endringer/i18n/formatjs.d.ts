import type { SakMenyApneForEndringerMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenyApneForEndringerMessageId;
    }
  }
}
