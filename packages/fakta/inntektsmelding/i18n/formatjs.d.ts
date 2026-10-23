import type { FaktaInntektsmeldingMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaInntektsmeldingMessageId;
    }
  }
}
