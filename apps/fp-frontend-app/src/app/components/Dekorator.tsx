import React from 'react';
import { IntlShape, useIntl } from 'react-intl';
import { useNavigate } from 'react-router-dom';

import { decodeHtmlEntity } from '@navikt/ft-utils';
import { useQuery } from '@tanstack/react-query';

import { RETTSKILDE_URL, SYSTEMRUTINE_URL } from '@navikt/fp-konstanter';
import { useRestApiError, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { DekoratorMedFeilviserSakIndex, Feilmelding } from '@navikt/fp-sak-dekorator';

import { initFetchOptions } from '../../data/fagsakApi';
import { notEmpty } from '../../data/notEmpty';
import { AVDELINGSLEDER_PATH, JOURNALFØRING_PATH, UTBETALINGSDATA_PATH } from '../paths';
import { ErrorFormatter } from './feilhandtering/ErrorFormatter';
import { ErrorMessage } from './feilhandtering/ErrorMessage';

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

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const formaterteFeilmeldinger = new ErrorFormatter().format(errorMessages, crashMessage);
  const resolvedErrorMessages = lagFeilmeldinger(formaterteFeilmeldinger, queryStrings, intl);

  const kanOppgavestyre = navAnsatt.kanOppgavestyre;
  const kanJournalføre = navAnsatt.kanSaksbehandle;

  const interneLenker = [];
  if (kanOppgavestyre) {
    interneLenker.push({
      tekst: intl.formatMessage({ id: 'Dekorator.Avdelingsleder' }),
      callback: (e: React.SyntheticEvent) => visAvdelingslederside(e),
    });
  }
  if (kanJournalføre) {
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
      feilmeldinger={hideErrorMessages ? EMPTY_ARRAY : resolvedErrorMessages}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      interneLenker={interneLenker}
      eksterneLenker={eksterneLenker}
    />
  );
};

const parseErrorDetails = (details: string) => {
  try {
    return JSON.parse(details);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
  errorMessages.forEach(message => {
    let msg = {
      melding: message.code ? intl.formatMessage({ id: message.code }, message.params) : (message.text ?? ''),
      tilleggsInfo: undefined,
    } as Feilmelding;
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
