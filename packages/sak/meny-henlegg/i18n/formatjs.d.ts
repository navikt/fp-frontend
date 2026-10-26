import type { SakMenyHenleggMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenyHenleggMessageId;
    }
  }
}
