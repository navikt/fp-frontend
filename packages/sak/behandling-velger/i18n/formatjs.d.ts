import type { SakBehandlingVelgerMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakBehandlingVelgerMessageId;
    }
  }
}
