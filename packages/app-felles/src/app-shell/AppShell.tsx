import { type ComponentProps, type ReactNode, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Theme } from '@navikt/ds-react';
import { parseQueryString } from '@navikt/ft-utils';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ForbiddenPage, UnauthorizedPage } from '@navikt/fp-sak-infosider';

import type { QueryStrings } from '../dekorator/FellesDekorator';
import { ErrorBoundary } from '../ErrorBoundary';
import { ErrorType, type FpError } from '../restApiError/errorType';
import { useRestApiError, useRestApiErrorDispatcher } from '../restApiError/RestApiErrorContext';
import { createQueryClient, getErrorHandler } from './queryUtils';

type ThemeType = NonNullable<ComponentProps<typeof Theme>['theme']>;

export type AppShellInnerRenderProps = {
  headerHeight: number;
  crashMessage: string | undefined;
  theme: ThemeType;
  queryStrings: QueryStrings;
  hasForbiddenOrUnauthorizedErrors: boolean;
  shouldRenderHome: boolean;
  setTheme: (t: ThemeType) => void;
  setSiteHeight: (h: number) => void;
  addErrorMessageAndSetAsCrashed: (error: FpError) => void;
};

interface AppShellProps {
  themeLocalStorageKey?: string;
  onHeaderHeightChange?: (newHeaderHeight: number) => void;
  additionalErrorHandler?: (error: Error, addErrorMessage: (data: FpError) => void) => boolean;
  children: (props: AppShellInnerRenderProps) => ReactNode;
}

export const AppShell = ({
  onHeaderHeightChange,
  themeLocalStorageKey,
  additionalErrorHandler,
  children,
}: AppShellProps) => {
  const { addErrorMessage } = useRestApiErrorDispatcher();
  const queryClient = useMemo(
    () => createQueryClient(getErrorHandler(addErrorMessage, additionalErrorHandler)),
    [addErrorMessage, additionalErrorHandler],
  );

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools />
      <AppShellInner onHeaderHeightChange={onHeaderHeightChange} themeLocalStorageKey={themeLocalStorageKey}>
        {children}
      </AppShellInner>
    </QueryClientProvider>
  );
};

interface AppShellInnerProps {
  themeLocalStorageKey?: string;
  onHeaderHeightChange?: (newHeaderHeight: number) => void;
  children: (props: AppShellInnerRenderProps) => ReactNode;
}

const AppShellInner = ({ onHeaderHeightChange, themeLocalStorageKey, children }: AppShellInnerProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [crashMessage, setCrashMessage] = useState<string>();
  const { theme, setTheme } = useAppTheme(themeLocalStorageKey);

  const location = useLocation();

  const setSiteHeight = (newHeaderHeight: number): void => {
    setHeaderHeight(newHeaderHeight);
    onHeaderHeightChange?.(newHeaderHeight);
  };

  const addErrorMessageAndSetAsCrashed = (error: FpError) => {
    setCrashMessage(
      error.type === ErrorType.GENERAL_ERROR
        ? error.message
        : 'Det oppstod en feilsituasjon som ikke blir håndtert korrekt',
    );
  };

  const errorMessages = useRestApiError();
  const queryStrings = parseQueryString(location.search) as QueryStrings;
  const hasForbiddenErrors = errorMessages.some(o => o.type === ErrorType.REQUEST_FORBIDDEN);
  const hasUnauthorizedErrors = errorMessages.some(o => o.type === ErrorType.REQUEST_UNAUTHORIZED);
  const hasForbiddenOrUnauthorizedErrors = hasForbiddenErrors || hasUnauthorizedErrors;
  const shouldRenderHome = !crashMessage && !hasForbiddenOrUnauthorizedErrors;

  return (
    <Theme theme={theme}>
      <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed}>
        {children({
          headerHeight,
          setSiteHeight,
          crashMessage,
          theme,
          setTheme,
          hasForbiddenOrUnauthorizedErrors,
          shouldRenderHome,
          addErrorMessageAndSetAsCrashed,
          queryStrings,
        })}
        {hasForbiddenErrors && <ForbiddenPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
        {hasUnauthorizedErrors && <UnauthorizedPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
      </ErrorBoundary>
    </Theme>
  );
};

const useAppTheme = (localStorageKey?: string) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    if (localStorageKey) {
      const storedTheme = (localStorage.getItem(localStorageKey) ?? 'light') as ThemeType;
      document.body.classList.add(storedTheme);
      return storedTheme;
    }
    return 'light';
  });

  const updateTheme = (newTheme: ThemeType) => {
    if (localStorageKey) {
      document.body.classList.replace(newTheme === 'dark' ? 'light' : 'dark', newTheme);
      localStorage.setItem(localStorageKey, newTheme);
    }
    setTheme(newTheme);
  };

  return { theme, setTheme: updateTheme };
};
