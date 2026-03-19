import { RawIntlProvider } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AppShell, type AppShellInnerRenderProps, ErrorBoundary } from '@navikt/fp-app-felles';

import { Dekorator } from './app/Dekorator';
import { Home } from './app/Home';
import { brukerOptions } from './data/journalføringApi';

import './globalCss/global.module.css';

import messages from '../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const intl = createIntl(messages);

const JournalføringAppIndex = ({
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
  const initFetchQuery = useQuery(brukerOptions());

  if (initFetchQuery.isPending || !initFetchQuery.data) {
    return <LoadingPanel />;
  }

  const brukerinfo = initFetchQuery.data;

  return (
    <RawIntlProvider value={intl}>
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
    </RawIntlProvider>
  );
};

export const JournalføringAppIndexWrapper = () => (
  <AppShell onHeaderHeightChange={h => document.documentElement.setAttribute('style', `height: calc(100% - ${h}px)`)}>
    {props => <JournalføringAppIndex {...props} />}
  </AppShell>
);
