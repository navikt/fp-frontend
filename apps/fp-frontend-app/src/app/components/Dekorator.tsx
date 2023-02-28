import React, { FunctionComponent, useMemo, useCallback } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { useNavigate } from 'react-router-dom';
import { DekoratorMedFeilviserSakIndex, Feilmelding } from '@navikt/ft-sak-dekorator';

import { useRestApiError, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { SYSTEMRUTINE_URL } from '@navikt/fp-konstanter';

import ErrorFormatter from './feilhandtering/ErrorFormatter';
import ErrorMessage from './feilhandtering/ErrorMessage';
import { FpsakApiKeys, restApiHooks } from '../../data/fpsakApi';

import { AVDELINGSLEDER_PATH } from '../paths';

import '@navikt/ft-sak-dekorator/dist/style.css';

type QueryStrings = {
  errorcode?: string;
  errormessage?: string;
};

const parseErrorDetails = (details: string) => {
  try {
    return JSON.parse(details);
  } catch (error) {
    return 'Kunne ikke tolke feildetaljer';
  }
};

const lagFeilmeldinger = (
  errorMessages: ErrorMessage[],
  queryStrings: QueryStrings,
  intl: IntlShape,
): Feilmelding[] => {
  const resolvedErrorMessages: Feilmelding[] = [];
  if (queryStrings.errorcode) {
    resolvedErrorMessages.push({ melding: intl.formatMessage({ id: queryStrings.errorcode }) });
  }
  if (queryStrings.errormessage) {
    resolvedErrorMessages.push({ melding: queryStrings.errormessage });
  }
  errorMessages.forEach((message) => {
    let msg = {
      melding: (message.code ? intl.formatMessage({ id: message.code }, message.params) : message.text),
      tilleggsInfo: undefined,
    };
    if (message.params && message.params.errorDetails) {
      const decodedDetails = decodeHtmlEntity(message.params.errorDetails);
      msg = {
        ...msg,
        tilleggsInfo: decodedDetails ? parseErrorDetails(decodedDetails) : undefined,
      };
    }
    resolvedErrorMessages.push(msg);
  });
  return resolvedErrorMessages;
};

const EMPTY_ARRAY = [] as Feilmelding[];

interface OwnProps {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
}

const Dekorator: FunctionComponent<OwnProps> = ({
  queryStrings,
  setSiteHeight,
  crashMessage,
  hideErrorMessages = false,
}) => {
  const intl = useIntl();

  const initFetch = restApiHooks.useGlobalStateRestApiData(FpsakApiKeys.INIT_FETCH);
  const navAnsatt = initFetch?.innloggetBruker;

  const navigate = useNavigate();
  const visSaksbehandlerside = useCallback((e: React.SyntheticEvent) => {
    if (e.type === 'click') {
      navigate('/');
    }
    if (e.type === 'contextmenu') {
      window.open('/', '_newtab');
    }
    e.preventDefault();
  }, [navigate]);
  const visAvdelingslederside = useCallback((e: React.SyntheticEvent) => {
    navigate(AVDELINGSLEDER_PATH);
    e.preventDefault();
  }, [navigate]);

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const formaterteFeilmeldinger = useMemo(() => new ErrorFormatter().format(errorMessages, crashMessage), [errorMessages]);
  const resolvedErrorMessages = useMemo(() => lagFeilmeldinger(formaterteFeilmeldinger, queryStrings, intl), [formaterteFeilmeldinger, queryStrings]);

  const kanOppgavestyre = navAnsatt?.kanOppgavestyre;

  return (
    <DekoratorMedFeilviserSakIndex
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      visSaksbehandlerside={visSaksbehandlerside}
      visAvdelingslederside={visAvdelingslederside}
      navAnsattNavn={navAnsatt?.navn}
      systemrutineUrl={SYSTEMRUTINE_URL}
      feilmeldinger={hideErrorMessages ? EMPTY_ARRAY : resolvedErrorMessages}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      kanOppgavestyre={kanOppgavestyre}
    />
  );
};

export default Dekorator;
