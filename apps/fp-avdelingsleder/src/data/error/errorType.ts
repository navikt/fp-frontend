import { ApiPollingStatus } from '@navikt/fp-konstanter';

export enum ErrorType {
  GENERAL_ERROR = 'GENERAL_ERROR',
  POLLING_TIMEOUT = 'POLLING_TIMEOUT',
  POLLING_HALTED_OR_DELAYED = 'POLLING_HALTED_OR_DELAYED',
  REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND = 'REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND',
  REQUEST_FORBIDDEN = 'REQUEST_FORBIDDEN',
  REQUEST_UNAUTHORIZED = 'REQUEST_UNAUTHORIZED',
}

type GeneralError = {
  type: ErrorType.GENERAL_ERROR;
  message: string;
};

type PollingTimeoutError = {
  type: ErrorType.POLLING_TIMEOUT;
  message: string;
  location: string;
};

type RequestForbiddenError = {
  type: ErrorType.REQUEST_FORBIDDEN;
  message: string;
};

type RequestUnauthorizedError = {
  type: ErrorType.REQUEST_UNAUTHORIZED;
  message: string;
};

type RequestGatewayTimeoutOrNotFoundError = {
  type: ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND;
  location: string;
};

type PollingHaltedError = {
  type: ErrorType.POLLING_HALTED_OR_DELAYED;
  status: ApiPollingStatus.HALTED;
  message: string;
};

type PollingDelayedError = {
  type: ErrorType.POLLING_HALTED_OR_DELAYED;
  status: ApiPollingStatus.DELAYED;
  message: string;
  eta: string;
};

export type FpError =
  | GeneralError
  | PollingTimeoutError
  | RequestForbiddenError
  | RequestUnauthorizedError
  | RequestGatewayTimeoutOrNotFoundError
  | PollingHaltedError
  | PollingDelayedError;
