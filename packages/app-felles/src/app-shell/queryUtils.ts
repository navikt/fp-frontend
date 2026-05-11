import { captureException } from '@sentry/browser';
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

const lagServerfeilmelding = (feilmelding?: string, callId?: string): string => {
  const melding = feilmelding ?? 'Ukjent feil';
  if (callId) {
    return `Det oppstod en serverfeil: ${melding}. Meld til support med referanse-id: ${callId}`;
  }
  return `Det oppstod en serverfeil: ${melding}`;
};

export const getErrorHandler =
  (
    addErrorMessage: (data: FpError) => void,
    additionalErrorHandler?: (error: Error, addErrorMessage: (data: FpError) => void) => boolean,
  ) =>
  (error: Error) => {
    // eslint-disable-next-line no-console
    console.log(error);

    if (additionalErrorHandler?.(error, addErrorMessage)) {
      return;
    }

    if (error instanceof HTTPError) {
      const { status } = error.response;
      if (status === 403) {
        addErrorMessage({ type: ErrorType.REQUEST_FORBIDDEN, message: error.message });
      } else if (status === 401) {
        addErrorMessage({ type: ErrorType.REQUEST_UNAUTHORIZED, message: error.message });
      } else if (status === 504 || status === 404) {
        addErrorMessage({
          type: ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND,
          location: error.response.url,
        });
      } else if (status === 500) {
        captureException(error);
        try {
          const feilDto = error.data as { feilmelding?: string; callId?: string } | undefined;
          const melding = lagServerfeilmelding(feilDto?.feilmelding, feilDto?.callId);
          addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: melding });
        } catch {
          addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: error.message });
        }
      } else {
        captureException(error);
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const feildataJson = error.data;
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-member-access
          addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: feildataJson.feilmelding ?? error.message });
        } catch {
          addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: error.message });
        }
      }
    } else {
      captureException(error);
      addErrorMessage({ type: ErrorType.GENERAL_ERROR, message: error.message });
    }
  };
