import { RawIntlProvider } from 'react-intl';

import { createIntl } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AppShell, type AppShellInnerRenderProps, ErrorBoundary, ErrorType, type FpError } from '@navikt/fp-app-felles';

import { initFetchOptions } from '../data/fagsakApi';
import { PollingTimeoutError } from '../data/polling/pollingUtils';
import { AppConfigResolver } from './AppConfigResolver';
import { Dekorator } from './components/Dekorator';
import { Home } from './components/Home';

import messages from '../../i18n/nb_NO.json';

import '../globalCss/global.css';
import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const THEME_LOCALE_STORAGE_KEY = 'fp-frontend-theme';

const intl = createIntl(messages);

const handlePollingError = (error: Error, addErrorMessage: (data: FpError) => void): boolean => {
  if (error instanceof PollingTimeoutError) {
    addErrorMessage({ type: ErrorType.POLLING_TIMEOUT, message: error.message, location: error.location });
    return true;
  }
  return false;
};

const AppIndex = ({
  headerHeight,
  crashMessage,
  theme,
  setTheme,
  setSiteHeight,
  queryStrings,
  hasForbiddenOrUnauthorizedErrors,
  shouldRenderHome,
  addErrorMessageAndSetAsCrashed,
}: AppShellInnerRenderProps) => {
  const initFetchQuery = useQuery(initFetchOptions());
  const navAnsatt = initFetchQuery.data?.innloggetBruker;

  return (
    <RawIntlProvider value={intl}>
      <AppConfigResolver>
        <>
          <Dekorator
            hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
            queryStrings={queryStrings}
            setSiteHeight={setSiteHeight}
            crashMessage={crashMessage}
            theme={theme}
            setTheme={setTheme}
          />
          <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} showChild>
            {shouldRenderHome && <Home headerHeight={headerHeight} navAnsatt={navAnsatt} />}
          </ErrorBoundary>
        </>
      </AppConfigResolver>
    </RawIntlProvider>
  );
};

export const AppIndexWrapper = () => (
  <AppShell
    themeLocalStorageKey={THEME_LOCALE_STORAGE_KEY}
    onHeaderHeightChange={h => document.documentElement.style.setProperty('--header-height', `${h}px`)}
    additionalErrorHandler={handlePollingError}
  >
    {props => <AppIndex {...props} />}
  </AppShell>
);
