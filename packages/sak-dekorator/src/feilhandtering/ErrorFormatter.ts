import DefaultFormatter, { ErrorData as ErrorDataDefault } from './DefaultFormatter';
import RestTimeoutFormatter, { ErrorData as ErrorDataRestDefault } from './RestTimeoutFormatter';
import RestHaltedOrDelayedFormatter, { ErrorData as ErrorDataHaltedOrDelayed } from './RestHaltedOrDelayedFormatter';
import RestGatewayTimeoutOrNotFoundFormatter, { ErrorData as ErrorDataTimeoutOrNotFound } from './RestGatewayTimeoutOrNotFoundFormatter';
import ErrorMessage from './ErrorMessage';

const defaultFormatter = new DefaultFormatter();
const formatters = [new RestTimeoutFormatter(), new RestHaltedOrDelayedFormatter(), new RestGatewayTimeoutOrNotFoundFormatter(), defaultFormatter];

export type InputErrorMessage = ErrorDataDefault | ErrorDataRestDefault | ErrorDataHaltedOrDelayed | ErrorDataTimeoutOrNotFound;

class ErrorFormatter {
  // eslint-disable-next-line class-methods-use-this
  format = (errorMessages: InputErrorMessage[], crashMessage?: string): ErrorMessage[] => {
    const allErrorMessages: ErrorMessage[] = [];
    if (crashMessage) {
      allErrorMessages.push(defaultFormatter.formatString(crashMessage));
    }

    if (errorMessages.length > 0) {
      errorMessages.map((e: any) => {
        if (!e.type) {
          return defaultFormatter.formatString(e);
        }
        const formatter = formatters.find((f) => f.isOfType(e.type));
        return formatter ? formatter.format(e) : undefined;
      })
        .filter((e) => e)
        .forEach((e) => allErrorMessages.push(e));
    }

    return allErrorMessages;
  };
}

export default ErrorFormatter;
