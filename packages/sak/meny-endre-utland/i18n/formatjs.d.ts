import type { SakMenyEndreUtlandMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenyEndreUtlandMessageId;
    }
  }
}
