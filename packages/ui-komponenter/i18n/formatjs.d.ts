import type { UiKomponenterMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: UiKomponenterMessageId;
    }
  }
}
