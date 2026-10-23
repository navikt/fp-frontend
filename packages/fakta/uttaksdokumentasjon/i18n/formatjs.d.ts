import type { FaktaUttaksdokumentasjonMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaUttaksdokumentasjonMessageId;
    }
  }
}
