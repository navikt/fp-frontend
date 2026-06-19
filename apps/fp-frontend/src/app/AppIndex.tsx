import { type ReactNode } from 'react';
import { RawIntlProvider } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { createIntl } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AppShell, ErrorBoundary, ErrorType, type FpError, useAppShell } from '@navikt/fp-app-felles';

import { initFetchOptions } from '../data/fagsakApi';
import { PollingTimeoutError } from '../data/polling/pollingUtils';
import { GLOBALE_SNARVEG_IDER } from '../snarveger/snarvegDefinisjoner';
import { SnarvegerProvider, useRegistrerSnarveg } from '../snarveger/SnarvegerContext';
import { SnarvegerHjelpModal } from '../snarveger/SnarvegerHjelpModal';
import { snarvegerErTilgjengelig } from '../snarveger/snarvegerMiljo';
import { useGlobalSnarveger } from '../snarveger/useGlobalSnarveger';
import { AppConfigResolver } from './AppConfigResolver';
import { Dekorator } from './components/Dekorator';
import { Home } from './components/Home';
import { utbetalingsdataIs15RoutePath } from './paths';

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

const AppIndex = () => {
  const {
    headerHeight,
    crashMessage,
    theme,
    setTheme,
    setSiteHeight,
    queryStrings,
    hasForbiddenOrUnauthorizedErrors,
    shouldRenderHome,
    addErrorMessageAndSetAsCrashed,
  } = useAppShell();

  const initFetchQuery = useQuery(initFetchOptions());
  const navAnsatt = initFetchQuery.data?.innloggetBruker;

  return (
    <RawIntlProvider value={intl}>
      <MedSnarveger>
        <AppConfigResolver>
          <>
            <Dekorator
              hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
              queryStrings={queryStrings}
              setSiteHeight={setSiteHeight}
              crashMessage={crashMessage}
              theme={theme}
              setTheme={setTheme}
              navAnsatt={navAnsatt}
            />
            <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} showChild>
              {shouldRenderHome && <Home headerHeight={headerHeight} navAnsatt={navAnsatt} />}
            </ErrorBoundary>
          </>
        </AppConfigResolver>
      </MedSnarveger>
    </RawIntlProvider>
  );
};

export const AppIndexWrapper = () => (
  <AppShell
    themeLocalStorageKey={THEME_LOCALE_STORAGE_KEY}
    onHeaderHeightChange={h => document.documentElement.style.setProperty('--header-height', `${h}px`)}
    additionalErrorHandler={handlePollingError}
  >
    <AppIndex />
  </AppShell>
);

const SnarvegerLytter = () => {
  const navigate = useNavigate();
  useRegistrerSnarveg(GLOBALE_SNARVEG_IDER.OPPGAVELISTE, () => void navigate('/'));
  useRegistrerSnarveg(GLOBALE_SNARVEG_IDER.INFOTRYGD, () => void navigate(utbetalingsdataIs15RoutePath));
  useGlobalSnarveger();
  return null;
};

/**
 * Aktiverer tastatursnarvegane i ikkje-prod-miljø. I prod blir korkje provider, global
 * lyttar eller hjelp-modal montert, slik at heile snarveg-funksjonaliteten er av.
 */
const MedSnarveger = ({ children }: { children: ReactNode }) => {
  if (!snarvegerErTilgjengelig()) {
    return children;
  }
  return (
    <SnarvegerProvider>
      <SnarvegerLytter />
      {children}
      <SnarvegerHjelpModal />
    </SnarvegerProvider>
  );
};
