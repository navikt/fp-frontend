import type { ProsessInnsynMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessInnsynMessageId;
    }
  }
}
