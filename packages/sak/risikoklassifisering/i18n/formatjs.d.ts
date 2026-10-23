import type { SakRisikoklassifiseringMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: SakRisikoklassifiseringMessageId;
    }
  }
}
