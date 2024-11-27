import { DefaultFormatter, ErrorData as ErrorDataDefault } from './DefaultFormatter';
import { ErrorMessage } from './ErrorMessage';
import {
  ErrorData as ErrorDataTimeoutOrNotFound,
  RestGatewayTimeoutOrNotFoundFormatter,
} from './RestGatewayTimeoutOrNotFoundFormatter';
import { ErrorData as ErrorDataHaltedOrDelayed,RestHaltedOrDelayedFormatter } from './RestHaltedOrDelayedFormatter';
import { ErrorData as ErrorDataRestDefault,RestTimeoutFormatter } from './RestTimeoutFormatter';

const defaultFormatter = new DefaultFormatter();
const formatters = [
  new RestTimeoutFormatter(),
  new RestHaltedOrDelayedFormatter(),
  new RestGatewayTimeoutOrNotFoundFormatter(),
  defaultFormatter,
];

export type InputErrorMessage =
  | ErrorDataDefault
  | ErrorDataRestDefault
  | ErrorDataHaltedOrDelayed
  | ErrorDataTimeoutOrNotFound;

export class ErrorFormatter {
  format = (errorMessages: InputErrorMessage[], crashMessage?: string): ErrorMessage[] => {
    const allErrorMessages: ErrorMessage[] = [];
    if (crashMessage) {
      allErrorMessages.push(defaultFormatter.formatString(crashMessage));
    }

    if (errorMessages.length > 0) {
      errorMessages
        .map((e: any) => {
          if (!e.type) {
            return defaultFormatter.formatString(e);
          }
          const formatter = formatters.find(f => f.isOfType(e.type));
          return formatter ? formatter.format(e) : undefined;
        })
        .forEach(e => {
          if (e !== undefined) {
            allErrorMessages.push(e);
          }
        });
    }

    return allErrorMessages;
  };
}
