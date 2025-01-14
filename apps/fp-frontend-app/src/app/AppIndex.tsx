import { useEffect, useMemo, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';

import { createIntl, parseQueryString } from '@navikt/ft-utils';
import { MutationCache, QueryCache, QueryClient, QueryClientProvider, useQuery } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { HTTPError } from 'ky';
import moment from 'moment';

import { useRestApiError, useRestApiErrorDispatcher } from '@navikt/fp-rest-api';
import { ForbiddenPage, UnauthorizedPage } from '@navikt/fp-sak-infosider';

import { initFetchOptions } from '../data/fagsakApi';
import { PollingTimeoutError } from '../data/polling/pollingUtils';
import { AppConfigResolver } from './AppConfigResolver';
import { Dekorator } from './components/Dekorator';
import { ErrorEventType } from './components/feilhandtering/errorEventType';
import { Home } from './components/Home';
import { ErrorBoundary } from './ErrorBoundary';

import '../globalCss/global.module.css';

import messages from '../../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const EMPTY_ARRAY = [] as any[];

const intl = createIntl(messages);

export const AppIndexWrapper = () => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const queryClient = useMemo(() => createQueryClient(getErrorHandler(addErrorMessage)), []);

  return (
    <RawIntlProvider value={intl}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools />
        <AppIndex />
      </QueryClientProvider>
    </RawIntlProvider>
  );
};

/**
 * AppIndex
 *
 * Dette er toppkomponenten i applikasjonen. Denne vil rendre header
 * og home-komponentene. Home-komponenten vil rendre barn-komponenter via ruter.
 */
export const AppIndex = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [crashMessage, setCrashMessage] = useState<string>();

  const initFetchQuery = useQuery(initFetchOptions());
  const navAnsatt = initFetchQuery.data?.innloggetBruker;

  const location = useLocation();

  useEffect(() => {
    if (navAnsatt?.funksjonellTid) {
      // TODO (TOR) Dette endrar jo berre moment. Kva med kode som brukar Date direkte?
      const diffInMinutes = moment().diff(navAnsatt.funksjonellTid, 'minutes');
      // Hvis diffInMinutes har avvik på over 5min: override moment.now (ref. http://momentjs.com/docs/#/customization/now/)
      if (diffInMinutes >= 5 || diffInMinutes <= -5) {
        const diff = moment().diff(navAnsatt.funksjonellTid);
        moment.now = () => Date.now() - diff;
      }
    }
  }, [navAnsatt?.funksjonellTid]);

  const setSiteHeight = (newHeaderHeight: number): void => {
    document.documentElement.setAttribute('style', `height: calc(100% - ${newHeaderHeight}px)`);
    setHeaderHeight(newHeaderHeight);
  };

  const addErrorMessageAndSetAsCrashed = (error: string) => {
    setCrashMessage(error);
  };

  const errorMessages = useRestApiError() || EMPTY_ARRAY;
  const queryStrings = parseQueryString(location.search);
  const hasForbiddenErrors = errorMessages.some(o => o.type === ErrorEventType.REQUEST_FORBIDDEN);
  const hasUnauthorizedErrors = errorMessages.some(o => o.type === ErrorEventType.REQUEST_UNAUTHORIZED);
  const hasForbiddenOrUnauthorizedErrors = hasForbiddenErrors || hasUnauthorizedErrors;
  const shouldRenderHome = !crashMessage && !hasForbiddenOrUnauthorizedErrors;

  return (
    <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed}>
      <AppConfigResolver>
        <>
          <Dekorator
            hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
            queryStrings={queryStrings}
            setSiteHeight={setSiteHeight}
            crashMessage={crashMessage}
          />
          <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} showChild>
            {shouldRenderHome && <Home headerHeight={headerHeight} navAnsatt={navAnsatt} />}
          </ErrorBoundary>
          {hasForbiddenErrors && <ForbiddenPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
          {hasUnauthorizedErrors && <UnauthorizedPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
        </>
      </AppConfigResolver>
    </ErrorBoundary>
  );
};

const createQueryClient = (errorHandler: (error: Error) => void) =>
  new QueryClient({
    defaultOptions: {
      queries: {
        retry: process.env.NODE_ENV === 'test' ? false : 3,
      },
    },
    queryCache: new QueryCache({
      onError: errorHandler,
    }),
    mutationCache: new MutationCache({
      onError: errorHandler,
    }),
  });

const getErrorHandler = (addErrorMessage: (data: any) => void) => (error: Error) => {
  // eslint-disable-next-line no-console
  console.log(error);

  // TODO Dette er ein forenkela kopi av dagens feilhåndtering. Refaktorer og flytt når Tanstack Query blir brukt over alt

  if (error instanceof PollingTimeoutError) {
    addErrorMessage({ type: ErrorEventType.POLLING_TIMEOUT, message: error.message, location: error.location });
  } else if (error instanceof HTTPError) {
    if (error.response.status === 403) {
      addErrorMessage({ type: ErrorEventType.REQUEST_FORBIDDEN, feilmelding: error.message });
    } else if (error.response.status === 401) {
      addErrorMessage({ type: ErrorEventType.REQUEST_UNAUTHORIZED, feilmelding: error.message });
    } else if (error.response.status === 504 || error.response.status === 404) {
      addErrorMessage({
        type: ErrorEventType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND,
        //@ts-expect-error
        location: error.response?.config?.url,
      });
    } else {
      addErrorMessage({ type: ErrorEventType.REQUEST_ERROR, feilmelding: error.message });
    }
  } else {
    addErrorMessage({ type: ErrorEventType.REQUEST_ERROR, feilmelding: error.message });
  }
};
