import type { ProsessTilkjentYtelseMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessTilkjentYtelseMessageId;
    }
  }
}
