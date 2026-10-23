import type { ProsessAnkeMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessAnkeMessageId;
    }
  }
}
