import type { ProsessVilkarSvangerskapMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVilkarSvangerskapMessageId;
    }
  }
}
