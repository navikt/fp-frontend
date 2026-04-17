import { MutationCache, QueryCache, QueryClient } from '@tanstack/react-query';
import { HTTPError } from 'ky';

import { ErrorType, type FpError } from '../restApiError/errorType';

const ZERO_RETRIES = false;

const retryHandler = () => {
  if (import.meta.env.MODE === 'test') {
    return ZERO_RETRIES;
  }
  return (failureCount: number, error: Error) => {
    if (error instanceof HTTPError) {
      if (error.response.status === 401 || error.response.status === 403) {
        return ZERO_RETRIES;
      }
      if (error.response.status === 500) {
        return failureCount < 1;
      }
    }
    return failureCount < 3;
  };
};

export const createQueryClient = (errorHandler: (error: Error) => void) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: retryHandler(),
      },
      mutations: {
        retry: retryHandler(),
      },
    },
    queryCache: new QueryCache({
      onError: errorHandler,
    }),
    mutationCache: new MutationCache({
      onError: errorHandler,
    }),
  });

export const getErrorHandler =
  (
    addErrorMessage: (data: FpError) => void,
    additionalErrorHandler?: (error: Error, addErrorMessage: (data: FpError) => void) => boolean,
  ) =>
  async (error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error);

    if (additionalErrorHandler?.(error, addErrorMessage)) {
      return;
    }

    if (error instanceof HTTPError) {
      if (error.response.status === 403) {
        addErrorMessage({ type: ErrorType.REQUEST_FORBIDDEN, message: error.message });
      } else if (error.response.status === 401) {
        addErrorMessage({ type: ErrorType.REQUEST_UNAUTHORIZED, message: error.message });
      } else if (error.response.status === 504 || error.response.status === 404) {
        addErrorMessage({
          type: ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND,
          location: error.response.url,
        });
      } else {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const feildataJson = await error.response.json();
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: feildataJson.feilmelding ?? error.message });
        } catch {
          addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: error.message });
        }
      }
    } else {
      addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: error.message });
    }
  };
