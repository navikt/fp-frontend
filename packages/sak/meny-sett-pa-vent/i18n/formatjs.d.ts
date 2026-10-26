import type { SakMenySettPaVentMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenySettPaVentMessageId;
    }
  }
}
