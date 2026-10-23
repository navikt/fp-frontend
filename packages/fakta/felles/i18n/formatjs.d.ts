import type { FaktaFellesMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaFellesMessageId;
    }
  }
}
