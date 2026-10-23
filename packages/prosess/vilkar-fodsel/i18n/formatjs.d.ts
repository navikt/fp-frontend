import type { ProsessVilkarFodselMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVilkarFodselMessageId;
    }
  }
}
