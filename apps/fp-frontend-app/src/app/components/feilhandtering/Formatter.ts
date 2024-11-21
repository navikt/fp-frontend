import { ErrorMessage } from './ErrorMessage';

export interface Formatter<T> {
  isOfType(type: string): boolean;
  format(errorData: T): ErrorMessage | undefined;
}
