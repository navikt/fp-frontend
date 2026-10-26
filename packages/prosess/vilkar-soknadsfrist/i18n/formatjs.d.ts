import type { ProsessVilkarSoknadsfristMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVilkarSoknadsfristMessageId;
    }
  }
}
