import type { SakMenyMerkSomHasterMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenyMerkSomHasterMessageId;
    }
  }
}
