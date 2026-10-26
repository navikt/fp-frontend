import type { FaktaUttakMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaUttakMessageId;
    }
  }
}
