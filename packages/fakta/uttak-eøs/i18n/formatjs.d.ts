import type { FaktaUttakEosMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaUttakEosMessageId;
    }
  }
}
