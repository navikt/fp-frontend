import type { ProsessVilkarOpptjeningMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVilkarOpptjeningMessageId;
    }
  }
}
