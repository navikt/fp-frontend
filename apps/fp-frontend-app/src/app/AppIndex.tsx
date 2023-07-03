import React, { FunctionComponent, useState, useEffect, useCallback } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { RawIntlProvider } from 'react-intl';
import moment from 'moment';
import { createIntl, parseQueryString } from '@navikt/ft-utils';
import { ForbiddenPage, UnauthorizedPage } from '@navikt/ft-sak-infosider';

import { useRestApiError } from '@navikt/fp-rest-api-hooks';
import { EventType } from '@navikt/fp-rest-api';

import { FagsakApiKeys, restFagsakApiHooks } from '../data/fagsakContextApi';
import ErrorBoundary from './ErrorBoundary';
import { redirectToLogin } from './paths';
import AppConfigResolver from './AppConfigResolver';
import Home from './components/Home';
import Dekorator from './components/Dekorator';

import messages from '../../i18n/nb_NO.json';

import '@navikt/ds-css';
import '@navikt/ds-css-internal';

import '@navikt/ft-ui-komponenter/dist/style.css';
import '@navikt/ft-form-hooks/dist/style.css';
import '@navikt/ft-plattform-komponenter/dist/style.css';
import '@navikt/ft-sak-infosider/dist/style.css';

import '@navikt/fp-fakta-adopsjon/dist/style.css';
import '@navikt/fp-fakta-arbeid-og-inntekt/dist/style.css';
import '@navikt/fp-fakta-arbeidsforhold/dist/style.css';
import '@navikt/fp-fakta-besteberegning/dist/style.css';
import '@navikt/fp-fakta-felles/dist/style.css';
import '@navikt/fp-fakta-fodsel/dist/style.css';
import '@navikt/fp-fakta-fodsel-og-tilrettelegging/dist/style.css';
import '@navikt/fp-fakta-medlemskap/dist/style.css';
import '@navikt/fp-fakta-omsorg/dist/style.css';
import '@navikt/fp-fakta-omsorg-og-foreldreansvar/dist/style.css';
import '@navikt/fp-fakta-omsorg-og-rett/dist/style.css';
import '@navikt/fp-fakta-opptjening/dist/style.css';
import '@navikt/fp-fakta-saken/dist/style.css';
import '@navikt/fp-fakta-uttak/dist/style.css';
import '@navikt/fp-fakta-uttaksdokumentasjon/dist/style.css';
import '@navikt/fp-fakta-verge/dist/style.css';
import '@navikt/fp-fakta-ytelser/dist/style.css';

import '@navikt/fp-journalforing/dist/style.css';
import '@navikt/fp-los-avdelingsleder/dist/style.css';
import '@navikt/fp-los-felles/dist/style.css';
import '@navikt/fp-los-saksbehandler/dist/style.css';
import '@navikt/fp-modal-sett-pa-vent/dist/style.css';
import '@navikt/fp-papirsoknad/dist/style.css';
import '@navikt/fp-papirsoknad-ui-komponenter/dist/style.css';

import '@navikt/fp-prosess-avregning/dist/style.css';
import '@navikt/fp-prosess-beregningsresultat/dist/style.css';
import '@navikt/fp-prosess-fakta-fodsel-sammenligning/dist/style.css';
import '@navikt/fp-prosess-felles/dist/style.css';
import '@navikt/fp-prosess-formkrav/dist/style.css';
import '@navikt/fp-prosess-innsyn/dist/style.css';
import '@navikt/fp-prosess-klagevurdering/dist/style.css';
import '@navikt/fp-prosess-soknadsfrist/dist/style.css';
import '@navikt/fp-prosess-tilkjent-ytelse/dist/style.css';
import '@navikt/fp-prosess-uttak/dist/style.css';
import '@navikt/fp-prosess-varsel-om-revurdering/dist/style.css';
import '@navikt/fp-prosess-vedtak/dist/style.css';
import '@navikt/fp-prosess-vedtak-innsyn/dist/style.css';
import '@navikt/fp-prosess-vedtak-klage/dist/style.css';
import '@navikt/fp-prosess-vilkar-opptjening/dist/style.css';
import '@navikt/fp-prosess-vilkar-overstyring/dist/style.css';
import '@navikt/fp-prosess-vilkar-soknadsfrist/dist/style.css';

import '@navikt/fp-sak-historikk/dist/style.css';
import '@navikt/fp-sak-meldinger/dist/style.css';
import '@navikt/fp-sak-meny-endre-utland/dist/style.css';
import '@navikt/fp-sak-meny-henlegg/dist/style.css';
import '@navikt/fp-sak-meny-ny-behandling/dist/style.css';
import '@navikt/fp-sak-sok/dist/style.css';
import '@navikt/fp-sak-totrinnskontroll/dist/style.css';
import '@navikt/fp-sak-ukjent-adresse/dist/style.css';
import '@navikt/ft-sak-dekorator/dist/style.css';
import '@navikt/fp-sak-notat/dist/style.css';

import '../globalCss/global.module.css';

const EMPTY_ARRAY = [] as any[];

const intl = createIntl(messages);

/**
 * AppIndex
 *
 * Container komponent. Dette er toppkomponenten i applikasjonen. Denne vil rendre header
 * og home-komponentene. Home-komponenten vil rendre barn-komponenter via ruter.
 */
const AppIndex: FunctionComponent = () => {
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
      <ErrorBoundary errorMessageCallback={addErrorMessageAndSetAsCrashed} showChild>
        <AppConfigResolver>
          <>
            <Dekorator
              hideErrorMessages={hasForbiddenOrUnauthorizedErrors}
              queryStrings={queryStrings}
              setSiteHeight={setSiteHeight}
              crashMessage={crashMessage}
            />
            {shouldRenderHome && <Home headerHeight={headerHeight} navAnsatt={navAnsatt} />}
            {forbiddenErrors.length > 0 && <ForbiddenPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />}
            {unauthorizedErrors.length > 0 &&
              (redirectToLogin() || <UnauthorizedPage renderSomLenke={tekst => <Link to="/">{tekst}</Link>} />)}
          </>
        </AppConfigResolver>
      </ErrorBoundary>
    </RawIntlProvider>
  );
};

export default AppIndex;
