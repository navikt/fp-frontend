import type { FaktaPermisjonMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaPermisjonMessageId;
    }
  }
}
