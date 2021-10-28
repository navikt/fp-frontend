import ErrorEventType from './errorEventType';
import ErrorMessage from './ErrorMessage';
import Formatter from './Formatter';

const TIMEOUT_MESSAGE_CODE = 'Rest.ErrorMessage.PollingTimeout';

export type ErrorData = {
  type: string;
  message: string;
  location: string;
}

class RestTimeoutFormatter implements Formatter<ErrorData> {
  type = ErrorEventType.POLLING_TIMEOUT;

  isOfType = (type: string) => type === this.type;

  // eslint-disable-next-line class-methods-use-this
  format = (errorData: ErrorData) => ErrorMessage.withMessageCode(TIMEOUT_MESSAGE_CODE, errorData);
}

export default RestTimeoutFormatter;
