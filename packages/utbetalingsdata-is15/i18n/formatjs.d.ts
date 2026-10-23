import type { UtbetalingsdataIs15MessageId } from './messageIds';

declare global {
  namespace FormatjsIntl {
    interface Message {
      ids: UtbetalingsdataIs15MessageId;
    }
  }
}
