import ErrorMessage from './ErrorMessage';
import Formatter from './Formatter';

export type ErrorData = {
  feilmelding?: string;
  message?: string;
  type: string;
}

class DefaultFormatter implements Formatter<ErrorData> {
  // eslint-disable-next-line class-methods-use-this
  isOfType = () => true;

  // eslint-disable-next-line class-methods-use-this
  formatString = (errorData: string): ErrorMessage => ErrorMessage.withMessage(errorData);

  // eslint-disable-next-line class-methods-use-this
  format = (errorData: ErrorData) => {
    if (errorData.feilmelding) {
      return ErrorMessage.withMessage(errorData.feilmelding, errorData.type);
    }
    if (errorData.message) {
      return ErrorMessage.withMessage(errorData.message, errorData.type);
    }
    return undefined;
  };
}

export default DefaultFormatter;
