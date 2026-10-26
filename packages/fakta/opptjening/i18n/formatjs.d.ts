import type { FaktaOpptjeningMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaOpptjeningMessageId;
    }
  }
}
