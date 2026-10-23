import type { ProsessVedtakMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVedtakMessageId;
    }
  }
}
