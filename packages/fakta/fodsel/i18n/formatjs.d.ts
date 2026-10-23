import type { FaktaFodselMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaFodselMessageId;
    }
  }
}
