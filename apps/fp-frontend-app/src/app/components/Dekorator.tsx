import React from 'react';
import { type IntlShape, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { dateFormat, decodeHtmlEntity, timeFormat } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { ApiPollingStatus, RETTSKILDE_URL, SYSTEMRUTINE_URL } from '@navikt/fp-konstanter';
import { DekoratorMedFeilviserSakIndex, type Feilmelding } from '@navikt/fp-sak-dekorator';
import { notEmpty } from '@navikt/fp-utils';

import { ErrorType, type FpError } from '../../data/error/errorType';
import { useRestApiError, useRestApiErrorDispatcher } from '../../data/error/RestApiErrorContext';
import { initFetchOptions } from '../../data/fagsakApi';
import { AVDELINGSLEDER_PATH, JOURNALFØRING_PATH, UTBETALINGSDATA_PATH } from '../paths';

type QueryStrings = {
  errorcode?: string;
  errormessage?: string;
};

const EMPTY_ARRAY = [] as Feilmelding[];

interface Props {
  queryStrings: QueryStrings;
  setSiteHeight: (headerHeight: number) => void;
  crashMessage?: string;
  hideErrorMessages?: boolean;
}

export const Dekorator = ({ queryStrings, setSiteHeight, crashMessage, hideErrorMessages = false }: Props) => {
  const intl = useIntl();

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const initFetchQuery = useQuery(initFetchOptions());
  const { innloggetBruker: navAnsatt } = notEmpty(initFetchQuery.data);

  const navigate = useNavigate();
  const visLos = (e: React.SyntheticEvent) => {
    if (e.type === 'click') {
      navigate('/');
    }
    if (e.type === 'contextmenu') {
      window.open('/', '_newtab');
    }
    e.preventDefault();
  };
  const visAvdelingslederside = (e: React.SyntheticEvent) => {
    navigate(AVDELINGSLEDER_PATH);
    e.preventDefault();
  };

  const visJournalføringside = (e: React.SyntheticEvent) => {
    navigate(JOURNALFØRING_PATH);
    e.preventDefault();
  };

  const visUtbetalingsdataSide = (e: React.SyntheticEvent) => {
    navigate(UTBETALINGSDATA_PATH);
    e.preventDefault();
  };

  const { kanOppgavestyre, kanSaksbehandle } = navAnsatt;

  const interneLenker = [];
  if (kanOppgavestyre) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Avdelingsleder' }),
      callback: (e: React.SyntheticEvent) => visAvdelingslederside(e),
    });
  }
  if (kanSaksbehandle) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Journalforing' }),
      callback: (e: React.SyntheticEvent) => visJournalføringside(e),
    });
  }
  interneLenker.push({
    tekst: intl.formatMessage({ id: 'Dekorator.Utbetalingsdata' }),
    callback: (e: React.SyntheticEvent) => visUtbetalingsdataSide(e),
  });

  const eksterneLenker = [
    {
      tekst: intl.formatMessage({ id: 'Dekorator.Rettskilde' }),
      href: RETTSKILDE_URL,
    },
    {
      tekst: intl.formatMessage({ id: 'Dekorator.Systemrutine' }),
      href: SYSTEMRUTINE_URL,
    },
  ];

  return (
    <DekoratorMedFeilviserSakIndex
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      tittelCallback={visLos}
      navAnsattNavn={navAnsatt.navn}
      feilmeldinger={
        hideErrorMessages ? EMPTY_ARRAY : formaterFeilmeldinger(intl, errorMessages, queryStrings, crashMessage)
      }
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      interneLenker={interneLenker}
      eksterneLenker={eksterneLenker}
    />
  );
};

const formaterFeilmeldinger = (
  intl: IntlShape,
  alleFeilmeldinger: FpError[],
  queryStringFeilmeldinger: QueryStrings,
  crashMessage?: string,
): Feilmelding[] => {
  const feilmeldinger: Feilmelding[] = [];

  if (queryStringFeilmeldinger.errorcode) {
    feilmeldinger.push({ melding: intl.formatMessage({ id: queryStringFeilmeldinger.errorcode }) });
  }
  if (queryStringFeilmeldinger.errormessage) {
    feilmeldinger.push({ melding: queryStringFeilmeldinger.errormessage });
  }
  if (crashMessage) {
    feilmeldinger.push({ melding: crashMessage });
  }

  alleFeilmeldinger.forEach(feilmelding => {
    switch (feilmelding.type) {
      case ErrorType.POLLING_HALTED_OR_DELAYED:
        if (feilmelding.status === ApiPollingStatus.HALTED) {
          const decoded = decodeHtmlEntity(feilmelding.message);
          feilmeldinger.push({
            melding: intl.formatMessage({ id: 'Rest.ErrorMessage.General' }),
            tilleggsInfo: decoded ? parseErrorDetails(decoded) : undefined,
          });
        }
        if (feilmelding.status === ApiPollingStatus.DELAYED) {
          feilmeldinger.push({
            melding: intl.formatMessage(
              { id: 'Rest.ErrorMessage.DownTime' },
              {
                date: dateFormat(feilmelding.eta),
                time: timeFormat(feilmelding.eta),
                message: feilmelding.message,
              },
            ),
          });
        }
        break;
      case ErrorType.POLLING_TIMEOUT:
        feilmeldinger.push({
          melding: intl.formatMessage({ id: 'Rest.ErrorMessage.PollingTimeout' }, { location: feilmelding.location }),
        });
        break;
      case ErrorType.REQUEST_GATEWAY_TIMEOUT_OR_NOT_FOUND:
        feilmeldinger.push({
          melding: intl.formatMessage(
            { id: 'Rest.ErrorMessage.GatewayTimeoutOrNotFound' },
            {
              contextPath: feilmelding.location ? feilmelding.location.split('/')[1]?.toUpperCase() : '',
              location: feilmelding.location,
            },
          ),
        });
        break;
      case ErrorType.REQUEST_FORBIDDEN:
      case ErrorType.REQUEST_UNAUTHORIZED:
      case ErrorType.GENERAL_ERROR:
      default:
        feilmeldinger.push({
          melding: feilmelding.message,
        });
    }
  });

  return feilmeldinger;
};

const parseErrorDetails = (details: string) => {
  try {
    return JSON.parse(details);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return 'Kunne ikke tolke feildetaljer';
  }
};
