import type { ProsessBeregningsresultatMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessBeregningsresultatMessageId;
    }
  }
}
