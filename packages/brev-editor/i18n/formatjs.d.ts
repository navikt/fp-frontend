import type { BrevEditorMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: BrevEditorMessageId;
    }
  }
}
