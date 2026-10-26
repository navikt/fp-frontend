import type { ProsessKlagevurderingMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessKlagevurderingMessageId;
    }
  }
}
