import type { ProsessVilkarSokersOpplysningspliktMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVilkarSokersOpplysningspliktMessageId;
    }
  }
}
