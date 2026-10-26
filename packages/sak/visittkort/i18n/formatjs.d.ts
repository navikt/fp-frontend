import type { SakVisittkortMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakVisittkortMessageId;
    }
  }
}
