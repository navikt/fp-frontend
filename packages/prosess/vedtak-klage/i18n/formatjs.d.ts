import type { ProsessVedtakKlageMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVedtakKlageMessageId;
    }
  }
}
