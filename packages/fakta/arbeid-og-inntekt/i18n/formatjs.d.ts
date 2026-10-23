import type { FaktaArbeidOgInntektMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaArbeidOgInntektMessageId;
    }
  }
}
