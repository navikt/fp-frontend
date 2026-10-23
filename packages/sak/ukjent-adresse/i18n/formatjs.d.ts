import type { SakUkjentAdresseMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakUkjentAdresseMessageId;
    }
  }
}
