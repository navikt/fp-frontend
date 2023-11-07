import React, { FunctionComponent, useMemo, useCallback } from 'react';
import { useIntl, IntlShape } from 'react-intl';
import { decodeHtmlEntity } from '@navikt/ft-utils';
import { useLocation, useNavigate } from 'react-router-dom';
import { DekoratorMedFeilviserSakIndex, Feilmelding } from '@navikt/ft-sak-dekorator';

import { useRestApiError, useRestApiErrorDispatcher } from '@navikt/fp-rest-api-hooks';
import { SYSTEMRUTINE_URL, RETTSKILDE_URL, AAREG_URL, AINNTEKT_URL } from '@navikt/fp-konstanter';

import ErrorFormatter from './feilhandtering/ErrorFormatter';
import ErrorMessage from './feilhandtering/ErrorMessage';
import { FagsakApiKeys, restFagsakApiHooks } from '../../data/fagsakContextApi';

import { AVDELINGSLEDER_PATH, JOURNALFØRING_PATH } from '../paths';

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
  errorMessages.forEach(message => {
    let msg = {
      melding: message.code ? intl.formatMessage({ id: message.code }, message.params) : message.text,
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
  const location = useLocation();
  const saksnummer = location.pathname.split('/fagsak/')[1]?.split('/')[0];
  const erSaksnummerGyldig = saksnummer?.match(/^[a-zA-Z0-9]{1,19}$/);

  const initFetch = restFagsakApiHooks.useGlobalStateRestApiData(FagsakApiKeys.INIT_FETCH);
  const { innloggetBruker: navAnsatt, sakLinks } = initFetch;

  const navigate = useNavigate();
  const visLos = useCallback(
    (e: React.SyntheticEvent) => {
      if (e.type === 'click') {
        navigate('/');
      }
      if (e.type === 'contextmenu') {
        window.open('/', '_newtab');
      }
      e.preventDefault();
    },
    [navigate],
  );
  const visAvdelingslederside = useCallback(
    (e: React.SyntheticEvent) => {
      navigate(AVDELINGSLEDER_PATH);
      e.preventDefault();
    },
    [navigate],
  );

  const visJournalføringside = useCallback(
    (e: React.SyntheticEvent) => {
      navigate(JOURNALFØRING_PATH);
      e.preventDefault();
    },
    [navigate],
  );

  // TODO Fjern utkommentering når testing er over
  // const visUtbetalingsdataSide = useCallback(
  //   (e: React.SyntheticEvent) => {
  //     navigate(UTBETALINGSDATA_PATH);
  //     e.preventDefault();
  //   },
  //   [navigate],
  // );

  const errorMessages = useRestApiError();
  const { removeErrorMessages } = useRestApiErrorDispatcher();

  const formaterteFeilmeldinger = useMemo(
    () => new ErrorFormatter().format(errorMessages, crashMessage),
    [errorMessages],
  );
  const resolvedErrorMessages = useMemo(
    () => lagFeilmeldinger(formaterteFeilmeldinger, queryStrings, intl),
    [formaterteFeilmeldinger, queryStrings],
  );

  const kanOppgavestyre = navAnsatt?.kanOppgavestyre;
  const kanJournalføre = navAnsatt?.kanSaksbehandle;

  const interneLenker = useMemo(() => {
    const lenker = [];
    if (kanOppgavestyre) {
      lenker.push({
        tekst: intl.formatMessage({ id: 'Dekorator.Avdelingsleder' }),
        callback: (e: React.SyntheticEvent) => visAvdelingslederside(e),
      });
    }
    if (kanJournalføre) {
      lenker.push({
        tekst: intl.formatMessage({ id: 'Dekorator.Journalforing' }),
        callback: (e: React.SyntheticEvent) => visJournalføringside(e),
      });
    }
    // lenker.push({
    //   tekst: intl.formatMessage({ id: 'Dekorator.Utbetalingsdata' }),
    //   callback: (e: React.SyntheticEvent) => visUtbetalingsdataSide(e),
    // });
    return lenker;
  }, [kanOppgavestyre, kanJournalføre]);

  const arbeidstakerHref = sakLinks?.find(l => l.rel === 'arbeidstaker-redirect')?.href;
  const ainntektHref = sakLinks?.find(l => l.rel === 'ainntekt-redirect')?.href;

  const eksterneLenker = useMemo(
    () => [
      {
        tekst: intl.formatMessage({ id: 'Dekorator.Rettskilde' }),
        href: RETTSKILDE_URL,
      },
      {
        tekst: intl.formatMessage({ id: 'Dekorator.Systemrutine' }),
        href: SYSTEMRUTINE_URL,
      },
      {
        tekst: intl.formatMessage({ id: 'Dekorator.AaReg' }),
        href: arbeidstakerHref && erSaksnummerGyldig ? `${arbeidstakerHref}?saksnummer=${saksnummer}` : AAREG_URL,
      },
      {
        tekst: intl.formatMessage({ id: 'Dekorator.AInntekt' }),
        href: ainntektHref && erSaksnummerGyldig ? `${ainntektHref}?saksnummer=${saksnummer}` : AINNTEKT_URL,
      },
    ],
    [arbeidstakerHref, ainntektHref, saksnummer, erSaksnummerGyldig],
  );

  return (
    <DekoratorMedFeilviserSakIndex
      tittel={intl.formatMessage({ id: 'Dekorator.Foreldrepenger' })}
      tittelCallback={visLos}
      navAnsattNavn={navAnsatt?.navn}
      feilmeldinger={hideErrorMessages ? EMPTY_ARRAY : resolvedErrorMessages}
      fjernFeilmeldinger={removeErrorMessages}
      setSiteHeight={setSiteHeight}
      interneLenker={interneLenker}
      eksterneLenker={eksterneLenker}
    />
  );
};

export default Dekorator;
