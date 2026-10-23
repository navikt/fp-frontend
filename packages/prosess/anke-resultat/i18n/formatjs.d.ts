import type { ProsessAnkeResultatMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessAnkeResultatMessageId;
    }
  }
}
