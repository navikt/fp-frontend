import type { SakMenyNyBehandlingMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakMenyNyBehandlingMessageId;
    }
  }
}
