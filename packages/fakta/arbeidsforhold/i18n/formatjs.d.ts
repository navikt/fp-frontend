import type { FaktaArbeidsforholdMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaArbeidsforholdMessageId;
    }
  }
}
