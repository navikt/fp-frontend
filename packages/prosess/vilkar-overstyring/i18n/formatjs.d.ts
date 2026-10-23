import type { ProsessVilkarOverstyringMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVilkarOverstyringMessageId;
    }
  }
}
