import type { FaktaMedlemskapMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaMedlemskapMessageId;
    }
  }
}
