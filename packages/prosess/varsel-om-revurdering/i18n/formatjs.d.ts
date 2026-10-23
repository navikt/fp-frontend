import type { ProsessVarselOmRevurderingMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: ProsessVarselOmRevurderingMessageId;
    }
  }
}
