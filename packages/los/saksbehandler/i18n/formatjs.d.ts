import type { LosSaksbehandlerMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: LosSaksbehandlerMessageId;
    }
  }
}
