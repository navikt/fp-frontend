import type { ProsessVedtakInnsynMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVedtakInnsynMessageId;
    }
  }
}
