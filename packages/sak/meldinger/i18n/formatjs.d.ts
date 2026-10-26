import type { SakMeldingerMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMeldingerMessageId;
    }
  }
}
