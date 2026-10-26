import type { ProsessAnkeTrygderettsbehandlingMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessAnkeTrygderettsbehandlingMessageId;
    }
  }
}
