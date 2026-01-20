import { type ComponentProps, useMemo, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';

import { Theme } from '@navikt/ds-react';
import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { createIntl, parseQueryString } from '@navikt/ft-utils';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HTTPError } from 'ky';

import {
  ErrorBoundary,
  ErrorType,
  type FpError,
  useRestApiError,
  useRestApiErrorDispatcher,
} from '@navikt/fp-app-felles';
import { ForbiddenPage, UnauthorizedPage } from '@navikt/fp-sak-infosider';

import { Dekorator } from './app/Dekorator';
import { Home } from './app/Home';
import { brukerOptions } from './data/journalføringApi';

import './globalCss/global.module.css';

import messages from '../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const intl = createIntl(messages);

export const JournalføringAppIndexWrapper = () => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const queryClient = useMemo(() => createQueryClient(getErrorHandler(addErrorMessage)), [addErrorMessage]);

  return (
    <RawIntlProvider value={intl}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <JournalføringAppIndex />
      </QueryClientProvider>
    </RawIntlProvider>
  );
};

const JournalføringAppIndex = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [crashMessage, setCrashMessage] = useState<string>();
  const [theme, setTheme] = useState<ComponentProps<typeof Theme>['theme']>('light');

  const initFetchQuery = useQuery(brukerOptions());

  const location = useLocation();

  const setSiteHeight = (newHeaderHeight: number): void => {
    document.documentElement.setAttribute('style', `height: calc(100% - ${newHeaderHeight}px)`);
    setHeaderHeight(newHeaderHeight);
  };

  const addErrorMessageAndSetAsCrashed = (error: FpError) => {
    setCrashMessage(
      error.type === ErrorType.GENERAL_ERROR
        ? error.message
        : 'Det oppstod en feilsituasjon som ikke blir håndtert korrekt',
    );
  };

  const errorMessages = useRestApiError();
  const queryStrings = parseQueryString(location.search);
  const hasForbiddenErrors = errorMessages.some(o => o.type === ErrorType.REQUEST_FORBIDDEN);
  const hasUnauthorizedErrors = errorMessages.some(o => o.type === ErrorType.REQUEST_UNAUTHORIZED);
  const hasForbiddenOrUnauthorizedErrors = hasForbiddenErrors || hasUnauthorizedErrors;
  const shouldRenderHome = !crashMessage && !hasForbiddenOrUnauthorizedErrors;

  if (initFetchQuery.isPending || !initFetchQuery.data) {
    return <LoadingPanel />;
  }

  const brukerinfo = initFetchQuery.data;

  return (
    <Theme theme={theme}>
      <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed}>
        <Dekorator
          hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
          queryStrings={queryStrings}
          setSiteHeight={setSiteHeight}
          crashMessage={crashMessage}
          theme={theme}
          setTheme={setTheme}
          ansattnavn={brukerinfo.givenName}
        />
        <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} showChild>
          {shouldRenderHome && <Home headerHeight={headerHeight} ansattIdent={brukerinfo.onPremisesSamAccountName} />}
        </ErrorBoundary>
        {hasForbiddenErrors && <ForbiddenPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
        {hasUnauthorizedErrors && <UnauthorizedPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
      </ErrorBoundary>
    </Theme>
  );
};

const createQueryClient = (errorHandler: (error: Error) => void) =>
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

const getErrorHandler = (addErrorMessage: (data: FpError) => void) => async (error: Error) => {
  // eslint-disable-next-line no-console
  console.log(error);

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
