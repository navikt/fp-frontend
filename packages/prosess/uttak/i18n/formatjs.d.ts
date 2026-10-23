import type { ProsessUttakMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessUttakMessageId;
    }
  }
}
