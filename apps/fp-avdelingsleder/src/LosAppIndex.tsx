import { RawIntlProvider } from 'react-intl';

import { LoadingPanel } from '@navikt/ft-ui-komponenter';
import { createIntl } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { AppShell, type AppShellInnerRenderProps, ErrorBoundary } from '@navikt/fp-app-felles';

import { Dekorator } from './app/Dekorator';
import { Home } from './app/Home';
import { initFetchOptions } from './data/fplosAvdelingslederApi';

import './globalCss/global.module.css';

import messages from '../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-ui-komponenter/dist/style.css';

const intl = createIntl(messages);

const LosAppIndex = ({
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

  if (initFetchQuery.isPending || !initFetchQuery.data) {
    return <LoadingPanel />;
  }

  const navAnsatt = initFetchQuery.data.innloggetBruker;

  return (
    <RawIntlProvider value={intl}>
      <Dekorator
        hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
        queryStrings={queryStrings}
        setSiteHeight={setSiteHeight}
        crashMessage={crashMessage}
        theme={theme}
        setTheme={setTheme}
        ansattnavn={navAnsatt.navn}
      />
      <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} showChild>
        {shouldRenderHome && <Home headerHeight={headerHeight} initData={initFetchQuery.data} />}
      </ErrorBoundary>
    </RawIntlProvider>
  );
};

export const LosAppIndexWrapper = () => (
  <AppShell onHeaderHeightChange={h => document.documentElement.setAttribute('style', `height: calc(100% - ${h}px)`)}>
    {props => <LosAppIndex {...props} />}
  </AppShell>
);
