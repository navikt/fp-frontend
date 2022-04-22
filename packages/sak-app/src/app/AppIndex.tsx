import React, {
  FunctionComponent, useState, useEffect, useCallback,
} from 'react';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import Modal from 'nav-frontend-modal';

import { useRestApiError } from '@fpsak-frontend/rest-api-hooks';
import EventType from '@fpsak-frontend/rest-api/src/requestApi/eventType';
import { ForbiddenPage, UnauthorizedPage } from '@fpsak-frontend/sak-infosider';
import { parseQueryString } from '@navikt/ft-utils';

import { FpsakApiKeys, restApiHooks } from '../data/fpsakApi';
import ErrorBoundary from './ErrorBoundary';
import { redirectToLogin } from './paths';
import AppConfigResolver from './AppConfigResolver';
import Home from './components/Home';
import Dekorator from './components/Dekorator';

import '@fpsak-frontend/assets/styles/global.less';
import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';

const EMPTY_ARRAY = [] as any[];

/**
 * AppIndex
 *
 * Container komponent. Dette er toppkomponenten i applikasjonen. Denne vil rendre header
 * og home-komponentene. Home-komponenten vil rendre barn-komponenter via ruter.
 */
const AppIndex: FunctionComponent = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [crashMessage, setCrashMessage] = useState<string>();

  const navAnsatt = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.NAV_ANSATT);

  const location = useLocation();

  useEffect(() => {
    if (navAnsatt?.funksjonellTid) {
      // TODO (TOR) Dette endrar jo berre moment. Kva med kode som brukar Date direkte?
      const diffInMinutes = moment()
        .diff(navAnsatt.funksjonellTid, 'minutes');
      // Hvis diffInMinutes har avvik på over 5min: override moment.now (ref. http://momentjs.com/docs/#/customization/now/)
      if (diffInMinutes >= 5 || diffInMinutes <= -5) {
        const diff = moment()
          .diff(navAnsatt.funksjonellTid);
        moment.now = () => Date.now() - diff;
      }
    }
  }, [navAnsatt?.funksjonellTid]);

  const setSiteHeight = useCallback((newHeaderHeight): void => {
    document.documentElement.setAttribute('style', `height: calc(100% - ${newHeaderHeight}px)`);
    setHeaderHeight(newHeaderHeight);
  }, []);

  const addErrorMessageAndSetAsCrashed = (error: string) => {
    setCrashMessage(error);
  };

  if (process.env.NODE_ENV !== 'test') {
    // For å unngå feilmelding ved åpning av modaler
    Modal.setAppElement('div#app');
  }

  const errorMessages = useRestApiError() || EMPTY_ARRAY;
  const queryStrings = parseQueryString(location.search);
  const forbiddenErrors = errorMessages.filter((o) => o.type === EventType.REQUEST_FORBIDDEN);
  const unauthorizedErrors = errorMessages.filter((o) => o.type === EventType.REQUEST_UNAUTHORIZED);
  const hasForbiddenOrUnauthorizedErrors = forbiddenErrors.length > 0 || unauthorizedErrors.length > 0;
  const shouldRenderHome = (!crashMessage && !hasForbiddenOrUnauthorizedErrors);

  return (
    /* @ts-ignore Fiks cannot be used as a JSX component */
    <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} doNotShowErrorPage>
      <AppConfigResolver>
        <>
          <Dekorator
            hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
            queryStrings={queryStrings}
            setSiteHeight={setSiteHeight}
            crashMessage={crashMessage}
          />
          {shouldRenderHome && (<Home headerHeight={headerHeight} />)}
          {forbiddenErrors.length > 0 && (<ForbiddenPage />)}
          {unauthorizedErrors.length > 0 && (redirectToLogin() || <UnauthorizedPage />)}
        </>
      </AppConfigResolver>
    </ErrorBoundary>
  );
};

export default AppIndex;
