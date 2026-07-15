import { type ComponentProps, createContext, type ReactNode, use, useCallback, useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

import { Theme } from '@navikt/ds-react';
import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ForbiddenPage, UnauthorizedPage } from '@navikt/fp-sak-infosider';

import type { QueryStrings } from '../dekorator/FellesDekorator';
import { ErrorBoundary } from '../ErrorBoundary';
import { ErrorType, type FpError } from '../restApiError/errorType';
import { useRestApiError, useRestApiErrorDispatcher } from '../restApiError/RestApiErrorContext';
import { parseQueryString } from '../utils/urlUtils';
import { createQueryClient, getErrorHandler } from './queryUtils';

type ThemeType = NonNullable<ComponentProps<typeof Theme>['theme']>;

export type AppShellContextValue = {
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

const AppShellContext = createContext<AppShellContextValue | null>(null);

export const useAppShell = (): AppShellContextValue => {
  const ctx = use(AppShellContext);
  if (!ctx) {
    throw new Error('useAppShell must be used within an AppShell');
  }
  return ctx;
};

interface AppShellProps {
  themeLocalStorageKey?: string;
  onHeaderHeightChange?: (newHeaderHeight: number) => void;
  additionalErrorHandler?: (error: Error, addErrorMessage: (data: FpError) => void) => boolean;
  children: ReactNode;
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
  children: ReactNode;
}

const AppShellInner = ({ onHeaderHeightChange, themeLocalStorageKey, children }: AppShellInnerProps) => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [crashMessage, setCrashMessage] = useState<string>();
  const { theme, setTheme } = useAppTheme(themeLocalStorageKey);

  const location = useLocation();

  const setSiteHeight = useCallback(
    (newHeaderHeight: number): void => {
      setHeaderHeight(newHeaderHeight);
      onHeaderHeightChange?.(newHeaderHeight);
    },
    [onHeaderHeightChange],
  );

  const addErrorMessageAndSetAsCrashed = useCallback((error: FpError) => {
    setCrashMessage(
      error.type === ErrorType.GENERAL_ERROR
        ? error.message
        : 'Det oppstod en feilsituasjon som ikke blir håndtert korrekt',
    );
  }, []);

  const errorMessages = useRestApiError();
  const queryStrings = parseQueryString(location.search) as QueryStrings;
  const hasForbiddenErrors = errorMessages.some(o => o.type === ErrorType.REQUEST_FORBIDDEN);
  const hasUnauthorizedErrors = errorMessages.some(o => o.type === ErrorType.REQUEST_UNAUTHORIZED);
  const hasForbiddenOrUnauthorizedErrors = hasForbiddenErrors || hasUnauthorizedErrors;
  const shouldRenderHome = !crashMessage && !hasForbiddenOrUnauthorizedErrors;

  const contextValue = useMemo<AppShellContextValue>(
    () => ({
      headerHeight,
      crashMessage,
      theme,
      queryStrings,
      hasForbiddenOrUnauthorizedErrors,
      shouldRenderHome,
      setTheme,
      setSiteHeight,
      addErrorMessageAndSetAsCrashed,
    }),
    [
      headerHeight,
      crashMessage,
      theme,
      queryStrings,
      hasForbiddenOrUnauthorizedErrors,
      shouldRenderHome,
      setTheme,
      setSiteHeight,
      addErrorMessageAndSetAsCrashed,
    ],
  );

  return (
    <AppShellContext value={contextValue}>
      <Theme theme={theme}>
        <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed}>
          {children}
          {hasForbiddenErrors && <ForbiddenPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
          {hasUnauthorizedErrors && <UnauthorizedPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
        </ErrorBoundary>
      </Theme>
    </AppShellContext>
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
