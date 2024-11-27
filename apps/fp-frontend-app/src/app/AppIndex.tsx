import React, { useCallback,useEffect, useState } from 'react';
import { RawIntlProvider } from 'react-intl';
import { Link, useLocation } from 'react-router-dom';

import { createIntl, parseQueryString } from '@navikt/ft-utils';
import moment from 'moment';

import { EventType } from '@navikt/fp-rest-api';
import { useRestApiError } from '@navikt/fp-rest-api-hooks';
import { ForbiddenPage, UnauthorizedPage } from '@navikt/fp-sak-infosider';

import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import { AppConfigResolver } from './AppConfigResolver';
import { Dekorator } from './components/Dekorator';
import { Home } from './components/Home';
import { ErrorBoundary } from './ErrorBoundary';

import '../globalCss/global.module.css';

import messages from '../../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ds-css-internal';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';

const EMPTY_ARRAY = [] as any[];

const intl = createIntl(messages);

/**
 * AppIndex
 *
 * Container komponent. Dette er toppkomponenten i applikasjonen. Denne vil rendre header
 * og home-komponentene. Home-komponenten vil rendre barn-komponenter via ruter.
 */
export const AppIndex = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [crashMessage, setCrashMessage] = useState<string>();

  const initFetch = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const navAnsatt = initFetch?.innloggetBruker;

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

  const setSiteHeight = useCallback((newHeaderHeight: number): void => {
    document.documentElement.setAttribute('style', `height: calc(100% - ${newHeaderHeight}px)`);
    setHeaderHeight(newHeaderHeight);
  }, []);

  const addErrorMessageAndSetAsCrashed = (error: string) => {
    setCrashMessage(error);
  };

  const errorMessages = useRestApiError() || EMPTY_ARRAY;
  const queryStrings = parseQueryString(location.search);
  const forbiddenErrors = errorMessages.filter(o => o.type === EventType.REQUEST_FORBIDDEN);
  const unauthorizedErrors = errorMessages.filter(o => o.type === EventType.REQUEST_UNAUTHORIZED);
  const hasForbiddenOrUnauthorizedErrors = forbiddenErrors.length > 0 || unauthorizedErrors.length > 0;
  const shouldRenderHome = !crashMessage && !hasForbiddenOrUnauthorizedErrors;

  return (
    <RawIntlProvider value={intl}>
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
            {forbiddenErrors.length > 0 && <ForbiddenPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
            {unauthorizedErrors.length > 0 && (
              <UnauthorizedPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />
            )}
          </>
        </AppConfigResolver>
      </ErrorBoundary>
    </RawIntlProvider>
  );
};
