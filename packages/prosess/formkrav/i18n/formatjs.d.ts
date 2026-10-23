import type { ProsessFormkravMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessFormkravMessageId;
    }
  }
}
