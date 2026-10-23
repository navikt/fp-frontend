import type { ModalSettPaVentMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ModalSettPaVentMessageId;
    }
  }
}
