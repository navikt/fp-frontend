import type { FaktaBesteberegningMessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: FaktaBesteberegningMessageId;
    }
  }
}
